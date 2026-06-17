import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, ShieldCheck } from 'lucide-react';

export const Leadership: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="leadership" className="relative py-20 overflow-hidden">
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
            Leadership & Responsibility
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
            Demonstrating coordination, resource management, and team leadership in high-stakes environments.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl glass-panel border border-white/5 bg-darkCard/30 hover:bg-darkCardSolid/80 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_10px_35px_-10px_rgba(99,102,241,0.2)] flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Hover ambient lighting */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Left badge column */}
            <div className="flex md:flex-col items-center justify-between w-full md:w-auto md:items-start shrink-0 space-y-2 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-8">
              <div className="flex items-center space-x-3 text-indigo-400">
                <ShieldCheck size={28} />
                <span className="font-display font-extrabold text-lg text-white">Team Aryavrat</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Calendar size={14} className="mr-1.5" />
                <span>Navagman Coordinator</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="text-left space-y-4 flex-1">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white">Event Coordinator</h3>
                <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wide">Student Execution & Logistics Leader</p>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                As the Event Coordinator for Team Aryavrat, I spearheaded the planning, coordination, and execution of the annual Navagman fresher welcome celebration, managing a scale of over 1300+ freshers.
              </p>

              {/* Responsibilities list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cross-Functional Lead</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Coordinated multi-disciplinary student logistics and planning teams.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">1300+ Crowd Control</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Successfully organized venue logistics, scheduling, and security layouts.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
export default Leadership;
