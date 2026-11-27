import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FONTS, SPRINGS } from '../theme';

type TactilePillProps = {
  readonly children: React.ReactNode;
  readonly bg: string;
  readonly lip: string;
  readonly color?: string;
  readonly delay?: number;
  readonly fontSize?: number;
  readonly padding?: string;
  readonly style?: React.CSSProperties;
};

export const TactilePill: React.FC<TactilePillProps> = ({
  children,
  bg,
  lip,
  color = '#FFFFFF',
  delay = 0,
  fontSize = 26,
  padding = '14px 30px',
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: SPRINGS.bouncy,
  });

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        backgroundColor: bg,
        color,
        fontFamily: FONTS.display,
        fontWeight: 800,
        fontSize,
        letterSpacing: '0.02em',
        padding,
        borderRadius: 999,
        boxShadow: `0 6px 0 ${lip}, inset 0 2px 0 rgba(255,255,255,0.26)`,
        transform: `scale(${s}) translateY(${(1 - s) * 18}px)`,
        opacity: Math.min(1, s * 1.4),
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

type SunburstProps = {
  readonly rayColor?: string;
  readonly rays?: number;
  readonly speedDegPerFrame?: number;
  readonly opacity?: number;
};

export const SunburstRays: React.FC<SunburstProps> = ({
  rayColor = 'rgba(255, 255, 255, 0.14)',
  rays = 14,
  speedDegPerFrame = 0.35,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  const angle = frame * speedDegPerFrame;
  const slice = 360 / (rays * 2);

  const stops: string[] = [];
  for (let i = 0; i < rays * 2; i++) {
    const start = (i * slice).toFixed(2);
    const end = ((i + 1) * slice).toFixed(2);
    const col = i % 2 === 0 ? rayColor : 'transparent';
    stops.push(`${col} ${start}deg ${end}deg`);
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 2600,
        height: 2600,
        marginLeft: -1300,
        marginTop: -1300,
        borderRadius: '50%',
        background: `conic-gradient(${stops.join(', ')})`,
        transform: `rotate(${angle}deg)`,
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
};

type ConfettiBurstProps = {
  readonly triggerFrame?: number;
};

const CONFETTI_ITEMS = [
  { angle: -150, dist: 520, color: '#64DD17', w: 22, h: 12, rot: 45 },
  { angle: -125, dist: 440, color: '#FEF3C7', w: 18, h: 18, rot: 20 },
  { angle: -95, dist: 470, color: '#CE82FF', w: 24, h: 12, rot: -35 },
  { angle: -65, dist: 450, color: '#F59E0B', w: 16, h: 16, rot: 60 },
  { angle: -32, dist: 540, color: '#FFFFFF', w: 24, h: 11, rot: -20 },
  { angle: -14, dist: 600, color: '#64DD17', w: 20, h: 12, rot: 75 },
  { angle: 16, dist: 580, color: '#F59E0B', w: 22, h: 12, rot: -45 },
  { angle: 38, dist: 510, color: '#CE82FF', w: 18, h: 18, rot: 30 },
  { angle: 145, dist: 510, color: '#F59E0B', w: 22, h: 12, rot: -55 },
  { angle: 165, dist: 590, color: '#FFFFFF', w: 20, h: 11, rot: 40 },
  { angle: -168, dist: 610, color: '#CE82FF', w: 18, h: 18, rot: -15 },
  { angle: 120, dist: 430, color: '#64DD17', w: 24, h: 12, rot: 25 },
  { angle: 65, dist: 440, color: '#FFFFFF', w: 16, h: 16, rot: -60 },
  { angle: -112, dist: 560, color: '#FFFFFF', w: 14, h: 14, rot: 50 },
  { angle: -48, dist: 570, color: '#64DD17', w: 20, h: 10, rot: -30 },
  { angle: 155, dist: 460, color: '#C7ECFD', w: 18, h: 10, rot: 70 },
];

export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({
  triggerFrame = 6,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = Math.max(0, frame - triggerFrame);
  const progress = spring({
    frame: f,
    fps,
    config: { damping: 18, stiffness: 90, mass: 1 },
  });
  const drift = f * 0.85;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {CONFETTI_ITEMS.map((c, i) => {
        const rad = (c.angle * Math.PI) / 180;
        const x = 960 + Math.cos(rad) * c.dist * progress;
        const y = 500 + Math.sin(rad) * c.dist * progress + drift * (0.4 + (i % 3) * 0.25);
        const rot = c.rot + f * (i % 2 === 0 ? 3.5 : -3.5);
        const opacity = frame < triggerFrame ? 0 : Math.max(0, 1 - Math.max(0, f - 45) / 35);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: c.w,
              height: c.h,
              borderRadius: c.w === c.h ? '50%' : 5,
              backgroundColor: c.color,
              transform: `translate(-50%, -50%) rotate(${rot}deg) scale(${progress})`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};
