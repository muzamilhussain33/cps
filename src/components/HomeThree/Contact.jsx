import React, { useState } from "react";
import axios from "axios";
import ContactImage from '../../assets/images/resource/contact.jpg'; 
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsBrowserChrome } from "react-icons/bs";

function ContactSectionTwo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // success / error message

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await axios.post(
        "http://localhost:5000/send-email",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.status === "success") {
        setStatus({ type: "success", msg: res.data.message });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", msg: "Unexpected server response." });
      }
    } catch (err) {
      console.error(err.response || err.message);
      const msg =
        err.response?.data?.message ||
        "Server error, please try again later.";
      setStatus({ type: "error", msg });
    }
  };

  return (
    <section className="contact-section-two pull-up mt-20" id="contact">
      <div className="auto-container">
        <div className="row">
          {/* Info Column */}
          <div className="info-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
             <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">Get to know</div>
                                {/* <h3>OUR MISSION</h3> */}
                            </div>
                            <figure className="image overlay-anim">
                                <img src={ContactImage} alt="Contact" />
                            </figure>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">OUR MISSION</h5>
                                <div className="text">
                                To deliver the best reliable solution in IT infrastructures, security systems, ELV solutions,
                                and help our clients to improve business efficiency.
                                </div>
                            </div>b
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h5 className="title">OUR VISION</h5>
                                <div className="text">
                                To be the most valued & preferred service provider for all our clients
                                </div>
                            </div>
                        </div>
          </div>

          {/* Form Column */}
          <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="contact-form light wow fadeInLeft">
                <div className="title-box">
                  <span className="sub-title">Contact us</span>
                  <h3>GET IN TOUCH</h3>
                </div>

                {status && (
                  <div
                    style={{
                      marginBottom: "1rem",
                      color: status.type === "success" ? "green" : "red",
                    }}
                  >
                    {status.msg}
                  </div>
                )}

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write a Message"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="btn-title">Send a message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionTwo;