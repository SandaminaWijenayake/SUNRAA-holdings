import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full flex flex-col px-[2vh] md:px-[20vh] bg-white py-4">
      <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 border rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition"
        >
          SEND A MESSAGE
        </button>
      </form>
    </div>
  );
}
