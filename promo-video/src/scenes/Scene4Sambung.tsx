import React from 'react';
import {
  AbsoluteFill,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { SunburstRays, TactilePill } from '../components/TactileBadge';
import { COLORS, FONTS, SPRINGS } from '../theme';

export const Scene4Sambung: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headline1 = spring({ frame: Math.max(0, frame - 4), fps, config: SPRINGS.snappy });
  const headline2 = spring({ frame: Math.max(0, frame - 12), fps, config: SPRINGS.snappy });
  const phoneCenter = spring({ frame: Math.max(0, frame - 6), fps, config: SPRINGS.bouncy });
  const phoneLeft = spring({ frame: Math.max(0, frame - 16), fps, config: SPRINGS.bouncy });
  const phoneRight = spring({ frame: Math.max(0, frame - 24), fps, config: SPRINGS.bouncy });
  const tokenPop = spring({ frame: Math.max(0, frame - 44), fps, config: SPRINGS.pop });
  const wavePop = spring({ frame: Math.max(0, frame - 32), fps, config: SPRINGS.bouncy });

  const floatC = Math.sin(frame * 0.1) * 6;
  const floatL = Math.cos(frame * 0.1) * 7;
  const floatR = Math.sin(frame * 0.1 + 1.4) * 7;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 68% 50%, #9E43EA 0%, ${COLORS.purple700} 48%, ${COLORS.purple800} 100%)`,
        overflow: 'hidden',
      }}
    >
      <SunburstRays rayColor="rgba(255, 255, 255, 0.07)" rays={12} speedDegPerFrame={-0.25} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 110px',
        }}
      >
        {/* LEFT COLUMN: Kinetic White Headlines + 3 Tactile Feature Chips */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 24,
            maxWidth: 740,
            zIndex: 4,
          }}
        >
          <TactilePill bg={COLORS.amber500} lip={COLORS.amber700} color={COLORS.ink} delay={2} fontSize={25}>
            03 • SAMBUNG ANONIM
          </TactilePill>

          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: COLORS.white,
              textShadow: `0 6px 0 ${COLORS.purple800}`,
            }}
          >
            <div style={{ transform: `translateY(${(1 - headline1) * 34}px)`, opacity: headline1 }}>
              Mentok?
            </div>
            <div style={{ transform: `translateY(${(1 - headline2) * 34}px)`, opacity: headline2 }}>
              Tanya anonim{' '}
              <span style={{ color: COLORS.amber100 }}>bareng teman!</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, marginTop: 8 }}>
            <TactilePill bg={COLORS.blue500} lip={COLORS.blue700} color={COLORS.ink} delay={22} fontSize={25} padding="12px 26px">
              Voice Changer • Aman &amp; Anonim
            </TactilePill>
            <TactilePill bg={COLORS.green500} lip={COLORS.green700} color={COLORS.ink} delay={30} fontSize={25} padding="12px 26px">
              Bantu Teman → Dapat +1 Token
            </TactilePill>
            <TactilePill bg={COLORS.white} lip={COLORS.purple100} color={COLORS.purple800} delay={38} fontSize={25} padding="12px 26px">
              Naik Peringkat Leaderboard Kampus
            </TactilePill>
          </div>
        </div>

        {/* RIGHT STAGE: 3-Phone Dynamic Fan Showcase */}
        <div
          style={{
            position: 'relative',
            width: 860,
            height: 920,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Left Phone: Anonymous Audio Call */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 135,
              transform: `translate(${(1 - phoneLeft) * 140}px, ${(1 - phoneLeft) * 150 + floatL}px) rotate(${-10}deg) scale(${0.8 + phoneLeft * 0.16})`,
              opacity: Math.min(1, phoneLeft * 1.4),
              zIndex: 2,
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-call.png')} width={315} sheenDelay={22} />
          </div>

          {/* Right Phone: Celebration +1 Token */}
          <div
            style={{
              position: 'absolute',
              right: 15,
              top: 145,
              transform: `translate(${(1 - phoneRight) * -140}px, ${(1 - phoneRight) * 150 + floatR}px) rotate(${10}deg) scale(${0.8 + phoneRight * 0.16})`,
              opacity: Math.min(1, phoneRight * 1.4),
              zIndex: 2,
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-celebrate.png')} width={315} sheenDelay={30} />
          </div>

          {/* Center Hero Phone: Leaderboard Podium */}
          <div
            style={{
              position: 'relative',
              transform: `translateY(${(1 - phoneCenter) * 220 + floatC}px) scale(${0.86 + phoneCenter * 0.14})`,
              opacity: Math.min(1, phoneCenter * 1.5),
              zIndex: 3,
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-leaderboard.png')} width={355} sheenDelay={12} />
          </div>

          {/* Floating Animated Voice Wave Pill (top-left) */}
          <div
            style={{
              position: 'absolute',
              left: -25,
              top: 78,
              backgroundColor: COLORS.white,
              borderRadius: 22,
              padding: '14px 24px',
              boxShadow: `0 7px 0 ${COLORS.blue100}, 0 20px 40px rgba(0,0,0,0.24)`,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              transform: `scale(${wavePop}) rotate(-4deg)`,
              zIndex: 5,
            }}
          >
            {/* Animated equalizer bars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, height: 34 }}>
              {[0, 1, 2, 3, 4].map((idx) => {
                const h = 12 + Math.abs(Math.sin(frame * 0.35 + idx * 1.1)) * 22;
                return (
                  <div
                    key={idx}
                    style={{
                      width: 6,
                      height: h,
                      borderRadius: 999,
                      backgroundColor: idx % 2 === 0 ? COLORS.blue500 : COLORS.purple700,
                    }}
                  />
                );
              })}
            </div>
            <div style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 22, color: COLORS.ink }}>
              Buaya Dago • Live
            </div>
          </div>

          {/* Floating Sparkling "+1 Token!" Reward Badge (bottom-right) */}
          <div
            style={{
              position: 'absolute',
              right: 25,
              bottom: 72,
              backgroundColor: COLORS.green500,
              color: COLORS.ink,
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 34,
              padding: '14px 30px',
              borderRadius: 999,
              border: `4px solid ${COLORS.white}`,
              boxShadow: `0 7px 0 ${COLORS.green700}, 0 20px 36px rgba(0,0,0,0.28)`,
              transform: `scale(${tokenPop}) rotate(6deg)`,
              zIndex: 5,
            }}
          >
            +1 Token! ★
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
