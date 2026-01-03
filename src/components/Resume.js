import { motion } from "framer-motion"

export default function Resume () {
    const config = {
        link: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf'
    }

    const scribbleVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 0.1, 
            transition: { duration: 3, ease: "easeInOut" } 
        }
    };

    return (
        <section id="resume" className="flex flex-col bg-dark-card px-10 py-32 items-center text-center border-t border-white/5 relative overflow-hidden">
            {/* Background Drawing Motion */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none">
                    <motion.circle
                        cx="500"
                        cy="500"
                        r="400"
                        stroke="#2dd4bf"
                        strokeWidth="1"
                        variants={scribbleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                    <motion.path
                        d="M100,100 L900,900 M900,100 L100,900"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        variants={scribbleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                </svg>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-teal/5 rounded-full blur-[120px] pointer-events-none" />
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl flex flex-col items-center relative z-10"
            >
                <h1 className="text-4xl text-white border-b-2 border-accent-teal mb-8 w-fit font-bold font-hero-font pb-2">03. Credentials</h1>
                <p className="text-2xl mb-12 text-gray-400 font-light leading-relaxed">
                    Interested in my technical experience and background? You can view or download my professional resume in detail.
                </p>
                <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit bg-accent-teal text-dark-bg font-bold px-12 py-5 rounded-xl shadow-2xl transition-all font-hero-font text-base uppercase tracking-widest' 
                    href={config.link}
                >
                    GET_RESUME.PDF
                </motion.a>
            </motion.div>
        </section>
    )
}
