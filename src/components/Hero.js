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
        <section className="relative flex flex-col px-8 py-40 bg-dark-bg justify-center items-center min-h-screen overflow-hidden text-center">
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
                className="flex flex-col items-center z-10 max-w-4xl"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-white text-6xl md:text-9xl font-bold leading-tight mb-6 tracking-tighter"
                > 
                    Im <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue">Hema</span>
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
                        whileHover={{ scale: 1.1, color: '#2dd4bf', y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.linkedin} 
                        className="text-gray-400 transition-colors"
                    >
                        <FaLinkedin size="40"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1, color: '#2dd4bf', y: -5 }}
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
