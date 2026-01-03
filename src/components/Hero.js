import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
    const config = {
        subtitle: "Full Stack Developer specializing in MERN",
        social: {
            github: 'https://github.com/hemakr20/',
            linkedin: 'https://www.linkedin.com/in/hemalathakarthikeyan'
        }
    }

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const scribbleVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1, 
            transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } 
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative flex flex-col px-8 py-40 bg-dark-bg justify-center items-center min-h-screen overflow-hidden text-center">
            {/* Figma-inspired Background Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div 
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-1/4 left-10 w-12 h-12 bg-accent-teal rounded-lg border-2 border-white/20 rotate-12 opacity-20 flex items-center justify-center shadow-lg"
                >
                    <span className="text-white text-xs font-bold">F</span>
                </motion.div>
                <motion.div 
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-1/4 right-20 w-16 h-16 bg-accent-blue rounded-full border-2 border-white/20 -rotate-12 opacity-20 flex items-center justify-center shadow-lg"
                >
                    <div className="w-8 h-8 border-2 border-white/40 rounded-sm"></div>
                </motion.div>
                {/* Figma Cursor Decoration */}
                <motion.div 
                    animate={{ 
                        x: [100, 300, 200, 100],
                        y: [100, 200, 400, 100] 
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 text-accent-teal opacity-30"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.653 2.553a.5.5 0 00-.735.61l4.004 12.012a.5.5 0 00.916.035l2.64-5.28 5.28-2.64a.5.5 0 00.035-.916L5.653 2.553z" />
                    </svg>
                    <div className="bg-accent-teal text-dark-bg text-[10px] px-2 py-0.5 rounded ml-4 font-bold">Hema</div>
                </motion.div>
            </div>

            {/* Animated Scribble Backdrop */}
            <div className="absolute inset-0 pointer-events-none -z-10 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        variants={scribbleVariants}
                        initial="hidden"
                        animate="visible"
                        d="M100,100 Q400,50 500,500 T900,900"
                        stroke="#2dd4bf"
                        strokeWidth="2"
                        fill="none"
                    />
                    <motion.path
                        variants={scribbleVariants}
                        initial="hidden"
                        animate="visible"
                        d="M900,100 C700,400 300,600 100,900"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center z-10 max-w-4xl"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-white text-6xl md:text-9xl font-bold leading-tight mb-6 tracking-tighter relative"
                > 
                    Im <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">Hema</span>
                    <motion.svg 
                        className="absolute -bottom-4 left-0 w-full" 
                        viewBox="0 0 400 20" 
                        initial="hidden" 
                        animate="visible"
                    >
                        <motion.path
                            d="M 0 10 Q 100 0 200 10 T 400 10"
                            stroke="#2dd4bf"
                            strokeWidth="3"
                            fill="none"
                            variants={scribbleVariants}
                        />
                    </motion.svg>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl text-gray-400 font-light mb-12 font-hero-font max-w-2xl leading-relaxed"
                >
                    {config.subtitle}
                </motion.p>
                <motion.div 
                    variants={itemVariants}
                    className="flex space-x-8 py-4"
                >
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#2dd4bf', rotate: [0, -10, 10, 0] }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.linkedin} 
                        className="text-gray-400 transition-colors"
                    >
                        <FaLinkedin size="40"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#2dd4bf', rotate: [0, 10, -10, 0] }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.github} 
                        className="text-gray-400 transition-colors"
                    >
                        <FaGithub size="40"/>
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}
