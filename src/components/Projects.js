import website1Img from '../assets/pic3.jpg';
import website2Img from '../assets/pic4.jpg';
import { motion } from 'framer-motion';

export default function Projects() {
    const config = {
        Projects: [
            {
                image: website1Img,
                description: 'Clone Ecommerce Website. Built with MERN Stack.',
                link: "https://github.com/hemakr20/"
            },
            {
                image: website2Img,
                description: 'Portfolio Website. Built with React and TailwindCSS.',
                link: "https://github.com/hemakr20/"
            }
        ]
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id='projects' className="flex flex-col py-32 px-10 justify-center bg-secondary"> 
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto mb-16"
            >
                <div className="flex flex-col px-4">
                    <h1 className="text-5xl border-b-4 border-black text-red-400 mb-6 w-fit font-bold tracking-tight pb-2">Projects</h1>
                    <p className='text-gray-700 text-xl font-light'>A selection of my recent works built with modern technologies.</p>
                </div>
            </motion.div>
            
            <div className="w-full max-w-6xl mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-4'>
                    {config.Projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className='group relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]'
                        >
                            <img className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' src={project.image} alt={project.description}/>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8'>
                                <p className='text-white text-lg mb-6 leading-snug'>{project.description}</p>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='w-fit'
                                >
                                    <a className='bg-red-400 text-white px-8 py-3 rounded-full font-bold hover:bg-red-500 transition-colors shadow-lg' target='_blank' rel="noreferrer" href={project.link}>
                                        View Project
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
