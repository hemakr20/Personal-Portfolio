import AboutImg from "../assets/pic2.jpg"
import { motion } from "framer-motion"

export default function About () {
    const config = {
        line1: 'Hi, My Name is Hemalatha completed my bachelor degree in Computer Technology with 71% of CGPA. I want to be a MERN Stack Developer',
        line2: 'I am proficient in frontend skills like HTML, CSS, JavaScript, React, TailwindCSS, Next.js',
        line3: 'Also have an Hands on Experience in Backend skills like SQL, MongoDB'
    }

    return (
        <section className="flex flex-col md:flex-row bg-primary px-10 py-24 items-center gap-12" id="about">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex justify-center"
            >
                <img className='h-[400px] md:h-[500px] rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-secondary/30' src={AboutImg} alt="about section illustration"/>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col"
            >
                <div className="flex flex-col">
                    <h1 className="text-5xl text-white border-b-4 border-secondary mb-8 w-fit font-bold tracking-tight pb-2">About Me</h1>
                    <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light">
                        <p>{config.line1}</p>
                        <p>{config.line2}</p>
                        <p>{config.line3}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
