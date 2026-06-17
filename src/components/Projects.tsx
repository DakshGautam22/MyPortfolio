import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, BarChart3, ShieldAlert, Cpu, Network } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  problem: string;
  architectureDesc: string;
  architectureNodes: { label: string; type: 'client' | 'gate' | 'service' | 'db' }[];
  features: string[];
  metrics: string[];
  challenges: string;
  github: string;
  demo: string;
  tags: string[];
  icon: React.ReactNode;
  color: string; // Tailwind color theme (indigo, purple, etc.)
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Fraud Analytics Engine',
    shortDesc: 'High-throughput transactional event processing engine forecasting and detecting fraud anomalies in under 50ms.',
    problem: 'Traditional rule-based fraud detection systems suffer from high latency and high false-positive rates, making them unusable for real-time digital payment validation at scale.',
    architectureDesc: 'Kafka ingests user transaction streams which are consumed by a clustered FastAPI predictor executing lightweight TensorFlow models. Results are stored in Redis for instantaneous caching and synced asynchronously with PostgreSQL.',
    architectureNodes: [
      { label: 'Client / API Gateway', type: 'client' },
      { label: 'Apache Kafka Stream', type: 'gate' },
      { label: 'TensorFlow Clustered Service', type: 'service' },
      { label: 'Redis Cache & PostgreSQL', type: 'db' },
    ],
    features: [
      'Real-time anomaly scoring with model inferencing under 50ms',
      'Fault-tolerant Kafka consumer clusters with auto-scaling',
      'Dynamic threshold calibration dashboard for system administrators',
    ],
    metrics: [
      '94.7% Detection Accuracy',
      '45ms Mean Inference Latency',
      '10,000+ Transactions Per Second Supported'
    ],
    challenges: 'Optimizing model size and execution for high-throughput concurrency. Resolved by serializing TensorFlow models to ONNX runtime, reducing inference latency by 60% and memory footprint by 40%.',
    github: 'https://github.com/DakshGautam22',
    demo: '#',
    tags: ['Python', 'TensorFlow', 'Apache Kafka', 'FastAPI', 'Redis', 'Docker'],
    icon: <ShieldAlert className="w-6 h-6 text-indigo-400" />,
    color: 'indigo',
  },
  {
    id: 2,
    title: 'Distributed Microservices Chat Engine',
    shortDesc: 'Horizontally scalable, WebSocket-driven instant communications engine featuring reliable message delivery.',
    problem: 'Scaling real-time WebSocket connections across multiple server instances often leads to split-brain states and lost message packets during sudden spikes.',
    architectureDesc: 'Web clients establish persistent WebSocket connections through an Nginx load balancer to Go-based chat services. Node synchronization and publish/subscribe events are handled via Redis Pub/Sub, with MongoDB storing cold history.',
    architectureNodes: [
      { label: 'Web Clients / HTTPS', type: 'client' },
      { label: 'Nginx Load Balancer', type: 'gate' },
      { label: 'Go WebSocket Microservices', type: 'service' },
      { label: 'Redis Pub/Sub & MongoDB', type: 'db' },
    ],
    features: [
      'Pub/Sub synchronization ensuring seamless message delivery across distributed servers',
      'Offline queue buffering and read-receipt indicators',
      'JWT authorization and encrypted payload delivery',
    ],
    metrics: [
      '99.99% Message Delivery Rate',
      'Under 20ms Local Relay Latency',
      'Supports 50k Concurrent Active WebSockets'
    ],
    challenges: 'Managing connection leaks and heartbeat failures. Implemented a robust TCP ping/pong strategy on the Go microservice layer alongside distributed Redis lock managers to maintain active server heartbeats.',
    github: 'https://github.com/DakshGautam22',
    demo: '#',
    tags: ['Go (Golang)', 'TypeScript', 'WebSockets', 'Redis', 'MongoDB', 'Nginx'],
    icon: <Network className="w-6 h-6 text-purple-400" />,
    color: 'purple',
  },
  {
    id: 3,
    title: 'SIH 2025: Smart Logistics Portal',
    shortDesc: 'Prototype logistics routing application built for the Smart India Hackathon 2025, optimizing last-mile delivery.',
    problem: 'Last-mile logistic chains in tier-2 cities lack routing intelligence, resulting in high fuel costs and delayed deliveries due to uncoordinated dispatchers.',
    architectureDesc: 'Mobile agents report coordinates to an Express API backend. An active routing microservice applies dynamic Dijkstra modifications based on live traffic reports to calculate optimal delivery pipelines.',
    architectureNodes: [
      { label: 'Dispatcher Dashboard & Mobile App', type: 'client' },
      { label: 'Express API Server', type: 'gate' },
      { label: 'Routing Engine (Dijkstra Mod)', type: 'service' },
      { label: 'PostgreSQL Spatial Data', type: 'db' },
    ],
    features: [
      'Real-time fleet tracking and dynamic route recalculation',
      'Automated dispatch order generation matching carrier availability',
      'Offline-first mobile synchronization support for rural routes',
    ],
    metrics: [
      '30% Reduction in Route Mileage',
      'SIH 2025 Selected Prototype',
      'Real-Time Fleet Updates under 2s'
    ],
    challenges: 'Geocoding precision and route calculation speed on mobile devices. Optimized spatial indexing using PostgreSQL PostGIS and cached route structures, lowering routing query times to less than 100ms.',
    github: 'https://github.com/DakshGautam22',
    demo: '#',
    tags: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'PostGIS', 'Leaflet'],
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    color: 'cyan',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cardContainerVariants = {
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
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            Featured Engineering Projects
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
            A showcase of production-ready systems, highlighting low-latency designs, scalability, and algorithm optimization.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl glass-panel border border-white/5 bg-darkCard/30 hover:bg-darkCardSolid/80 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)] h-[380px]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-tr group-hover:from-indigo-600/20 group-hover:to-purple-600/20 group-hover:border-indigo-500/30 transition-all duration-300">
                    {project.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 group-hover:text-indigo-400 transition-colors duration-300">
                    Details & Diagram &rarr;
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300 mb-3 text-left">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-left line-clamp-4">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tags footer */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.slice(0, 3).map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-indigo-300/80 bg-indigo-500/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-semibold text-gray-500 px-1.5 py-1">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-darkBg/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring' as const, damping: 20 }}
                className="w-full max-w-4xl rounded-2xl border border-white/10 bg-darkBg/95 shadow-2xl p-6 md:p-8 space-y-6 overflow-hidden relative cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Modal Header */}
                <div className="text-left space-y-3 pr-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-y-auto max-h-[70vh] pr-2">
                  
                  {/* Left Column: Metrics, Details, Challenges */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    {/* Problem Statement */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Problem Statement</h4>
                      <p className="text-sm text-gray-300 leading-relaxed bg-white/5 border border-white/5 rounded-xl p-4">
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">Key Features</h4>
                      <ul className="space-y-1.5">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm text-gray-300 flex items-start space-x-2">
                            <span className="text-purple-400 mt-1 shrink-0">&#9670;</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Challenges Solved */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400">Technical Challenges Solved</h4>
                      <p className="text-sm text-gray-400 leading-relaxed bg-pink-500/5 border border-pink-500/10 rounded-xl p-4">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center space-x-4 pt-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View Repository</span>
                      </a>
                      {selectedProject.demo !== '#' && (
                        <a
                          href={selectedProject.demo}
                          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Architecture Diagram & Impact Metrics */}
                  <div className="lg:col-span-5 space-y-6 text-left">
                    {/* Impact Metrics Card */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-white/10 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
                        <BarChart3 size={16} />
                        <span>System Impact Metrics</span>
                      </h4>
                      <div className="space-y-2.5">
                        {selectedProject.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-white/5 rounded-lg px-3.5 py-2 border border-white/5">
                            <span className="text-xs font-bold text-white block">{metric.split(' ')[0]}</span>
                            <span className="text-[10px] text-gray-400">{metric.substring(metric.indexOf(' ') + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CSS Visual Architecture Diagram */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">System Topology Diagram</h4>
                      <div className="rounded-2xl border border-white/5 bg-darkCardSolid p-4 flex flex-col items-center justify-center space-y-3 shadow-inner">
                        {selectedProject.architectureNodes.map((node, nIdx) => (
                          <React.Fragment key={nIdx}>
                            {/* Node Box */}
                            <div className={`w-full py-2.5 px-3 rounded-lg border text-center text-xs font-mono font-medium ${
                              node.type === 'client' 
                                ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300' 
                                : node.type === 'gate' 
                                ? 'bg-purple-500/10 border-purple-500/40 text-purple-300' 
                                : node.type === 'service' 
                                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300' 
                                : 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                            }`}>
                              {node.label}
                            </div>
                            
                            {/* Down Arrow separator */}
                            {nIdx < selectedProject.architectureNodes.length - 1 && (
                              <div className="w-[1.5px] h-3 bg-gradient-to-b from-gray-600 to-gray-800" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="text-[10px] text-gray-500 leading-normal font-medium text-center">
                        {selectedProject.architectureDesc}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Projects;
