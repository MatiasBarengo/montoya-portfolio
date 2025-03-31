"use client";

import { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thanks for your message! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-16">Let's Talk</h2>

        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <div className="mb-12">
              <h6 className="subtitle mb-4">Email</h6>
              <p className="text-xl">office@montoya.com</p>
            </div>

            <div className="mb-12">
              <h6 className="subtitle mb-4">Address</h6>
              <p className="text-xl">35 M Str, New York, USA</p>
            </div>

            <div>
              <h6 className="subtitle mb-4">Phone</h6>
              <p className="text-xl">0040 (7763) 574-8901</p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="subtitle mb-8">INTERESTED TO DISCOVER MORE FROM OUR WORKS?</p>
          <Link href="/portfolio-grid" className="inline-block border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
