import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import React from 'react';
import { Composition } from 'remotion';
import { HoppaPromo } from './HoppaPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HoppaPromo"
        component={HoppaPromo}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
