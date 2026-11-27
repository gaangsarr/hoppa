import React from 'react';
import { Audio } from '@remotion/media';
import { TransitionSeries, linearTiming, springTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { AbsoluteFill, staticFile } from 'remotion';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Diagnosa } from './scenes/Scene2Diagnosa';
import { Scene3Roadmap } from './scenes/Scene3Roadmap';
import { Scene4Sambung } from './scenes/Scene4Sambung';
import { Scene5Outro } from './scenes/Scene5Outro';

export const HoppaPromo: React.FC = () => {
  // Exact 15.0s = 450 frames @ 30fps
  // 5 scenes: 102 + 102 + 102 + 102 + 90 = 498 frames
  // 4 overlapping transitions (12f each) = -48 frames => 450 frames exact!
  return (
    <AbsoluteFill style={{ backgroundColor: '#29B6F6' }}>
      {/* Visual Multi-Scene Choreography */}
      <TransitionSeries>
        <TransitionSeries.Sequence name="Scene 1 - Hook & Hoppa Reveal" durationInFrames={102}>
          <Scene1Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence name="Scene 2 - Diagnosa Cepat" durationInFrames={102}>
          <Scene2Diagnosa />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence name="Scene 3 - Roadmap & Ebbinghaus" durationInFrames={102}>
          <Scene3Roadmap />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-bottom' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence name="Scene 4 - Sambung Anonim" durationInFrames={102}>
          <Scene4Sambung />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence name="Scene 5 - Outro Brand Lockup" durationInFrames={90}>
          <Scene5Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Master-Mixed Upbeat 120 BPM BGM + Frame-Synced SFX Track */}
      <Audio src={staticFile('audio/master-mix.wav')} volume={1} />
    </AbsoluteFill>
  );
};
