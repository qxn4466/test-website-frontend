"use client";

import { useState } from "react";

export default function ContactUs() {
  interface ContactForm {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you at ${formData.email}`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-gray-600">
        We’d love to hear from you. Reach out for inquiries, partnerships, or support.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-sm"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded h-32 resize-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full md:w-auto px-8 py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <section className="text-center space-y-2 text-gray-700">
        <p>
          Email:
          <a
            href="mailto:hello@yourcompany.com"
            className="underline text-blue-600 ml-1"
          >
            hello@yourcompany.com
          </a>
        </p>

        <p>Phone: +1 (XXX) XXX-XXXX</p>

        <p>
          Follow us on:
          <a href="#" className="ml-2 text-blue-600 underline">Instagram</a> |
          <a href="#" className="ml-2 text-blue-600 underline">Facebook</a> |
          <a href="#" className="ml-2 text-blue-600 underline">YouTube</a>
        </p>
      </section>
    </div>
  );
}
