import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitCommit, FolderGit, Flame } from 'lucide-react';

export const GithubActivity: React.FC = () => {
  // Generate a mock array of contribution counts for the grid
  // 24 columns * 7 rows = 168 cells for mobile/tablet responsive compatibility
  const totalCells = 168;
  const gridCells = Array.from({ length: totalCells }).map(() => {
    const r = Math.random();
    if (r < 0.45) return 0; // No commits (gray)
    if (r < 0.75) return 1; // Light green
    if (r < 0.90) return 2; // Medium green
    return 3; // Dark green
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-slate-800/60 border border-slate-900/20';
      case 1: return 'bg-emerald-900/40 border border-emerald-900/20';
      case 2: return 'bg-emerald-700/60 border border-emerald-700/20';
      case 3: return 'bg-emerald-500 border border-emerald-500/20';
      default: return 'bg-slate-800/60';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="github" className="relative py-20 overflow-hidden">
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
            GitHub Activity & Metrics
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
            A dynamic snapshot of my open-source contributions, commit frequencies, and code distribution.
          </motion.p>
        </div>

        {/* Outer Activity Dashboard Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Contribution Graph Box (LHS - 8 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 p-6 rounded-2xl glass-panel border border-white/5 bg-darkCard/20 flex flex-col justify-between"
          >
            <div className="text-left space-y-2 mb-6">
              <h3 className="font-display font-bold text-lg text-white">Contribution History</h3>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Simulated 24-Week Heatmap</p>
            </div>

            {/* Grid wrapper */}
            <div className="overflow-x-auto pr-2 pb-4">
              <div className="grid grid-flow-col grid-rows-7 gap-[3.5px] min-w-[480px]">
                {gridCells.map((level, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    className={`w-3.5 h-3.5 rounded-[2.5px] cursor-pointer transition-colors duration-300 ${getCellColor(level)}`}
                    title={`Contributions: ${level === 0 ? 'None' : level === 1 ? '1-2 commits' : level === 2 ? '3-5 commits' : '6+ commits'}`}
                  />
                ))}
              </div>
            </div>

            {/* Legend indicators */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
              <span>Less</span>
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-[2px] bg-slate-800/60" />
                <span className="w-3 h-3 rounded-[2px] bg-emerald-900/40" />
                <span className="w-3 h-3 rounded-[2px] bg-emerald-700/60" />
                <span className="w-3 h-3 rounded-[2px] bg-emerald-500" />
              </div>
              <span>More</span>
            </div>
          </motion.div>

          {/* GitHub Stats Cards (RHS - 4 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 grid grid-cols-2 gap-4"
          >
            {/* Stat Item 1 */}
            <div className="p-5 rounded-2xl glass-panel border border-white/5 bg-darkCard/30 flex flex-col justify-center items-center text-center hover:border-indigo-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-3">
                <FolderGit size={20} />
              </div>
              <p className="text-2xl font-bold text-white font-display">25+</p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Repositories</p>
            </div>

            {/* Stat Item 2 */}
            <div className="p-5 rounded-2xl glass-panel border border-white/5 bg-darkCard/30 flex flex-col justify-center items-center text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3">
                <GitCommit size={20} />
              </div>
              <p className="text-2xl font-bold text-white font-display">600+</p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Total Commits</p>
            </div>

            {/* Stat Item 3 */}
            <div className="p-5 rounded-2xl glass-panel border border-white/5 bg-darkCard/30 flex flex-col justify-center items-center text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
                <GitPullRequest size={20} />
              </div>
              <p className="text-2xl font-bold text-white font-display">80+</p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Pull Requests</p>
            </div>

            {/* Stat Item 4 (Most Used Languages) */}
            <div className="p-5 rounded-2xl glass-panel border border-white/5 bg-darkCard/30 flex flex-col justify-center items-center text-center hover:border-pink-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 mb-3">
                <Flame size={20} />
              </div>
              <p className="text-sm font-bold text-white font-display">Python / TS</p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Primary Tech</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Language Distribution Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl glass-panel border border-white/5 bg-darkCard/20 text-left space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">Language Distribution Breakdown</h4>
            <span className="text-[10px] text-gray-500 font-mono">Source: github.com/DakshGautam22</span>
          </div>

          {/* Graphical bar segment */}
          <div className="w-full h-3.5 rounded-full overflow-hidden flex">
            <div className="h-full bg-blue-500 w-[45%]" title="Python: 45%" />
            <div className="h-full bg-cyan-400 w-[30%]" title="TypeScript: 30%" />
            <div className="h-full bg-orange-500 w-[15%]" title="Java: 15%" />
            <div className="h-full bg-red-500 w-[10%]" title="Other: 10%" />
          </div>

          {/* Color Labels */}
          <div className="flex flex-wrap gap-4 text-xs font-medium pt-1">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-gray-300">Python (45%)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-gray-300">TypeScript (30%)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-gray-300">Java (15%)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-gray-300">C++ & Other (10%)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default GithubActivity;
