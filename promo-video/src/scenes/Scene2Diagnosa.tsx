import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { TactilePill } from '../components/TactileBadge';
import { COLORS, FONTS, SPRINGS } from '../theme';

export const Scene2Diagnosa: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const headline1 = spring({ frame: Math.max(0, frame - 4), fps, config: SPRINGS.snappy });
  const headline2 = spring({ frame: Math.max(0, frame - 11), fps, config: SPRINGS.snappy });
  const sub = spring({ frame: Math.max(0, frame - 18), fps, config: SPRINGS.smooth });
  const phoneIn = spring({ frame: Math.max(0, frame - 6), fps, config: SPRINGS.bouncy });

  // Hero Diagnostic Swipe Card pop-out & swipe-up ("PAHAM ✓") choreography!
  const cardPop = spring({ frame: Math.max(0, frame - 24), fps, config: SPRINGS.bouncy });
  const stampSlam = spring({ frame: Math.max(0, frame - 38), fps, config: SPRINGS.pop });
  const swipeOut = spring({ frame: Math.max(0, frame - 54), fps, config: { damping: 14, stiffness: 150, mass: 0.9 } });

  const mascotPeek = spring({ frame: Math.max(0, frame - 26), fps, config: SPRINGS.bouncy });

  const cardY = interpolate(cardPop, [0, 1], [80, 0]) + interpolate(swipeOut, [0, 1], [0, -340]);
  const cardX = interpolate(swipeOut, [0, 1], [0, 190]);
  const cardRot = interpolate(cardPop, [0, 1], [-8, 3]) + interpolate(swipeOut, [0, 1], [0, 18]);
  const cardOpacity = interpolate(frame, [22, 28, 72, 86], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const phoneFloat = Math.sin(frame * 0.1) * 6;
  const highlightWidth = interpolate(frame, [16, 34], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.canvas,
        overflow: 'hidden',
      }}
    >
      {/* Right playful brand backdrop curve */}
      <div
        style={{
          position: 'absolute',
          right: -140,
          top: -120,
          width: 980,
          height: 1320,
          borderRadius: '46% 0 0 46%',
          background: `linear-gradient(155deg, ${COLORS.blue50} 0%, ${COLORS.blue100} 100%)`,
        }}
      />

      {/* Decorative floating blue dots */}
      <div
        style={{
          position: 'absolute',
          right: 110,
          top: 90,
          width: 84,
          height: 84,
          borderRadius: '50%',
          backgroundColor: COLORS.blue500,
          opacity: 0.2,
          transform: `scale(${phoneIn})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 120px',
        }}
      >
        {/* LEFT COLUMN: Kinetic Typography */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 24,
            maxWidth: 880,
            zIndex: 2,
          }}
        >
          <TactilePill bg={COLORS.blue700} lip={COLORS.blue800} delay={2} fontSize={25}>
            01 • DIAGNOSA CEPAT
          </TactilePill>

          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 92,
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
              color: COLORS.ink,
            }}
          >
            <div style={{ transform: `translateY(${(1 - headline1) * 34}px)`, opacity: headline1 }}>
              Swipe 1 menit,
            </div>
            <div style={{ transform: `translateY(${(1 - headline2) * 34}px)`, opacity: headline2 }}>
              tau{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: COLORS.blue700 }}>
                <span
                  style={{
                    position: 'absolute',
                    left: -8,
                    right: -8,
                    bottom: 6,
                    height: 26,
                    borderRadius: 10,
                    backgroundColor: COLORS.blue100,
                    width: `calc(${highlightWidth}% + 16px)`,
                    zIndex: -1,
                  }}
                />
                celah
              </span>{' '}
              belajarmu.
            </div>
          </div>

          <div
            style={{
              fontFamily: FONTS.body,
              fontWeight: 600,
              fontSize: 34,
              lineHeight: 1.4,
              color: COLORS.gray,
              maxWidth: 700,
              transform: `translateY(${(1 - sub) * 24}px)`,
              opacity: sub,
            }}
          >
            Upload PPT atau PDF kuliah — langsung dipecah jadi kartu diagnosa interaktif.
          </div>

          {/* 3 Swipe Direction Legend Pills */}
          <div style={{ display: 'flex', gap: 16, marginTop: 10 }}>
            <TactilePill bg={COLORS.green700} lip={COLORS.green800} delay={28} fontSize={23} padding="11px 22px">
              ↑ Paham
            </TactilePill>
            <TactilePill bg={COLORS.amber500} lip={COLORS.amber700} color={COLORS.ink} delay={34} fontSize={23} padding="11px 22px">
              → Ragu
            </TactilePill>
            <TactilePill bg={COLORS.red700} lip="#9B1C1C" delay={40} fontSize={23} padding="11px 22px">
              ← Belum Tahu
            </TactilePill>
          </div>
        </div>

        {/* RIGHT STAGE: Phone + Floating Animated Swipe Card */}
        <div
          style={{
            position: 'relative',
            width: 580,
            height: 920,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main iPhone Mockup */}
          <div
            style={{
              transform: `translateY(${(1 - phoneIn) * 220 + phoneFloat}px) rotate(${-4 + (1 - phoneIn) * -10}deg) scale(${0.86 + phoneIn * 0.14})`,
              opacity: Math.min(1, phoneIn * 1.5),
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-diagnosa.png')} width={400} sheenDelay={14} />
          </div>

          {/* Animated Pop-Out Hero Swipe Card */}
          <div
            style={{
              position: 'absolute',
              left: -55,
              top: 230,
              width: 390,
              backgroundColor: COLORS.white,
              borderRadius: 28,
              padding: '24px 26px',
              border: `3px solid ${COLORS.blue500}`,
              boxShadow: '0 28px 56px rgba(2, 119, 189, 0.24), 0 8px 0 #C7ECFD',
              transform: `translate(${cardX}px, ${cardY}px) rotate(${cardRot}deg) scale(${0.7 + cardPop * 0.3})`,
              opacity: cardOpacity,
              zIndex: 4,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span
                style={{
                  backgroundColor: COLORS.blue50,
                  color: COLORS.blue700,
                  fontFamily: FONTS.display,
                  fontWeight: 800,
                  fontSize: 17,
                  padding: '5px 14px',
                  borderRadius: 999,
                }}
              >
                Tahap 1 dari 8
              </span>
              <span style={{ fontFamily: FONTS.body, fontWeight: 600, fontSize: 16, color: COLORS.gray }}>
                PBO • Java
              </span>
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontWeight: 900,
                fontSize: 32,
                color: COLORS.ink,
                marginBottom: 10,
              }}
            >
              Class &amp; Object
            </div>
            <div
              style={{
                backgroundColor: COLORS.ink,
                borderRadius: 16,
                padding: '14px 16px',
                fontFamily: 'Consolas, monospace',
                fontSize: 16,
                lineHeight: 1.5,
                color: '#E2E8F0',
              }}
            >
              <span style={{ color: '#29B6F6' }}>class</span> Mahasiswa {'{'}
              <br />
              &nbsp;&nbsp;String nama = <span style={{ color: '#64DD17' }}>&quot;Raka&quot;</span>;
              <br />
              {'}'}
            </div>

            {/* Slapped Green "PAHAM ✓" Stamp! */}
            <div
              style={{
                position: 'absolute',
                right: -24,
                top: -34,
                backgroundColor: COLORS.green500,
                color: COLORS.ink,
                fontFamily: FONTS.display,
                fontWeight: 900,
                fontSize: 28,
                padding: '10px 24px',
                borderRadius: 16,
                border: `4px solid ${COLORS.white}`,
                boxShadow: `0 6px 0 ${COLORS.green700}, 0 14px 28px rgba(48, 133, 16, 0.32)`,
                transform: `scale(${stampSlam}) rotate(${-10 + (1 - stampSlam) * 18}deg)`,
                opacity: frame >= 38 ? 1 : 0,
              }}
            >
              PAHAM ✓
            </div>
          </div>

          {/* Cheerful peeking mascot */}
          <Img
            src={staticFile('assets/mascot-senang.png')}
            style={{
              position: 'absolute',
              right: -35,
              bottom: 35,
              width: 245,
              height: 'auto',
              filter: 'drop-shadow(0 16px 24px rgba(1, 92, 148, 0.25))',
              transform: `scale(${mascotPeek}) rotate(${(1 - mascotPeek) * 18 - 6}deg)`,
              zIndex: 5,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
