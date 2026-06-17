import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, MapPin, GraduationCap, Mail, ArrowRight } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15, delay: 0.3 }
    },
  };

  const handleContactClick = () => {
    const element = document.getElementById('resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Bio Details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Animated Availability Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-indigo-300 uppercase">
              Open to Internships & Software Engineering Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.3)]">
                Daksh Gautam
              </span>
            </h1>
            <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-gray-300">
              Building Scalable Systems & Intelligence
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            I am a Computer Science student at Graphic Era Hill University specializing in Full-Stack Software Engineering and Artificial Intelligence. Dedicated to writing clean, optimized code and architecting microservices that solve real-world complexities.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={handleProjectsClick}
              className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] border border-white/10 transition-all duration-300 scale-100 hover:scale-[1.02] active:scale-98 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={handleContactClick}
              className="flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Recruiter
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-2">
            <a 
              href="https://github.com/DakshGautam22" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:gautam.daksh22@gmail.com" 
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Email Address"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Circle Frame */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Spinning glowing gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow blur-[2px] p-1.5 shadow-[0_0_50px_rgba(99,102,241,0.4)]" />
            
            {/* Inner background masking */}
            <div className="absolute inset-2.5 rounded-full bg-darkBg z-10" />
            
            {/* The profile picture itself */}
            <div className="absolute inset-4 rounded-full overflow-hidden z-20 bg-darkCard">
              <img 
                src={avatarImg} 
                alt="Daksh Gautam Portrait" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Secondary pulsing outer aura */}
            <div className="absolute -inset-4 rounded-full border border-indigo-500/10 animate-pulse-slow pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Recruiter Quick Stats Grid */}
      <div className="absolute bottom-6 left-0 w-full z-15 hidden lg:block">
        <div className="max-w-7xl mx-auto px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-4 gap-6 p-6 rounded-2xl glass-panel border border-white/5 shadow-2xl"
          >
            {/* Stat 1 */}
            <div className="flex items-center space-x-4 border-r border-white/5">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">8.5 CGPA</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Academic Record</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-4 border-r border-white/5 pl-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">SIH 2025</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Qualifier Status</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-4 border-r border-white/5 pl-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">B.Tech CSE</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Major Specialization</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-4 pl-4">
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">Dehradun</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
