import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, GraduationCap, Trophy, FolderOpen, Code } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="resume" className="relative py-20 overflow-hidden">
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
            Professional Resume & Profile
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
            A high-level view of my academic achievements, key credentials, and active engineering pursuits.
          </motion.p>
        </div>

        {/* Layout: Preview on Left, Highlights on Right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Resume Mockup Preview Card (LHS - 6 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="w-full max-w-md p-6 rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl relative aspect-[1/1.4] flex flex-col justify-between text-left select-none overflow-hidden group">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Document Header Mock */}
              <div className="space-y-4 relative z-10">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-display font-extrabold text-xl text-white">Daksh Gautam</h3>
                  <p className="text-xs text-indigo-400 font-semibold mt-0.5">Software Engineer & AI/ML Engineer</p>
                  <p className="text-[10px] text-gray-500 mt-1">gautam.daksh22@gmail.com | Dehradun, India</p>
                </div>

                {/* Mock Subsections */}
                <div className="space-y-3.5">
                  {/* Education */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Education</h4>
                    <div className="text-xs text-gray-300">
                      <p className="font-semibold">B.Tech in Computer Science & Eng.</p>
                      <p className="text-[10px] text-gray-500">Graphic Era Hill University | CGPA: 8.5</p>
                    </div>
                  </div>

                  {/* Skills summary */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Core Stack</h4>
                    <p className="text-[11px] text-gray-300 font-mono leading-relaxed">
                      Python, Java, TypeScript, React, Go, TensorFlow, PyTorch, SQL, Docker, AWS
                    </p>
                  </div>

                  {/* Projects summary */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Key Projects</h4>
                    <div className="space-y-1 text-xs text-gray-300">
                      <p className="font-semibold">&#8226; AI Fraud Analytics System (Inference &lt; 50ms)</p>
                      <p className="font-semibold">&#8226; Distributed Microservices Chat Engine (Go, WebSockets)</p>
                      <p className="font-semibold">&#8226; Smart India Hackathon Fleet Router Prototype</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock footer with prominent download CTA */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-500">
                  <FileText size={16} />
                  <span className="text-[10px] font-medium uppercase tracking-wider">daksh_gautam_cv.pdf</span>
                </div>
                <a
                  href="/resume.pdf"
                  download="Daksh_Gautam_Resume.pdf"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Highlights Card List (RHS - 6 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl md:text-3xl text-white leading-tight">
                Quick Candidate Highlights
              </h3>
              <p className="text-sm text-gray-400">
                A brief overview of credentials tailored for recruiters, hiring managers, and coordinators.
              </p>
            </div>

            {/* List of Highlights */}
            <div className="space-y-4">
              {/* Highlight 1 */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Strong Academics</h4>
                  <p className="text-xs text-gray-400 mt-0.5">B.Tech CSE student at Graphic Era Hill University with an outstanding cumulative CGPA of 8.5.</p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">SIH 2025 Qualifier</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Recognized Qualifier for Smart India Hackathon 2025, solving logistics problems under strict constraints.</p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <FolderOpen size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">3 Major Production-Grade Projects</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Designed scalable pipelines, fraud analytics clusters, and real-time distributed communication architectures.</p>
                </div>
              </div>

              {/* Highlight 4 */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 shrink-0 mt-0.5">
                  <Code size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">AI/ML + Software Engineering Stack</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Dual proficiency in writing scalable distributed backends (Go/TypeScript) and deploying deep learning pipelines (TensorFlow/PyTorch).</p>
                </div>
              </div>
            </div>

            {/* Direct download block */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href="/resume.pdf"
                download="Daksh_Gautam_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.4)] border border-white/10 transition-all duration-300 scale-100 hover:scale-[1.02] active:scale-98"
              >
                <Download size={16} />
                <span>Download Printable Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
export default ResumeSection;
