import { motion } from "framer-motion"

export default function Contact () {
    const config = {
        email : 'krhema18@gmail.com',
        phone : '+918940161401'
    }

    return (
        <section id='contact' className="flex flex-col bg-secondary px-10 py-32">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-2xl mx-auto text-center"
            >
                <h1 className="text-5xl text-red-400 border-b-4 border-white mb-10 w-fit font-bold tracking-tight pb-2">Get In Touch</h1>
                <p className='text-xl text-gray-700 mb-12 font-light'>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6 w-full">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                    >
                        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                        <a href={`mailto:${config.email}`} className="text-2xl text-red-400 font-medium hover:underline">{config.email}</a>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
                    >
                        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Phone</p>
                        <a href={`tel:${config.phone}`} className="text-2xl text-red-400 font-medium hover:underline">{config.phone}</a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
