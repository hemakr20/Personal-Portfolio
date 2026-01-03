import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Contact () {
    const config = {
        email : 'krhema18@gmail.com',
        phone : '+918940161401'
    }

    const scribbleVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 0.1, 
            transition: { duration: 3, ease: "easeInOut" } 
        }
    };

    const doodleRef = useRef(null);

    useEffect(() => {
        if (doodleRef.current) {
            const doodles = doodleRef.current.querySelectorAll('.gsap-doodle');
            doodles.forEach((doodle, i) => {
                gsap.to(doodle, {
                    x: "random(-50, 50)",
                    y: "random(-50, 50)",
                    rotation: "random(-15, 15)",
                    duration: `random(3, 6)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.2
                });
            });
        }
    }, []);

    return (
        <section id='contact' className="flex flex-col bg-dark-bg px-10 py-32 relative overflow-hidden">
            {/* GSAP Doodles */}
            <div ref={doodleRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="gsap-doodle absolute top-[10%] left-[5%] opacity-10">
                    <svg width="60" height="60" viewBox="0 0 100 100">
                        <path d="M10,50 Q25,10 50,50 T90,50" stroke="#2dd4bf" strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute bottom-[20%] right-[10%] opacity-10">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    </svg>
                </div>
                <div className="gsap-doodle absolute top-[60%] left-[80%] opacity-10">
                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <path d="M20,20 L80,80 M80,20 L20,80" stroke="#2dd4bf" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Background Drawing Motion */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none">
                    <motion.path
                        d="M200,200 C400,100 600,900 800,800"
                        stroke="#2dd4bf"
                        strokeWidth="1"
                        variants={scribbleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                    <motion.path
                        d="M800,200 C600,100 400,900 200,800"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        variants={scribbleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                </svg>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-2xl mx-auto text-center relative z-10"
            >
                <h1 className="text-4xl text-white border-b-2 border-accent-teal mb-10 w-fit font-bold font-hero-font pb-2">04. Contact</h1>
                <p className='text-xl text-gray-400 mb-12 font-light'>
                    I am currently open for new opportunities and collaborations. If you have a project in mind or just want to say hi, my inbox is always open.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <motion.a 
                        href={`mailto:${config.email}`}
                        whileHover={{ y: -5, borderColor: '#2dd4bf' }}
                        className="bg-dark-card p-6 rounded-2xl shadow-xl border border-white/5 transition-colors cursor-pointer block"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-accent-teal font-hero-font mb-2">Mail</p>
                        <span className="text-lg text-white font-medium hover:text-accent-teal transition-colors break-all">{config.email}</span>
                    </motion.a>
                    
                    <motion.a 
                        href={`tel:${config.phone}`}
                        whileHover={{ y: -5, borderColor: '#2dd4bf' }}
                        className="bg-dark-card p-6 rounded-2xl shadow-xl border border-white/5 transition-colors cursor-pointer block"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-accent-teal font-hero-font mb-2">Phone</p>
                        <span className="text-lg text-white font-medium hover:text-accent-teal transition-colors">{config.phone}</span>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
