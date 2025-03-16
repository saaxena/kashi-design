import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
    buttonText: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Utility Drawing",
        paragraph: 'We specialize in high-quality Utility Patent Drawings that comply with all International guidelines. Our drawings accurately illustrate inventions with proper perspectives, reference numbers, and technical precision for smooth patent approval.',
        buttonText: "20$ / figure"
    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "Designs",
        paragraph: 'We provide expert Design Patent Drawings with clear, high-contrast illustrations that highlight the ornamental features of a product. our work meets with all International standards, ensuring a seamless patent application process.',
        buttonText: "25$ / figure"
    },
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Trademark Drawing",
        paragraph: 'We specialize in professional Trademark Drawings that meet all International standards. With precise line work, accurate detailing, and compliance with legal requirements, We ensure your trademark is presented clearly and effectively for approval',
        buttonText: "30$ / figure"
    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Technical Drawing",
        paragraph: 'We create professional Technical Drawings with precise detailing, ensuring clarity and accuracy for engineering, manufacturing, and patent applications. Our work adheres to industry standards for seamless implementation.',
        buttonText: "30$ / figure"
    },

];

const Provide = () => {
    return (
        <div id="services" className="flex flex-col justify-center items-center min-h-screen">
            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                {/* TOP SECTION */}
                <div className='flex flex-col items-center text-center lg:text-left p-10'>
                    <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5">Services we provide.</p>
                    <h4 className="text-lg pt-4 font-normal lh-33 text-bluegray max-w-3xl">
                        <ul className="list-disc list-inside">
                            <li>Flat fee, regardless of complexity.</li>
                            <li>Unlimited revisions and iterations, if required.</li>
                            <li>100% compliance with Patent Office regulations.</li>
                            <li>Special considerations for graphs, flowcharts, screenshots, and more.</li>
                            <li>Simple ordering process with quick delivery.</li>
                            <li>All possible output formats available.</li>
                            <li>Experienced draftspersons using the latest software and technologies.</li>
                            <li>Highly accurate and detailed drawings.</li>
                        </ul>
                    </h4>
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 rounded-lg transition duration-150 ease-in-out hover:bg-blue-dark"
                        >
                            check details below
                        </button>
                    </div>
                </div>

                {/* BOTTOM SECTION - CARDS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16 lg:gap-x-30 px-16 py-18 bg-bluebg rounded-3xl w-full mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center w-full'>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={80} height={80} className="mb-5" />
                            <h4 className="text-2xl font-semibold">{item.country}</h4>
                            <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                            <button className='mt-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>{item.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Provide;
