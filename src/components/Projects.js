import website1Img from '../assets/pic3.jpg';
import website2Img from '../assets/pic4.jpg';
import { motion } from 'framer-motion';

export default function Projects() {
    const config = {
        Projects: [
            {
                image: website1Img,
                description: 'Full-featured E-commerce solution with real-time state management and optimized checkout flow.',
                link: "https://github.com/hemakr20/",
                tech: ["React", "Node.js", "MongoDB", "Redux"]
            },
            {
                image: website2Img,
                description: 'Modern developer portfolio with advanced animations and performance-first architecture.',
                link: "https://github.com/hemakr20/",
                tech: ["Next.js", "Framer Motion", "Tailwind"]
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-32 px-10 justify-center bg-dark-bg"> 
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto mb-16"
            >
                <div className="flex flex-col px-4">
                    <h1 className="text-4xl border-b-2 border-accent-teal text-white mb-6 w-fit font-bold font-hero-font pb-2">02. Selected Work</h1>
                    <p className='text-gray-500 text-lg font-light'>Building digital experiences with modern engineering practices.</p>
                </div>
            </motion.div>
            
            <div className="w-full max-w-6xl mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                    {config.Projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className='group relative bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-white/5'
                        >
                            <div className='p-8'>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech?.map(t => (
                                        <span key={t} className="text-[10px] font-hero-font text-accent-teal uppercase tracking-widest px-2 py-1 bg-accent-teal/10 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className='text-gray-300 text-base mb-6 font-light leading-relaxed'>{project.description}</p>
                                <motion.a 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='inline-block w-full text-center border border-accent-teal text-accent-teal px-6 py-3 rounded-xl font-bold font-hero-font text-xs hover:bg-accent-teal hover:text-dark-bg transition-all' 
                                    target='_blank' 
                                    rel="noreferrer" 
                                    href={project.link}
                                >
                                    VIEW_PROJECT
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
