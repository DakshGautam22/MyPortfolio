import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  iconName: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string; // Tailwind glow border color class
}

// Custom SVG Logos for tech stacks
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18c.9 0 2 .18 2.65.48l1.32.6c1.17.52 1.34 1.15 1.34 2.21v2.53h-2.62c-2.07 0-3.75 1.68-3.75 3.75v1.25H9v-1.25c0-3.45 2.8-6.25 6.25-6.25h1.25V4.67c0-.52-.37-.89-.89-.89h-2.61c-.52 0-.89.37-.89.89v1.25h-2.5V3.47c0-2 1.57-3.29 3.9-3.29zM9.75 23.82c-.9 0-2-.18-2.65-.48l-1.32-.6c-1.17-.52-1.34-1.15-1.34-2.21v-2.53h2.62c2.07 0 3.75-1.68 3.75-3.75v-1.25h4.25v1.25c0 3.45-2.8 6.25-6.25 6.25H7.58v1.25c0 .52.37.89.89.89h2.61c.52 0 .89-.37.89-.89v-1.25h2.5v2.48c0 2-1.57 3.29-3.9 3.29z"/>
        </svg>
      );
    case 'react':
      return (
        <svg className="w-4 h-4 shrink-0 animate-spin-slow text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'typescript':
      return (
        <svg className="w-4 h-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125A1.125 1.125 0 0 1 0 22.875V1.125C0 .504.504 0 1.125 0zm14.654 13.916c-.347-.197-.837-.367-1.423-.367-.88 0-1.246.367-1.246.852 0 .548.423.75 1.353 1.096 1.45.529 2.476.993 2.476 2.502 0 1.636-1.309 2.532-3.13 2.532-1.355 0-2.316-.484-2.812-.871l.668-1.53c.484.321 1.258.68 2.016.68.868 0 1.309-.323 1.309-.894 0-.649-.497-.84-1.423-1.168-1.397-.478-2.4-.993-2.4-2.441 0-1.528 1.189-2.399 2.923-2.399 1.14 0 2.046.347 2.53.649l-.612 1.554zm5.029-4.839h-6.26v1.944h2.158v7.839h1.944V11.02h2.158V9.077z"/>
        </svg>
      );
    case 'java':
      return (
        <svg className="w-4 h-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
    case 'docker':
      return (
        <svg className="w-4 h-4 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-3.562 0h2.119v-2.006H7.684v2.006zm-2.736 0h2.119v-2.006H4.948v2.006zm2.736-2.684h2.119V6.388H7.684v2.006zm-2.736 0h2.119V6.388H4.948v2.006zm5.473 0h2.119V6.388h-2.119v2.006zm-2.737-2.68h2.119V3.708H7.684v2.006zm5.473 2.68h2.119V6.388h-2.119v2.006zm7.251 1.703c-.157-.16-.395-.258-.651-.258h-.022c-.18.002-.348.06-.477.163v-.002c-.783.568-1.885.642-2.884.223a.352.352 0 0 1-.22-.323V5.51c0-.135-.11-.247-.248-.247h-1.637c-.137 0-.248.112-.248.247v7.502H8.384v.005c-.172-.01-.362.031-.502.143l-.008.005c-.443.342-.962.46-1.503.362-.351-.065-.632-.303-.79-.623a.35.35 0 0 0-.294-.188h-1.67c-.137 0-.248.112-.248.248V13.8c0 4.14 3.385 7.502 7.502 7.502h4.5c4.14 0 7.502-3.385 7.502-7.502a5.44 5.44 0 0 0-1.89-4.015z"/>
        </svg>
      );
    case 'git':
      return (
        <svg className="w-4 h-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.186 0L8.74 2.59l3.117 3.116c.645-.215 1.39-.07 1.906.446a1.728 1.728 0 0 1 .45 1.807l3.116 3.116a1.724 1.724 0 0 1 1.808.45 1.734 1.734 0 0 1-.03 2.478 1.728 1.728 0 0 1-2.48-.03 1.732 1.732 0 0 1-.416-1.89l-2.924-2.924v3.395c.347.165.64.444.823.787a1.734 1.734 0 0 1-1.63 2.506 1.733 1.733 0 0 1-1.628-2.506c.18-.34.47-.618.814-.784v-3.41c-.344-.166-.636-.442-.82-.782a1.713 1.713 0 0 1-.413-1.07c0-.287.074-.565.207-.81l-3.11-3.11L.454 10.93c-.605.605-.605 1.584 0 2.187l10.48 10.478c.604.605 1.582.605 2.185 0l10.427-10.477c.604-.603.604-1.582 0-2.187z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg className="w-4 h-4 shrink-0 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.2 16.7h-6.4v-9.4h1.7v7.6h4.7v1.8zm2.4 0H16V7.3h1.6v9.4z"/>
        </svg>
      );
    case 'tensorflow':
      return (
        <svg className="w-4 h-4 shrink-0 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.13 2.128l8.36 4.83v9.659l-8.36 4.83-8.36-4.83V6.958l8.36-4.83zm0-2.128L2.096 5.8 2.1 17.4l10.03 5.8 10.03-5.8v-11.6L12.13 0z"/>
        </svg>
      );
    default:
      // Generic code dot/bracket icon
      return (
        <span className="w-2 h-2 rounded-full bg-indigo-400" />
      );
  }
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code size={20} className="text-indigo-400" />,
    color: 'hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    skills: [
      { name: 'Python', iconName: 'python' },
      { name: 'Java', iconName: 'java' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'JavaScript', iconName: 'javascript' },
      { name: 'C++', iconName: 'cpp' },
      { name: 'SQL', iconName: 'sql' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: <Server size={20} className="text-purple-400" />,
    color: 'hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    skills: [
      { name: 'React', iconName: 'react' },
      { name: 'Node.js', iconName: 'nodejs' },
      { name: 'Express', iconName: 'express' },
      { name: 'Tailwind CSS', iconName: 'tailwind' },
      { name: 'Next.js', iconName: 'nextjs' },
    ],
  },
  {
    title: 'AI / ML & Data Science',
    icon: <Brain size={20} className="text-cyan-400" />,
    color: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    skills: [
      { name: 'TensorFlow', iconName: 'tensorflow' },
      { name: 'PyTorch', iconName: 'pytorch' },
      { name: 'Scikit-Learn', iconName: 'scikit' },
      { name: 'Pandas', iconName: 'pandas' },
      { name: 'NumPy', iconName: 'numpy' },
      { name: 'Deep Learning', iconName: 'dl' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Wrench size={20} className="text-pink-400" />,
    color: 'hover:border-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]',
    skills: [
      { name: 'Git', iconName: 'git' },
      { name: 'GitHub', iconName: 'github' },
      { name: 'Docker', iconName: 'docker' },
      { name: 'AWS', iconName: 'aws' },
      { name: 'Postman', iconName: 'postman' },
      { name: 'Linux', iconName: 'linux' },
    ],
  },
];

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
            Technical Competencies
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
            A curated summary of programming languages, frameworks, AI frameworks, and development toolkits I use daily.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-2xl glass-panel border border-white/5 bg-darkCard/50 transition-all duration-300 ${category.color}`}
            >
              {/* Category Title */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white hover:bg-white/10 cursor-default transition-all duration-300"
                  >
                    <TechIcon name={skill.iconName} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
