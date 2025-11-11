
export default function Contact () {

    const config = {
        email : 'krhema18@gmail.com',
        phone : '+918940161401'
    }

    return <section id='contact' className="flex flex-col bg-secondary px-5 py-32">
        <div className="flex flex-col items-center">
                <h1 className="text-4xl text-red-400 border-b-2 border-secondary mb-5 w-[130px] font-bold">Contact</h1>
                <p className='pb-5'>IF you want to discuss more in detail, please contact me!</p>
                <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
                <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
        </div>
    </section>
}