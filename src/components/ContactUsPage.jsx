// Option 1: Using EmailJS (Recommended for frontend-only)
// First install EmailJS: npm install @emailjs/browser

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  address,
  reviews,
  email,
  phone_number,
  fiverr_link,
  telegram_link,
  whatsapp_link,
  instagram_link,
} from "../constants";

import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import EmailIcon from "../assets/svg/EmailIcon";
import PhoneIcon from "../assets/svg/PhoneIcon";
import LocationIcon from "../assets/svg/LocationIcon";
import UserIcon from "../assets/svg/UserIcon";
import SendMessageSvg from "../assets/svg/SendMessageSvg";
import Button from "./Button";
import { instagram } from "../assets";
import { whatsapp } from "../assets";
import { telegram } from "../assets";
import { fiverr } from "../assets";

const ContactUsPage = ({ crosses }) => {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration (you need to set these up)
  const EMAILJS_SERVICE_ID = "service_ufaauve"; // From EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = "template_o9ifvvu"; // From EmailJS dashboard  
  const EMAILJS_PUBLIC_KEY = "aOUjnVgVPzpXzao_c"; // From EmailJS dashboard

  // Option 1: EmailJS Implementation
  const handleSendMessageEmailJS = async (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !contactEmail || !message || !selectedSubject) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: contactEmail,
        phone_number: phoneNumber,
        subject: selectedSubject,
        message: message,
        time: new Date().toLocaleString()
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        window.fbq('track', 'Contact_Form_Fill');
        alert("Message sent successfully!");
        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setContactEmail("");
        setMessage("");
        setSelectedSubject("");
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Option 2: Formspree Implementation (No additional packages needed)
  const handleSendMessageFormspree = async (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !contactEmail || !message || !selectedSubject) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email: contactEmail,
          phone: phoneNumber,
          subject: selectedSubject,
          message: message,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setContactEmail("");
        setMessage("");
        setSelectedSubject("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Option 3: Netlify Forms (if hosted on Netlify)
  const handleSendMessageNetlify = (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !contactEmail || !message || !selectedSubject) {
      alert("Please fill in all fields.");
      return;
    }

    // Netlify handles form submission automatically
    // Just ensure the form has data-netlify="true" attribute
    alert("Form submitted! Check your Netlify dashboard for submissions.");
  };

  // Option 4: Web3Forms Implementation
  const handleSendMessageWeb3Forms = async (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !contactEmail || !message || !selectedSubject) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      formData.append("name", `${firstName} ${lastName}`);
      formData.append("email", contactEmail);
      formData.append("phone", phoneNumber);
      formData.append("subject", selectedSubject);
      formData.append("message", message);

      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/contact", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setContactEmail("");
        setMessage("");
        setSelectedSubject("");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Choose which handler to use (I'm using EmailJS as default)





  const handleSendMessage = async (e) => {
  e.preventDefault();

  if (!firstName || !lastName || !phoneNumber || !contactEmail || !message || !selectedSubject) {
    alert("Please fill in all fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: contactEmail,
        message: `
Subject: ${selectedSubject}

Phone: ${phoneNumber}

Message:
${message}
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setContactEmail("");
      setMessage("");
      setSelectedSubject("");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  } finally {
    setIsSubmitting(false);
  }
};




  return (
    <Section
      id="contactUs"
      customPaddings="pt-5 lg:py-16 xl:py-12"
      crosses={crosses}
    >
      <div className="container relative z-2 text-[#011c2b]">
        <Heading
          className="hidden md:block lg:block md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="Contact Us"
        />
        <div
          className="bg-conic-gradient p-1 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8"
          style={{
            backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
            borderRadius: '1rem',
          }}
        >
          <div className="grid lg:grid-cols-3 items-center gap-4 " style={{
            backgroundColor: `white`,
            borderRadius: '1rem',
          }}>
            <div className="bg-[#0E0C15] rounded-lg p-6 max-lg:text-center">
              <h2 className="text-xl font-bold text-white">Contact Information</h2>
              <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help?</p>
              <ul className="mt-16 space-y-10">
                <li className="flex items-center max-lg:justify-center">
                  <EmailIcon />
                  <a target="_blank" href={`mailto:${email}`} className="text-white text-sm ml-3">
                    <strong>{email}</strong>
                  </a>
                </li>
                <li className="flex items-center max-lg:justify-center">
                  <PhoneIcon />
                  <a target="_blank" href={`tel:+91:${phone_number}`} className="text-white text-sm ml-3">
                    <strong>+91 {phone_number}</strong>
                  </a>
                </li>
                <li className="flex items-center max-lg:justify-center">
                  <LocationIcon />
                  <strong className="text-white text-sm ml-3">{address}</strong>
                </li>
              </ul>
              <ul className="flex max-lg:justify-center mt-16 space-x-4">
                <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href={whatsapp_link} target="_blank">
                    <img src={whatsapp} width={18} height={18} />
                  </a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href={instagram_link} target="_blank">
                    <img src={instagram} width={18} height={18} />
                  </a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href={fiverr_link} target="_blank">
                    <img src={fiverr} width={18} height={18} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block lg:block p-6 rounded-xl lg:col-span-2">
              {/* For Netlify Forms, add: data-netlify="true" name="contact" */}
              <form onSubmit={handleSendMessage}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <UserIcon />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <UserIcon />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone No."
                      className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <PhoneIcon className="w-[18px] h-[18px] absolute right-2" />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      name="contactEmail"
                      placeholder="Email"
                      className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                    <EmailIcon className="w-[18px] h-[18px] absolute right-2" />
                  </div>
                  <div className="relative flex items-center sm:col-span-2">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none min-h-[100px] resize-vertical"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <EmailIcon className="w-[18px] h-[18px] absolute right-2 top-3" />
                  </div>
                  <div className="col-span-full">
                    <h6 className="text-sm text-gray-400">Select Subject</h6>
                    <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                      <div className="flex items-center mt-3">
                        <input
                          id="radio1"
                          type="radio"
                          name="subject"
                          value="General Inquiry"
                          className="hidden peer"
                          checked={selectedSubject === "General Inquiry"}
                          onChange={() => setSelectedSubject("General Inquiry")}
                          required
                        />
                        <label
                          htmlFor="radio1"
                          className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                        >
                          <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p className="text-sm ml-3">General Inquiry</p>
                      </div>
                      <div className="flex items-center mt-3">
                        <input
                          id="radio2"
                          type="radio"
                          name="subject"
                          value="Technical Support"
                          className="hidden peer"
                          checked={selectedSubject === "Technical Support"}
                          onChange={() => setSelectedSubject("Technical Support")}
                        />
                        <label
                          htmlFor="radio2"
                          className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                        >
                          <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p className="text-sm ml-3">Technical Support</p>
                      </div>
                      <div className="flex items-center mt-3">
                        <input
                          id="radio3"
                          type="radio"
                          name="subject"
                          value="Website Feedback"
                          className="hidden peer"
                          checked={selectedSubject === "Website Feedback"}
                          onChange={() => setSelectedSubject("Website Feedback")}
                        />
                        <label
                          htmlFor="radio3"
                          className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                        >
                          <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p className="text-sm ml-3">Website Feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? '#ccc' : 'hsl(26, 100%, 55%)'
                  }}
                  className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed transition-all"
                >
                  <SendMessageSvg />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsPage;