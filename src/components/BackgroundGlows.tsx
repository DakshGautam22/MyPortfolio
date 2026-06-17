import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlows: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Glow (Indigo) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-radial from-indigo-500/10 via-transparent to-transparent blur-[80px]"
      />

      {/* Top Right Glow (Purple) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-[100px]"
      />

      {/* Middle Left Glow (Cyan/Blue) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[40%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-cyan-500/8 via-transparent to-transparent blur-[90px]"
      />

      {/* Bottom Right Glow (Violet) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-radial from-violet-600/10 via-transparent to-transparent blur-[100px]"
      />
    </div>
  );
};
export default BackgroundGlows;
