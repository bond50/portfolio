import React from 'react';
import {APP_NAME} from "../config";

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p>
                        I am an accomplished and driven Full-Stack Developer with a robust foundation in programming and
                        web development. With a wealth of over 6 years in the field, I am enthusiastic about leveraging
                        my expertise in both front-end and back-end development, adept database management, seamless
                        collaboration, meticulous testing methodologies, and performance optimization strategies to
                        spearhead the triumph of groundbreaking projects.

                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="/img/PASSPORT.png" className="img-fluid" alt="Profile"/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Full-Stack Developer (Backend Heavy)</h3>
                        <p className="text-muted">
                            Detail-oriented and highly focused developer with a comprehensive background in web
                            development. Passionate about crafting efficient and scalable solutions to complex problems.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Full Name:</strong>
                                        <span> {APP_NAME}</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong>
                                        <span>www.galavuwal.co.ke</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+254 0544 1779</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nairobi, Kenya</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> <strong>School:</strong>
                                        <span>University of Eldoret</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>
                                        <span>Bsc Informatics</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span>galavu10@gmail.com</span></li>

                                </ul>
                            </div>
                        </div>
                        <p>
                            As a detail-oriented and highly focused professional, I possess strong problem-solving
                            skills and excel in verbal and written communication. I thrive in team-oriented and
                            collaborative environments, demonstrating adept time management and multitasking
                            capabilities.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
