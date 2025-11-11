import Hero_img from "../assets/pic1.jpg";
import { FaLinkedin, FaGithub} from "react-icons/fa";

export default function Hero() {
    const config = {
        subtitle: "I'm a MERN Stack Developer",
        social: {
            github: 'https://github.com/hemakr20/',
            linkedin: 'https://www.linkedin.com/in/hemalathakarthikeyan'
        }
    }

    return <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
        <div className="md:w-1/2 flex flex-col">
            <h1 className="text-pink-600 text-4xl font-hero-font"> Hi,<br/> Im <span className="text-black">Hema!</span>
            <p className="text-xl">{config.subtitle}</p>
            </h1>
        <div className="flex py-3">
            <a href={config.social.linkedin} className="pr-2 hover:text-gray-500"><FaLinkedin size="30"/></a>
            <a href={config.social.github} className="hover:text-gray-500"><FaGithub size="30"/></a>
        </div>
        </div>
        <img className="h-[400px] md:w-1/3 left-0`" src={Hero_img} alt="Hero section illustration" />
    </section>
}