import React from 'react';
import {
  AbsoluteFill,
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { ConfettiBurst, SunburstRays, TactilePill } from '../components/TactileBadge';
import { COLORS, FONTS, SPRINGS } from '../theme';

export const Scene5Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const mascotPop = spring({ frame: Math.max(0, frame - 2), fps, config: SPRINGS.bouncy });
  const logoPop = spring({ frame: Math.max(0, frame - 10), fps, config: SPRINGS.bouncy });
  const taglinePop = spring({ frame: Math.max(0, frame - 18), fps, config: SPRINGS.snappy });
  const footerPop = spring({ frame: Math.max(0, frame - 34), fps, config: SPRINGS.smooth });

  const mascotHop = Math.abs(Math.sin(Math.max(0, frame - 14) * 0.18)) * 18;
  const ctaPulse = 1 + Math.sin(Math.max(0, frame - 32) * 0.25) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 44%, #3CC6FF 0%, ${COLORS.blue500} 45%, ${COLORS.blue700} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Rotating Celebration Sunburst Rays */}
      <SunburstRays rayColor="rgba(255, 255, 255, 0.14)" rays={16} speedDegPerFrame={0.42} />

      {/* Confetti Celebration Burst */}
      <ConfettiBurst triggerFrame={5} />

      {/* Soft curved green hill motif at bottom (homage to screen-landing.png!) */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: -360,
          width: 2400,
          height: 520,
          marginLeft: -1200,
          borderRadius: '50% 50% 0 0',
          background: `linear-gradient(180deg, ${COLORS.green500} 0%, ${COLORS.green600} 100%)`,
          boxShadow: `0 -10px 0 rgba(255,255,255,0.22)`,
          transform: `translateY(${(1 - mascotPop) * 120}px)`,
        }}
      />

      {/* Centered Brand Lockup */}
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 16,
          paddingBottom: 60,
          zIndex: 3,
        }}
      >
        {/* Mascot Circle Badge */}
        <div
          style={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            backgroundColor: COLORS.white,
            boxShadow: `0 12px 0 ${COLORS.blue100}, 0 28px 56px rgba(1, 92, 148, 0.34)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${mascotPop}) translateY(${-mascotHop}px)`,
            marginBottom: 4,
          }}
        >
          <Img
            src={staticFile('assets/mascot-ketawa.png')}
            style={{
              width: 192,
              height: 'auto',
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontFamily: FONTS.display,
            fontWeight: 900,
            fontSize: 138,
            lineHeight: 0.94,
            letterSpacing: '-0.04em',
            color: COLORS.white,
            textShadow: `0 10px 0 ${COLORS.blue800}`,
            transform: `scale(${logoPop}) translateY(${(1 - logoPop) * 32}px)`,
          }}
        >
          hoppa
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 38,
            color: COLORS.blue50,
            textShadow: '0 3px 12px rgba(1, 92, 148, 0.35)',
            transform: `translateY(${(1 - taglinePop) * 24}px)`,
            opacity: taglinePop,
            marginBottom: 14,
          }}
        >
          Tambal celah belajar, langkah demi langkah.
        </div>

        {/* Tactile 3D CTA Button */}
        <div style={{ transform: `scale(${ctaPulse})` }}>
          <TactilePill
            bg={COLORS.green500}
            lip={COLORS.green700}
            color={COLORS.ink}
            delay={26}
            fontSize={34}
            padding="20px 48px"
          >
            Hop Over The Gap  →
          </TactilePill>
        </div>
      </AbsoluteFill>

      {/* Bottom Event Micro-Credit on green hill */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: 24,
          letterSpacing: '0.06em',
          color: COLORS.white,
          textShadow: `0 2px 0 ${COLORS.green700}`,
          opacity: footerPop,
          zIndex: 4,
        }}
      >
        HOPPA • UI/UX SEVENT X • UNTUK MAHASISWA INDONESIA
      </div>
    </AbsoluteFill>
  );
};
