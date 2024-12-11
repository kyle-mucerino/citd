import React from 'react';
import { CanvasRevealEffectDemo } from './CanvasRevealEffectDemo';
import { VortexDemo } from './VortexDemo';
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';

const Home = () => {
  return (
    <div className="bg-black">
      <VortexDemo />
      <AnimatedTestimonialsDemo />
      <CanvasRevealEffectDemo />
    </div>
  );
} 

export default Home;