import AboutImg from "../assets/about_new.png"
import { motion } from "framer-motion"

export default function About () {
    const config = {
        line1: 'I am a passionate Full Stack Developer with a Bachelor’s degree in Computer Technology. My goal is to build scalable, high-performance web applications using the modern MERN stack.',
        line2: 'Technical Stack: HTML5, CSS3, JavaScript (ES6+), React.js, TailwindCSS, Next.js, and Framer Motion for premium user experiences.',
        line3: 'Backend Expertise: Proficient in SQL and MongoDB, ensuring robust data management and efficient API architectures.'
    }

    return (
        <section className="flex flex-col md:flex-row bg-dark-card px-10 py-24 items-center gap-12 border-y border-white/5" id="about">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex justify-center"
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal to-accent-blue rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img className='relative h-[400px] md:h-[500px] rounded-2xl shadow-2xl grayscale transition-all duration-500 border border-white/10' src={AboutImg} alt="Workspace"/>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col"
            >
                <div className="flex flex-col">
                    <h1 className="text-4xl text-white border-b-2 border-accent-teal mb-8 w-fit font-bold font-hero-font pb-2">01. About Me</h1>
                    <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                        <p>{config.line1}</p>
                        <p className="p-4 bg-dark-bg/50 rounded-xl border border-white/5 font-hero-font text-sm text-accent-teal">
                            {config.line2}
                        </p>
                        <p>{config.line3}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
