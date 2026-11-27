import React from 'react';
import { Img, interpolate, useCurrentFrame } from 'remotion';

type PhoneMockupProps = {
  readonly src: string;
  readonly width?: number;
  readonly style?: React.CSSProperties;
  readonly sheenDelay?: number;
  readonly borderColor?: string;
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  width = 390,
  style,
  sheenDelay = 12,
  borderColor = '#161D26',
}) => {
  const frame = useCurrentFrame();
  const height = Math.round(width * (956 / 440));
  const bezel = Math.round(width * 0.032);
  const outerRadius = Math.round(width * 0.135);
  const innerRadius = Math.round(width * 0.108);

  const sheenX = interpolate(frame, [sheenDelay, sheenDelay + 28], [-120, 160], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width,
        height,
        borderRadius: outerRadius,
        background: `linear-gradient(145deg, #2B3544 0%, ${borderColor} 35%, #0D1219 100%)`,
        padding: bezel,
        boxSizing: 'border-box',
        boxShadow:
          '0 34px 70px rgba(15, 23, 42, 0.28), 0 12px 24px rgba(15, 23, 42, 0.16), inset 0 1.5px 2px rgba(255,255,255,0.28)',
        position: 'relative',
        ...style,
      }}
    >
      {/* Side power / volume micro accents */}
      <div
        style={{
          position: 'absolute',
          right: -3,
          top: '26%',
          width: 4,
          height: height * 0.11,
          borderRadius: '0 3px 3px 0',
          backgroundColor: '#2B3544',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: '22%',
          width: 4,
          height: height * 0.075,
          borderRadius: '3px 0 0 3px',
          backgroundColor: '#2B3544',
        }}
      />

      {/* Screen container */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: innerRadius,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#F7F9FA',
        }}
      >
        <Img
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Subtle animated glass glare sweep */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `linear-gradient(112deg, transparent ${sheenX - 28}%, rgba(255,255,255,0.22) ${sheenX}%, transparent ${sheenX + 26}%)`,
          }}
        />
      </div>
    </div>
  );
};
