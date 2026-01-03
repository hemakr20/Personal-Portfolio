import ResumeIng from "../assets/Resume.jpg"
import { motion } from "framer-motion"

export default function Resume () {
    const config = {
        link: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf'
    }

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-dark-card px-10 py-32 items-center gap-16 border-t border-white/5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex justify-center md:justify-end"
            >
                <div className="relative group p-8 bg-white/5 rounded-2xl border border-white/10 w-72 md:w-80 h-[400px] flex flex-col items-center justify-center">
                    <div className="w-16 h-20 border-2 border-accent-teal/30 rounded-md mb-4 flex flex-col p-2 space-y-2">
                        <div className="h-1 w-full bg-accent-teal/20"></div>
                        <div className="h-1 w-3/4 bg-accent-teal/20"></div>
                        <div className="h-1 w-full bg-accent-teal/20"></div>
                    </div>
                    <span className="font-hero-font text-accent-teal/20 uppercase tracking-widest text-sm">Resume_Data</span>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col"
            >
                <h1 className="text-4xl text-white border-b-2 border-accent-teal mb-8 w-fit font-bold font-hero-font pb-2">03. Credentials</h1>
                <p className="text-xl mb-10 text-gray-400 font-light leading-relaxed">
                    View my technical skills, experience, and educational background in detail.
                </p>
                <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit bg-accent-teal text-dark-bg font-bold px-10 py-4 rounded-xl shadow-2xl transition-all font-hero-font text-sm uppercase tracking-widest' 
                    href={config.link}
                >
                    GET_RESUME.PDF
                </motion.a>
            </motion.div>
        </section>
    )
}
