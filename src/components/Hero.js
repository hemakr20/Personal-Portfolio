import Hero_img from "../assets/pic1.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    const config = {
        subtitle: "I'm a MERN Stack Developer",
        social: {
            github: 'https://github.com/hemakr20/',
            linkedin: 'https://www.linkedin.com/in/hemalathakarthikeyan'
        }
    }

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
        <section className="flex flex-col md:flex-row px-8 py-40 bg-secondary justify-center items-center min-h-screen">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="md:w-1/2 flex flex-col items-start"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-pink-600 text-5xl md:text-7xl font-hero-font leading-tight mb-4"
                > 
                    Hi,<br/> Im <span className="text-black">Hema!</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl text-gray-700 font-light mb-8"
                >
                    {config.subtitle}
                </motion.p>
                <motion.div 
                    variants={itemVariants}
                    className="flex space-x-6 py-4"
                >
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#e46f88' }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.linkedin} 
                        className="text-black transition-colors"
                    >
                        <FaLinkedin size="40"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: '#e46f88' }}
                        whileTap={{ scale: 0.9 }}
                        href={config.social.github} 
                        className="text-black transition-colors"
                    >
                        <FaGithub size="40"/>
                    </motion.a>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="md:w-1/3 mt-12 md:mt-0 relative"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <img 
                    className="h-[400px] md:h-[500px] w-auto rounded-3xl shadow-2xl object-cover ring-8 ring-white/50" 
                    src={Hero_img} 
                    alt="Hema - Portfolio Hero" 
                />
            </motion.div>
        </section>
    )
}
