import website1Img from '../assets/pic3.jpg';
import website2Img from '../assets/pic4.jpg';

export default function Projects() {

    const config = {
        Projects : [
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

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white"> 
        <div className="w-full">
            <div className="flex flex-col px-10 py-4">
                <h1 className="text-4xl border-b-2 border-black text-red-400 mb-5 w-[135px] font-bold">Projects</h1>
                <p className=' text-red-400'>These are my best projects I have built these with frontend technologies</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-8'>
                {config.Projects.map((project) => (
                    <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} alt="projects section illustration"/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' rel="noreferrer" href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}