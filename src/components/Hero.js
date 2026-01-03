import Hero_img from "../assets/hero_new.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const config = {
        subtitle: "I'm a MERN Stack Developer",
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
            transition: { staggerChildren: 0.3, delayChildren: 0.5 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative flex flex-col md:flex-row px-8 py-40 bg-secondary justify-center items-center min-h-screen overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl -z-10"
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="md:w-1/2 flex flex-col items-start z-10"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-pink-600 text-5xl md:text-8xl font-hero-font leading-tight mb-4 drop-shadow-sm"
                > 
                    Hi,<br/> Im <span className="text-black">Hema!</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl text-gray-700 font-light mb-8 tracking-wide"
                >
                    {config.subtitle}
                </motion.p>
                <motion.div 
                    variants={itemVariants}
                    className="flex space-x-6 py-4"
                >
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#e46f88', rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.linkedin} 
                        className="text-black transition-colors"
                    >
                        <FaLinkedin size="40"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#e46f88', rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.github} 
                        className="text-black transition-colors"
                    >
                        <FaGithub size="40"/>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:w-1/3 mt-12 md:mt-0 relative"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <motion.img 
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="h-[450px] md:h-[550px] w-full rounded-[2rem] shadow-[0_20px_50px_rgba(228,111,136,0.3)] object-cover ring-8 ring-white/50" 
                    src={Hero_img} 
                    alt="Hema - Portfolio Hero" 
                />
                
                {/* Floating decorative elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/20"
                >
                    <span className="text-3xl">💻</span>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-100/40 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-white/20"
                >
                    <span className="text-2xl">✨</span>
                </motion.div>
            </motion.div>
        </section>
    )
}
