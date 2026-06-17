import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Users, Zap } from 'lucide-react';

interface QualityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  glowColor: string; // Tailwind glow class
  borderColor: string;
}

const qualities: QualityCard[] = [
  {
    title: 'Problem Solving',
    description: 'Strong foundation in Data Structures and Algorithms. Proven track record of solving complex algorithmic problems with optimal time and space complexity.',
    icon: <BrainCircuit size={28} />,
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    borderColor: 'group-hover:border-indigo-500/50'
  },
  {
    title: 'System Design Thinking',
    description: 'Focused on architecting scalable, maintainable, and distributed systems. Designing clear API interfaces, database schemas, and microservice workflows.',
    icon: <Layers size={28} />,
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    title: 'Leadership & Collab',
    description: 'Demonstrated ability to coordinate cross-functional student teams and manage logistics for large-scale events, fostering collaboration and execution.',
    icon: <Users size={28} />,
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    borderColor: 'group-hover:border-cyan-500/50'
  },
  {
    title: 'Continuous Learning',
    description: 'Passionately learning modern tech stacks, cloud services, and AI/ML algorithms. Adapting quickly to emerging engineering patterns and frameworks.',
    icon: <Zap size={28} />,
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    borderColor: 'group-hover:border-pink-500/50'
  }
];

export const WhatIBring: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        staggerChildren: 0.1,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            What I Bring To A Team
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[4px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 mt-4 text-sm sm:text-base"
          >
            Engineers at FAANG companies are defined by technical excellence and adaptability. Here are the core pillars of my engineering approach.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {qualities.map((q, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl glass-panel border border-white/5 transition-all duration-300 ${q.glowColor} ${q.borderColor} hover:bg-darkCardSolid/80`}
            >
              {/* Card Hover Ambient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Icon Wrapper */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:border-transparent transition-all duration-300 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                  {q.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {q.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {q.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default WhatIBring;
