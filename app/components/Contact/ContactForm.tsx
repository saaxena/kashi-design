"use client";

import { useState } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    enquiry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Your enquiry has been submitted!");
      if (onClose) onClose();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className="text-right">
        {onClose && (
          <button onClick={onClose} className="text-red-500 font-bold text-xl">
            &times;
          </button>
        )}
      </div>

      {/* Logo Section */}
      <div className="text-center mb-6">
        <img
          className="mx-auto h-12 w-auto"
          src="/assets/logo/logo.png"
          alt="Company Logo"
        />
        <h2 className="mt-4 text-2xl font-semibold text-navyblue">
          Let’s Make Magic Together ✨
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Share your thoughts, and we’ll bring them to life.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number (Optional)
          </label>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="enquiry"
            className="block text-sm font-medium text-gray-700"
          >
            Enquiry
          </label>
          <textarea
            id="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
            placeholder="Enter your enquiry here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue text-white font-medium py-2 px-4 rounded-md hover:bg-darkblue transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
