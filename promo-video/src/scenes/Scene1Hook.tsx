import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { SunburstRays, TactilePill } from '../components/TactileBadge';
import { COLORS, FONTS, SPRINGS } from '../theme';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 0 (0..44): "Materi kuliah bikin bingung?" with mascot-bingung
  // Beat 3 (45..102): Snappy Duolingo-style flip to "Kenalan sama hoppa!"
  const flipProgress = spring({
    frame: Math.max(0, frame - 44),
    fps,
    config: { damping: 14, stiffness: 200, mass: 0.9 },
  });

  // Part 1 animations
  const mascot1Pop = spring({ frame, fps, config: SPRINGS.bouncy });
  const mascot1Wobble = Math.sin(frame * 0.28) * 5;
  const line1Pop = spring({ frame: Math.max(0, frame - 5), fps, config: SPRINGS.snappy });
  const line2Pop = spring({ frame: Math.max(0, frame - 14), fps, config: SPRINGS.snappy });
  const qMark1 = spring({ frame: Math.max(0, frame - 10), fps, config: SPRINGS.pop });
  const qMark2 = spring({ frame: Math.max(0, frame - 18), fps, config: SPRINGS.pop });

  const part1ExitY = interpolate(flipProgress, [0, 1], [0, -140]);
  const part1Opacity = interpolate(frame, [42, 50], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Part 2 animations (frame >= 44)
  const revealWaveY = interpolate(flipProgress, [0, 1], [1120, 0]);
  const mascot2Pop = spring({
    frame: Math.max(0, frame - 48),
    fps,
    config: SPRINGS.bouncy,
  });
  const mascot2Bounce = Math.abs(Math.sin(Math.max(0, frame - 58) * 0.2)) * 16;
  const logoPop = spring({
    frame: Math.max(0, frame - 50),
    fps,
    config: SPRINGS.bouncy,
  });
  const subPop = spring({
    frame: Math.max(0, frame - 58),
    fps,
    config: SPRINGS.snappy,
  });

  const circleExpand = interpolate(frame, [42, 62], [0, 1.35], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 42%, #39C2FF 0%, ${COLORS.blue500} 48%, ${COLORS.blue600} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Subtle floating background shapes */}
      <div
        style={{
          position: 'absolute',
          left: -120,
          top: -120,
          width: 440,
          height: 440,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          transform: `translateY(${Math.sin(frame * 0.08) * 18}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -90,
          bottom: -140,
          width: 520,
          height: 520,
          borderRadius: '50%',
          backgroundColor: 'rgba(2, 119, 189, 0.22)',
          transform: `translateY(${Math.cos(frame * 0.08) * 18}px)`,
        }}
      />

      {/* PART 1: Hook Problem ("Materi kuliah bikin bingung?") */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 28,
          opacity: part1Opacity,
          transform: `translateY(${part1ExitY}px)`,
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Floating playful question marks */}
          <div
            style={{
              position: 'absolute',
              left: -105,
              top: -20,
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 88,
              color: COLORS.amber100,
              textShadow: `0 6px 0 ${COLORS.amber500}`,
              transform: `scale(${qMark1}) rotate(${-18 + Math.sin(frame * 0.2) * 8}deg)`,
            }}
          >
            ?
          </div>
          <div
            style={{
              position: 'absolute',
              right: -95,
              top: -45,
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 108,
              color: COLORS.white,
              textShadow: `0 7px 0 ${COLORS.blue700}`,
              transform: `scale(${qMark2}) rotate(${16 + Math.cos(frame * 0.22) * 8}deg)`,
            }}
          >
            ?
          </div>

          <Img
            src={staticFile('assets/mascot-bingung.png')}
            style={{
              width: 390,
              height: 'auto',
              filter: 'drop-shadow(0 24px 32px rgba(1, 92, 148, 0.34))',
              transform: `scale(${mascot1Pop}) rotate(${mascot1Wobble}deg)`,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: COLORS.white,
              textShadow: `0 7px 0 ${COLORS.blue700}`,
              transform: `scale(${line1Pop}) translateY(${(1 - line1Pop) * 32}px)`,
            }}
          >
            Materi kuliah
          </div>
          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: COLORS.amber100,
              textShadow: `0 7px 0 ${COLORS.blue800}`,
              transform: `scale(${line2Pop}) translateY(${(1 - line2Pop) * 36}px)`,
            }}
          >
            bikin bingung?
          </div>
        </div>
      </AbsoluteFill>

      {/* PART 2: Energetic Color-Pop Brand Reveal ("Kenalan sama hoppa!") */}
      <AbsoluteFill
        style={{
          pointerEvents: 'none',
          transform: `translateY(${revealWaveY}px)`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -8,
            left: 0,
            right: 0,
            bottom: -8,
            background: `linear-gradient(135deg, ${COLORS.blue50} 0%, ${COLORS.white} 58%, ${COLORS.green50} 100%)`,
          }}
        />
        <SunburstRays rayColor="rgba(41, 182, 246, 0.08)" rays={14} speedDegPerFrame={0.28} />

        {/* Big brand circle behind mascot */}
        <div
          style={{
            position: 'absolute',
            right: 175,
            top: '50%',
            width: 560,
            height: 560,
            marginTop: -280,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.blue500} 0%, ${COLORS.blue600} 100%)`,
            boxShadow: `0 22px 0 ${COLORS.blue700}, 0 40px 80px rgba(2, 119, 189, 0.25)`,
            transform: `scale(${circleExpand * 0.78})`,
          }}
        />

        {/* Content layout */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 190px',
          }}
        >
          {/* Left: Brand introduction */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 22, maxWidth: 900 }}>
            <div
              style={{
                fontFamily: FONTS.body,
                fontWeight: 700,
                fontSize: 38,
                color: COLORS.blue700,
                transform: `translateY(${(1 - subPop) * 28}px)`,
                opacity: subPop,
              }}
            >
              Kenalan sama
            </div>

            <div
              style={{
                fontFamily: FONTS.display,
                fontWeight: 900,
                fontSize: 158,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                color: COLORS.blue700,
                textShadow: `0 10px 0 ${COLORS.blue100}`,
                transform: `scale(${logoPop}) translateY(${(1 - logoPop) * 40}px)`,
                transformOrigin: 'left center',
              }}
            >
              hoppa
            </div>

            <div style={{ marginTop: 10 }}>
              <TactilePill
                bg={COLORS.green500}
                lip={COLORS.green700}
                color={COLORS.ink}
                delay={58}
                fontSize={32}
                padding="16px 34px"
              >
                Hop over the gap!
              </TactilePill>
            </div>
          </div>

          {/* Right: Joyful standing crocodile mascot */}
          <div
            style={{
              width: 520,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: `scale(${mascot2Pop}) translateY(${-mascot2Bounce}px)`,
            }}
          >
            <Img
              src={staticFile('assets/mascot-ketawa.png')}
              style={{
                width: 440,
                height: 'auto',
                filter: 'drop-shadow(0 26px 36px rgba(1, 92, 148, 0.30))',
              }}
            />
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
