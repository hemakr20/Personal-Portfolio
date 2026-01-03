import Hero_img from "../assets/hero_new.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

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

    return (
        <section className="relative flex flex-col md:flex-row px-8 py-40 bg-dark-bg justify-center items-center min-h-screen overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-96 h-96 bg-accent-teal/5 rounded-full blur-[100px] -z-10"
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] -z-10"
                animate={{ 
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="md:w-1/2 flex flex-col items-start z-10"
            >
                <motion.div variants={itemVariants} className="text-accent-teal font-hero-font mb-4 text-lg">
                    System.out.println("Hello, World!");
                </motion.div>
                <motion.h1 
                    variants={itemVariants}
                    className="text-white text-6xl md:text-8xl font-bold leading-tight mb-4 tracking-tighter"
                > 
                    Im <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">Hema</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-lg font-hero-font"
                >
                    {config.subtitle}
                </motion.p>
                <motion.div 
                    variants={itemVariants}
                    className="flex space-x-6 py-4"
                >
                    <motion.a 
                        whileHover={{ scale: 1.1, color: '#2dd4bf', y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.linkedin} 
                        className="text-gray-400 transition-colors"
                    >
                        <FaLinkedin size="32"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1, color: '#2dd4bf', y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.github} 
                        className="text-gray-400 transition-colors"
                    >
                        <FaGithub size="32"/>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:w-1/3 mt-12 md:mt-0 relative"
            >
                <div className="absolute inset-0 bg-accent-teal/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                <div className="h-[450px] md:h-[550px] w-full rounded-3xl bg-dark-card/50 border border-white/5 flex items-center justify-center shadow-2xl">
                    <span className="text-6xl grayscale opacity-20">DEVELOPER</span>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/10"
                >
                    <span className="text-3xl">💻</span>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-teal/5 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-white/10"
                >
                    <span className="text-2xl">✨</span>
                </motion.div>
            </motion.div>
        </section>
    )
}
