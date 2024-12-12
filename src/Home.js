import React from 'react';
import { CanvasRevealEffectDemo } from './CanvasRevealEffectDemo';
import { VortexDemo } from './VortexDemo';
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';
import { LampDemo } from './lampDemo';
import { SparklesPreview } from './sparklesPreview';

const Home = () => {
  return (
    <div className="bg-black">
      {/* <VortexDemo /> */}
      {/* <SparklesPreview /> */}
      <LampDemo />
      <AnimatedTestimonialsDemo />
      <CanvasRevealEffectDemo />
    </div>
  );
} 

export default Home;