import { motion } from "framer-motion"

export default function Contact () {
    const config = {
        email : 'krhema18@gmail.com',
        phone : '+918940161401'
    }

    return (
        <section id='contact' className="flex flex-col bg-dark-bg px-10 py-32">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-2xl mx-auto text-center"
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
