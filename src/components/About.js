import { motion } from "framer-motion"
import AboutPhoto from "../assets/about_photo.png"

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
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
            >
                {/* Photo Column */}
                <motion.div variants={itemVariants} className="relative group mx-auto md:mx-0">
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent-teal to-accent-blue rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src={AboutPhoto} 
                            alt="Professional Portrait" 
                            className="w-full h-auto max-w-md grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

                {/* Content Column */}
                <div className="flex flex-col text-left">
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="text-accent-teal font-hero-font text-sm uppercase tracking-[0.3em]">Discovery</span>
                    </motion.div>
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-6xl text-white mb-8 font-bold font-hero-font tracking-tighter"
                    >
                        01. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">About_Me</span>
                    </motion.h1>

                    <div className="space-y-8">
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                        >
                            {config.line1}
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="inline-block p-1 rounded-2xl bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 backdrop-blur-sm"
                        >
                            <div className="px-6 py-4 bg-dark-bg/80 rounded-[14px] border border-white/5">
                                <p className="font-hero-font text-sm text-accent-teal tracking-wide italic">
                                    "{config.line2}"
                                </p>
                            </div>
                        </motion.div>

                        <motion.p 
                            variants={itemVariants}
                            className="text-lg text-gray-400 font-light"
                        >
                            {config.line3}
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
