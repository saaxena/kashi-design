"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    { imgSrc: "/assets/carousel/sample_drawing(18).png" },
    { imgSrc: "/assets/carousel/sample_drawing(19).png" },
    { imgSrc: "/assets/carousel/sample_drawing(20).png" },
    { imgSrc: "/assets/carousel/sample_drawing(21).png" },
    { imgSrc: "/assets/carousel/sample_drawing(22).png" },
    { imgSrc: "/assets/carousel/sample_drawing(23).png" },
    { imgSrc: "/assets/carousel/sample_drawing(24).png" },
    { imgSrc: "/assets/carousel/sample_drawing(25).png" },
    { imgSrc: "/assets/carousel/sample_drawing(26).png" },
    { imgSrc: "/assets/carousel/sample_drawing(27).png" },
    { imgSrc: "/assets/carousel/sample_drawing(28).png" },
    { imgSrc: "/assets/carousel/sample_drawing(29).png" },
    { imgSrc: "/assets/carousel/sample_drawing(30).png" },
    { imgSrc: "/assets/carousel/sample_drawing(31).png" },
    { imgSrc: "/assets/carousel/sample_drawing(32).png" },
    { imgSrc: "/assets/carousel/sample_drawing(33).png" },
    { imgSrc: "/assets/carousel/sample_drawing(34).png" },
    { imgSrc: "/assets/carousel/sample_drawing(35).png" },
];

// CAROUSEL SETTINGS
const MultipleItems: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const sliderRef = useRef<any>(null); // Ref for the Slider component

    // Effect to manage body overflow when modal is opened or closed
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }

        // Cleanup on component unmount or modal close
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleImageClick = (imgSrc: string) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause(); // Pause autoplay
            sliderRef.current.slickPrev(); // Go to the previous slide
            // Autoplay will remain paused until the next button is clicked
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause(); // Pause autoplay
            sliderRef.current.slickNext(); // Go to the next slide
            sliderRef.current.slickPlay(); // Restart autoplay in forward direction
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, // We will add custom arrows
        autoplay: true, // Keep autoplay true
        autoplaySpeed: 2000,
        speed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div id="companies" className="text-center">
            <div
                className={`mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ${
                    isModalOpen ? "overflow-hidden" : ""
                }`}
            >
                {/* Heading Section */}
                <div className="text-center py-10">
                    <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl">
                        A Glimpse of How We Deliver
                    </h1>
                    <p className="mt-6 text-lg text-bluegray">
                        Explore some of the amazing results we’ve delivered to our clients
                        through our creative and professional services.
                    </p>
                    {/* Button */}
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 rounded-lg transition duration-150 ease-in-out hover:bg-blue-dark"
                        >
                            Explore Our Work Below
                        </button>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative py-14">
                    {/* Left Arrow */}
                    <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-70 rounded-full cursor-pointer z-10"
                        onClick={handlePrev}
                    >
                        <span className="text-white text-2xl">{"<"}</span>
                    </div>

                    {/* Right Arrow */}
                    <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-70 rounded-full cursor-pointer z-10"
                        onClick={handleNext}
                    >
                        <span className="text-white text-2xl">{">"}</span>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className="mx-2 transition-transform transform hover:scale-105"
                                onClick={() => handleImageClick(item.imgSrc)}
                            >
                                <Image
                                    src={item.imgSrc}
                                    alt={item.imgSrc}
                                    width={300}
                                    height={300}
                                    className=" rounded-md shadow-lg cursor-pointer"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Modal */}
                {isModalOpen && selectedImage && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={handleCloseModal}
                    >
                        <div className="relative bg-white p-4 rounded-lg">
                            <Image
                                src={selectedImage}
                                alt={selectedImage}
                                width={600}
                                height={600}
                                className="rounded-md"
                            />
                            <button
                                className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}

                {/* Blur and Freeze background effect */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-blur z-40 pointer-events-none"></div>
                )}

                <hr />
            </div>
        </div>
    );
};

export default MultipleItems;
