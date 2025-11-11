import AboutImg from "../assets/pic2.jpg"

export default function About () {
    const config = {
        line1: 'Hi, My Name is Hemalatha completed my bachelor degree in Computer Technology with 71% of CGPA. I want to be a MERN Stack Developer',
        line2: 'I am proficient in frontend skills like HTML, CSS, JavaScript, React,TailwindCSS,Next.js',
        line3: 'Also have an Hands on Experience in Backend skills like SQL, Mangodb'
    }

    return <section className="flex flex-col md:flex-row bg-primary px-5" id="about">
        <div className="md:w-1/2">
            <img className='h-[400px]' src={AboutImg} alt="about section illustration"/>
        </div>
        <div className="md:w-1/2 py-3 flex justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-white border-b-2 border-secondary mb-5 w-[170px] font-bold">About Me</h1>
                <p className="text-white">{config.line1}</p><br />
                <p className="text-white">{config.line2}</p><br />
                <p className="text-white">{config.line3}</p>
            </div>
        </div>
    </section>
}