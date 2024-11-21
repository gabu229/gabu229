"use client";

import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import { BiPaperPlane } from "react-icons/bi";
import { Bowlby_One, Inter } from "next/font/google";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

const ContactForm = () => {
  const form = useRef();

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState("Send message");

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");

  const sendEmail = (e) => {
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const toastPopUp = toast.loading("Please wait...", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
    });

    setBtnDisabled(true);
    setBtnContent("Sending...");
    e.preventDefault();

    console.warn(form.current[0].value);

    // return;
    if (!validateEmail(form.current[0].value)) {
      toast.update(toastPopUp, {
        render: "Email is invalid!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: true,
      });

      setBtnContent("Try again");
      setBtnDisabled(false);
      return false;
    }

    emailjs
      .sendForm("service_5sqh1ra", "template_kzf2nnb", form.current, {
        publicKey: "73Z5oWXAxDTJD5ThU",
      })
      .then(
        () => {
          toast.update(toastPopUp, {
            render: "Message sent successfully",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
          });

          setNameField("");
          setEmailField("");
          setMessageField("");
          console.log("SUCCESS!");

          setBtnDisabled(false);
          setBtnContent("Send message");
        },
        (error) => {
          toast.update(toastPopUp, {
            render: "Sending failed.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
          });

          setBtnDisabled(false);
          setBtnContent("Try again");

          console.log("FAILED...", error.text);
        }
      );
  };

  const handleNameChange = (e) => {
    setNameField(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailField(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageField(e.target.value);
  };

  return (
    <div className="w-full max-w-[600px]">
      <form
        onSubmit={sendEmail}
        ref={form}
        autoComplete="off"
        autoCorrect="off"
        className="space-y-4 md:space-y-12"
      >
        <div className="mb-4">
          <input
            value={emailField}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            className=""
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            value={nameField}
            onChange={handleNameChange}
            type="text"
            name="full_name"
            id="name"
            className=""
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={messageField}
            onChange={handleMessageChange}
            type="text"
            name="message"
            id="message"
            placeholder="Your message..."
            rows={5}
            className=""
            required
          />
        </div>

        <div className="w-full text-end ">
          <button className="w-auto" type="submit" disabled={btnDisabled}>
            <span className="flex gap-2">
              <span
                className={`${boldFont.className} text-nowrap text-lg md:text-2xl`}
              >
                {btnContent}
              </span>
              <span>
                <BiPaperPlane size={28} />
              </span>
            </span>
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ContactForm;
