import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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

    const doodleRef = useRef(null);

    useEffect(() => {
        if (doodleRef.current) {
            const doodles = doodleRef.current.querySelectorAll('.gsap-doodle');
            doodles.forEach((doodle, i) => {
                gsap.to(doodle, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    rotation: "random(-30, 30)",
                    duration: `random(2.5, 4.5)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: i * 0.15
                });
            });
        }
    }, []);

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
            {/* GSAP Wobble Doodles */}
            <div ref={doodleRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="gsap-doodle absolute top-[15%] left-[10%] opacity-30">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path d="M10,50 C10,10 90,10 90,50 C90,90 10,90 10,50" stroke="#2dd4bf" strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute top-[40%] left-[5%] opacity-20">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                        <path d="M20,20 L80,80 M80,20 L20,80" stroke="#38bdf8" strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute bottom-[15%] right-[10%] opacity-30">
                    <svg width="150" height="150" viewBox="0 0 100 100">
                        <path d="M20,20 Q50,5 80,20 T80,80 T20,80 T20,20" stroke="#38bdf8" strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute top-[20%] right-[5%] opacity-20">
                    <svg width="60" height="60" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute bottom-[40%] left-[15%] opacity-25">
                    <svg width="120" height="120" viewBox="0 0 100 100">
                        <path d="M10,10 Q90,50 10,90" stroke="#2dd4bf" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Figma-inspired Background Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Moving Geometric Objects */}
                <motion.div 
                    animate={{ 
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-[10%] w-24 h-24 border border-accent-teal/20 rounded-xl"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -150, 0],
                        y: [0, 100, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-40 right-[15%] w-32 h-32 border border-accent-blue/20 rounded-full"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[100px]"
                />

                <motion.div 
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-1/4 left-10 w-12 h-12 bg-accent-teal rounded-lg border-2 border-white/20 rotate-12 opacity-30 flex items-center justify-center shadow-lg"
                >
                    <span className="text-white text-xs font-bold">F</span>
                </motion.div>
                <motion.div 
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-1/4 right-20 w-16 h-16 bg-accent-blue rounded-full border-2 border-white/20 -rotate-12 opacity-30 flex items-center justify-center shadow-lg"
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
                    className="absolute top-0 left-0 text-accent-teal opacity-40"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.653 2.553a.5.5 0 00-.735.61l4.004 12.012a.5.5 0 00.916.035l2.64-5.28 5.28-2.64a.5.5 0 00.035-.916L5.653 2.553z" />
                    </svg>
                    <div className="bg-accent-teal text-dark-bg text-[10px] px-2 py-0.5 rounded ml-4 font-bold">Hema</div>
                </motion.div>
            </div>

            {/* Animated Scribble Backdrop */}
            <div className="absolute inset-0 pointer-events-none -z-10 opacity-15">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        variants={scribbleVariants}
                        initial="hidden"
                        animate="visible"
                        d="M100,100 Q400,50 500,500 T900,900"
                        stroke="#2dd4bf"
                        strokeWidth="3"
                        fill="none"
                    />
                    <motion.path
                        variants={scribbleVariants}
                        initial="hidden"
                        animate="visible"
                        d="M900,100 C700,400 300,600 100,900"
                        stroke="#38bdf8"
                        strokeWidth="3"
                        fill="none"
                    />
                </svg>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center z-10 max-w-6xl gap-12"
            >
                {/* Waving Developer Character */}
                <motion.div 
                    variants={itemVariants}
                    className="relative w-64 h-64 md:w-80 md:h-80 order-2 md:order-1"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                        {/* Body/Clothes */}
                        <path d="M60,180 L140,180 L130,120 L70,120 Z" fill="#38bdf8" />
                        <path d="M70,120 Q100,110 130,120" fill="none" stroke="#2dd4bf" strokeWidth="2" />
                        
                        {/* Head */}
                        <circle cx="100" cy="80" r="35" fill="#fecaca" />
                        
                        {/* Hair */}
                        <path d="M65,80 Q65,40 100,40 Q135,40 135,80 Q135,110 120,100 Q100,120 80,100 Q65,110 65,80" fill="#4b5563" />
                        
                        {/* Eyes */}
                        <circle cx="88" cy="80" r="3" fill="#1e293b" />
                        <circle cx="112" cy="80" r="3" fill="#1e293b" />
                        
                        {/* Smile */}
                        <path d="M90,95 Q100,105 110,95" fill="none" stroke="#1e293b" strokeWidth="2" />

                        {/* Waving Arm */}
                        <motion.g
                            animate={{ rotate: [0, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ originX: "140px", originY: "130px" }}
                        >
                            <path d="M130,130 L160,90" stroke="#fecaca" strokeWidth="12" strokeLinecap="round" />
                            {/* Hand */}
                            <circle cx="165" cy="85" r="10" fill="#fecaca" />
                        </motion.g>

                        {/* Static Arm */}
                        <path d="M70,130 L40,160" stroke="#fecaca" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                    
                    {/* Figma Style Cursor pointing at character */}
                    <div className="absolute -bottom-4 right-0 bg-accent-blue text-dark-bg text-[10px] px-2 py-0.5 rounded font-bold shadow-lg">Developer_Girl</div>
                </motion.div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
                    <motion.h1 
                        variants={itemVariants}
                        className="text-white text-6xl md:text-8xl font-bold leading-tight mb-6 tracking-tighter relative"
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
                </div>
            </motion.div>
        </section>
    )
}
