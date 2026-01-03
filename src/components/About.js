import { motion } from "framer-motion"

export default function About () {
    const config = {
        line1: 'I am a passionate Full Stack Developer with a Bachelor’s degree in Computer Technology. My goal is to build scalable, high-performance web applications using the modern MERN stack.',
        line2: 'Technical Stack: HTML5, CSS3, JavaScript (ES6+), React.js, TailwindCSS, Next.js, and Framer Motion for premium user experiences.',
        line3: 'Backend Expertise: Proficient in SQL and MongoDB, ensuring robust data management and efficient API architectures.'
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section className="bg-dark-card px-10 py-32 border-y border-white/5 relative overflow-hidden" id="about">
            {/* Animated background accent */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-teal/5 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <motion.div variants={itemVariants} className="mb-4">
                    <span className="text-accent-teal font-hero-font text-sm uppercase tracking-[0.3em]">Discovery</span>
                </motion.div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl text-white mb-12 font-bold font-hero-font tracking-tighter"
                >
                    01. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">About_Me</span>
                </motion.h1>

                <div className="space-y-8">
                    <motion.p 
                        variants={itemVariants}
                        className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light"
                    >
                        {config.line1}
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="inline-block p-1 rounded-2xl bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 backdrop-blur-sm"
                    >
                        <div className="px-8 py-6 bg-dark-bg/80 rounded-[14px] border border-white/5">
                            <p className="font-hero-font text-sm md:text-base text-accent-teal tracking-wide italic">
                                "{config.line2}"
                            </p>
                        </div>
                    </motion.div>

                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        {config.line3}
                    </motion.p>
                </div>

                <motion.div 
                    variants={itemVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-16 text-accent-teal/30"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    )
}
