import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
export default function ContactForm({darkMode}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);
      emailjs
        .send(
          "service_xq4b9nl",
          "template_p6t3g0g",
          formData,
          "_jyI4fcQ0-EZyBA7D"
        )
        .then((response) => {
          toast.success("Message sent successfully!",response);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message, please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <motion.h1
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-50}}
    transition={{duration:1}}
     
       className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let&apos;s Connect.
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
          {/* TODO SOTNE COLOR 
          border-slate-800
           */}
            <input
              className={`mb-8 w-full appearance-none rounded-lg border ${darkMode ? "border-slate-200" : "border-slate-800" } bg-transparent px-3 py-2 text-sm  ${darkMode? "focus:border-stone-200" : "focus:border-stone-800"} focus:outline-none `}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
            {error.name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-sm text-rose-800">{error.name}</motion.p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              className={`mb-8 w-full appearance-none rounded-lg border ${darkMode ? "border-slate-200" : "border-slate-800" } bg-transparent px-3 py-2 text-sm ${darkMode ? "focus:border-stone-200" : "focus:border-stone-800" } focus:outline-none`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {error.email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-sm text-rose-800">{error.email}</motion.p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            className={`mb-8 w-full appearance-none rounded-lg border ${darkMode ? "border-slate-200" : "border-slate-800" } bg-transparent px-3 py-2 text-sm ${darkMode ? " focus:border-stone-200" : "focus:border-stone-800" } focus:outline-none`}
            rows={6}
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
          />
          {error.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-sm text-rose-800">{error.message}</motion.p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-slate-200 bg-zinc-900 px-4 py-2 text-sm font-semibold text-stone-200 hover:bg-zinc-500 ${isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
}
