import ResumeIng from "../assets/Resume.jpg"

export default function Resume () {
    const config = {
        link: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf'
    }

    return <section id="resume" className="flex flex-col md:flex-row bg-primary px-5">
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
            <img className='w-[300px] h-[400px] py-10' src={ResumeIng} alt="Resume section illustration" />
        </div>
        <div className="md:w-1/2 py-3 flex justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-white border-b-2 border-secondary mb-5 w-[130px] font-bold">Resume</h1>
                <p className="text-white">You can view my resume <a className='btn' href={config.link}>Download</a></p><br />
            </div>
        </div>
    </section>
}