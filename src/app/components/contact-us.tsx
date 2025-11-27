"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  interface ContactForm {
    name: string;
    email: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setFormData(prev => ({ ...(prev as ContactForm), [e.target.name]: e.target.value } as ContactForm));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you at ${formData.email}`);
    setFormData({ name: "", email: "", message: "" } as ContactForm);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-gray-600">We’d love to hear from you. Reach out for inquiries, partnerships, or support.</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required
            className="w-full p-2 border rounded h-32" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>

      {/* Alternative Contact Info */}
      <section className="text-center space-y-2">
        <p>Email: <a href="mailto:hello@yourcompany.com" className="underline text-blue-600">hello@yourcompany.com</a></p>
        <p>Phone: +1 (XXX) XXX-XXXX</p>
        <p>Follow us on:
          <a href="#" className="ml-2 text-blue-600">Instagram</a> |
          <a href="#" className="ml-2 text-blue-600">Facebook</a> |
          <a href="#" className="ml-2 text-blue-600">YouTube</a>
        </p>
      </section>

    </div>
  );
}
