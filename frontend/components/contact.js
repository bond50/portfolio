//https://www.linkedin.com/pulse/mern-stack-website-security-k-m-nuzaf-naim-saikat-kil1c/

import React from 'react';
import {BiGeoAlt} from "./icons/geo";
import {Envelope} from "./icons/Envelope";
import {Phone} from "./icons/Phone";
import {useState} from "react";
import axios from 'axios'
import {API} from "../config";


const ContactSection = () => {
    const [values, setValues] = useState({
        subject: "",
        message: '',
        email: '',
        name: '',
        loading: false,
        error: '',
        success: false
    })

    const {email, name, message, subject, loading, error, success} = values

    const handleChange = (e) => {
        const {value, name} = e.target
        setValues({...values, [name]: value},)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setValues({...values, loading: true, error: ''})
        axios.post(`${API}/contact`, values)
            .then(r => {
                setValues({
                    subject: '',
                    message: '',
                    email: '',
                    name: '',
                    loading: false,
                    error: '',
                    success: r.data.success
                });
            })
            .catch(e => {
                console.log(e)
                setValues({...values, loading: false, success: false, error: 'Unable to send your mail'})
            })


    }

    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact me</h2>
                    <p>Welcome to my contact section. Feel free to reach out to me with any inquiries, collaborations,
                        or opportunities. I look forward to hearing from you!</p>

                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <BiGeoAlt className='contact-icon'/>
                                <h4>Location:</h4>
                                <p>Nairobi,Kenya</p>
                            </div>

                            <div className="email">
                                <Envelope className='contact-icon'/>
                                <h4>Email:</h4>
                                <p>galavu10@gmail.com</p>
                            </div>

                            <div className="phone">
                                <Phone className='contact-icon'/>
                                <h4>Call:</h4>
                                <p>+254 010 5441 779</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text"
                                           onChange={handleChange}
                                           name="name"
                                           value={name}
                                           className="form-control"
                                           id="name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        id="email" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    value={subject}
                                    onChange={handleChange}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    onChange={handleChange}
                                    rows="10"
                                    value={message}
                                    required>

                                </textarea>
                            </div>
                            <div className="my-3">
                                {loading && <div className="loading">Loading</div>}
                                {error && <div className="error-message">
                                    {error}
                                </div>}
                                {success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;
