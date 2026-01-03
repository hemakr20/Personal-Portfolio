import ResumeIng from "../assets/Resume.jpg"
import { motion } from "framer-motion"

export default function Resume () {
    const config = {
        link: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf'
    }

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-primary px-10 py-24 items-center gap-16">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex justify-center md:justify-end"
            >
                <img className='w-72 md:w-80 rounded-lg shadow-2xl ring-4 ring-secondary/20 hover:rotate-2 transition-transform duration-300' src={ResumeIng} alt="Resume thumbnail" />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col text-white"
            >
                <h1 className="text-5xl border-b-4 border-secondary mb-8 w-fit font-bold tracking-tight pb-2">Resume</h1>
                <p className="text-xl mb-10 text-white/90 font-light leading-relaxed">
                    Interested in seeing my full experience? Feel free to view or download my professional resume.
                </p>
                <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(228, 111, 136)' }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit bg-secondary text-primary font-bold px-10 py-4 rounded-full shadow-2xl transition-all' 
                    href={config.link}
                >
                    View / Download
                </motion.a>
            </motion.div>
        </section>
    )
}
