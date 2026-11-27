import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { TactilePill } from '../components/TactileBadge';
import { COLORS, FONTS, SPRINGS } from '../theme';

export const Scene3Roadmap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phone1In = spring({ frame: Math.max(0, frame - 4), fps, config: SPRINGS.bouncy });
  const phone2In = spring({ frame: Math.max(0, frame - 18), fps, config: SPRINGS.bouncy });
  const headline1 = spring({ frame: Math.max(0, frame - 8), fps, config: SPRINGS.snappy });
  const headline2 = spring({ frame: Math.max(0, frame - 16), fps, config: SPRINGS.snappy });
  const sub = spring({ frame: Math.max(0, frame - 24), fps, config: SPRINGS.smooth });
  const retentionCard = spring({ frame: Math.max(0, frame - 36), fps, config: SPRINGS.bouncy });

  const float1 = Math.sin(frame * 0.09) * 7;
  const float2 = Math.cos(frame * 0.09) * 7;

  // Pulsing green/blue ring for active roadmap step
  const pulseCycle = (frame % 30) / 30;
  const pulseScale = 1 + pulseCycle * 0.75;
  const pulseOpacity = (1 - pulseCycle) * 0.55;

  // Animated dashed path offset in background
  const dashOffset = interpolate(frame, [0, 102], [0, -140]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.green50} 0%, #F7FBFE 52%, ${COLORS.blue50} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Animated winding stepping-stone SVG road in background */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.45 }}
      >
        <path
          d="M -60 920 C 260 880, 320 560, 620 520 C 920 480, 1020 180, 1420 200 C 1700 214, 1840 120, 1980 60"
          fill="none"
          stroke={COLORS.blue100}
          strokeWidth="26"
          strokeLinecap="round"
        />
        <path
          d="M -60 920 C 260 880, 320 560, 620 520 C 920 480, 1020 180, 1420 200 C 1700 214, 1840 120, 1980 60"
          fill="none"
          stroke={COLORS.blue500}
          strokeWidth="8"
          strokeDasharray="24 22"
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 115px',
        }}
      >
        {/* LEFT STAGE: Dual Staggered Phones (Roadmap + Ebbinghaus Report) */}
        <div
          style={{
            position: 'relative',
            width: 760,
            height: 920,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Back-right phone: Ebbinghaus Report */}
          <div
            style={{
              position: 'absolute',
              left: 315,
              top: 95,
              transform: `translate(${(1 - phone2In) * -140}px, ${(1 - phone2In) * 160 + float2}px) rotate(${5 + (1 - phone2In) * -8}deg) scale(${0.82 + phone2In * 0.14})`,
              opacity: Math.min(1, phone2In * 1.4),
              zIndex: 1,
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-report.png')} width={355} sheenDelay={28} />
          </div>

          {/* Front-left Hero phone: Winding Roadmap */}
          <div
            style={{
              position: 'relative',
              left: 10,
              top: 15,
              transform: `translateY(${(1 - phone1In) * 200 + float1}px) rotate(${-4 + (1 - phone1In) * -8}deg) scale(${0.86 + phone1In * 0.14})`,
              opacity: Math.min(1, phone1In * 1.5),
              zIndex: 2,
            }}
          >
            <PhoneMockup src={staticFile('assets/screen-roadmap.png')} width={390} sheenDelay={12} />

            {/* Subtle pulsing highlight ring aligned to active blue step node */}
            <div
              style={{
                position: 'absolute',
                right: 76,
                top: 325,
                width: 68,
                height: 68,
                borderRadius: '50%',
                border: `5px solid ${COLORS.blue500}`,
                transform: `scale(${pulseScale})`,
                opacity: pulseOpacity,
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Floating Ebbinghaus Retention Pill */}
          <div
            style={{
              position: 'absolute',
              left: 220,
              bottom: 58,
              backgroundColor: COLORS.white,
              borderRadius: 24,
              padding: '18px 28px',
              border: `3px solid ${COLORS.green500}`,
              boxShadow: `0 8px 0 ${COLORS.green100}, 0 24px 44px rgba(48, 133, 16, 0.22)`,
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              transform: `scale(${retentionCard}) translateY(${(1 - retentionCard) * 40}px)`,
              opacity: Math.min(1, retentionCard * 1.4),
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                backgroundColor: COLORS.green500,
                boxShadow: `0 4px 0 ${COLORS.green700}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: FONTS.display,
                fontWeight: 900,
                fontSize: 28,
                color: COLORS.ink,
              }}
            >
              ✓
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 900,
                  fontSize: 29,
                  color: COLORS.green700,
                  lineHeight: 1.1,
                }}
              >
                Retensi 78% • Terjaga
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontWeight: 600,
                  fontSize: 19,
                  color: COLORS.gray,
                  marginTop: 2,
                }}
              >
                Kurva Ebbinghaus • 2x Review
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Kinetic Typography */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 24,
            maxWidth: 810,
            zIndex: 3,
          }}
        >
          <TactilePill bg={COLORS.green700} lip={COLORS.green800} delay={4} fontSize={25}>
            02 • ROADMAP &amp; RETENSI
          </TactilePill>

          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 900,
              fontSize: 88,
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
              color: COLORS.ink,
            }}
          >
            <div style={{ transform: `translateY(${(1 - headline1) * 34}px)`, opacity: headline1 }}>
              Langkah terarah,
            </div>
            <div
              style={{
                color: COLORS.green700,
                transform: `translateY(${(1 - headline2) * 34}px)`,
                opacity: headline2,
              }}
            >
              ingatan melekat.
            </div>
          </div>

          <div
            style={{
              fontFamily: FONTS.body,
              fontWeight: 600,
              fontSize: 33,
              lineHeight: 1.42,
              color: COLORS.gray,
              maxWidth: 690,
              transform: `translateY(${(1 - sub) * 24}px)`,
              opacity: sub,
            }}
          >
            Batu pijakan runtut sesuai diagnosa — dipantau Kurva Ebbinghaus biar nggak gampang lupa.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
