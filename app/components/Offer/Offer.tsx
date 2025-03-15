"use client";

import React, { useState, useEffect } from "react";

const Offer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            navbar.style.marginTop = isVisible ? "3rem" : "0";
        }
    }, [isVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500); // Toggle every 500ms
        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-white text-blue-600 py-3 px-6 w-full flex justify-between items-center shadow-md fixed top-0 left-0 z-50 h-12">
            <div 
                className="text-lg font-semibold w-full text-center truncate" 
                style={{ color: blink ? "black" : "#2563eb", transition: "color 0.3s ease-in-out" }}
            >
                Get 15% OFF on your first order! Limited Time Offer!
            </div>
            <button 
                className="bg-white text-blue-600 text-xl font-bold p-2 rounded-full hover:bg-gray-200"
                onClick={() => setIsVisible(false)}
            >
                &times;
            </button>
        </div>
    );
};

export default Offer;
