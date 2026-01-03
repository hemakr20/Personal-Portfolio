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
        hidden: { opacity: 0, scale: 0.8, rotate: -2 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    }

    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: { 
            pathLength: 1, 
            transition: { duration: 1.5, ease: "easeInOut" } 
        }
    };

    return (
        <section className="bg-dark-card px-10 py-32 border-y border-white/5 relative overflow-hidden" id="about">
            {/* Figma-inspired Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5" style={{ 
                backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 1px)',
                backgroundSize: '30px 30px' 
            }}></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <motion.div variants={itemVariants} className="mb-4 relative group">
                    <span className="text-accent-teal font-hero-font text-sm uppercase tracking-[0.3em] px-3 py-1 border border-accent-teal/30 rounded-full">Discovery</span>
                    {/* Floating Figma Selection Style */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent-teal group-hover:scale-125 transition-transform"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-teal group-hover:scale-125 transition-transform"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent-teal group-hover:scale-125 transition-transform"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent-teal group-hover:scale-125 transition-transform"></div>
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
                        className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic"
                    >
                        "{config.line1}"
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="relative p-8 border-2 border-dashed border-accent-teal/30 rounded-3xl group"
                    >
                        <motion.div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent-teal" />
                        <motion.div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent-teal" />
                        
                        {/* Figma Coordinate Tag */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-teal text-dark-bg text-[10px] px-2 font-bold rounded">X: 240 Y: 512</div>

                        <p className="font-hero-font text-sm md:text-base text-accent-teal tracking-wide">
                            {config.line2}
                        </p>
                    </motion.div>

                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        {config.line3}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}
