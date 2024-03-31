import React from 'react';
import {APP_NAME} from "../config";

const ResumeSection = () => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2018;
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>I am a skilled and motivated Full-Stack Software Engineer with a wealth of experience in software
                        development and system architecture. Below, you'll find details about my education and
                        professional
                        experience.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>{APP_NAME}</h4>
                            <p><em>Innovative and deadline-driven Full-Stack Software Engineer
                                with {yearsOfExperience} years of experience designing and developing scalable web
                                applications and systems architecture.</em></p>
                            <ul>
                                <li>1069-50300, Maragoli</li>
                                <li>0105441779 / 0727918998</li>
                                <li>galavu10@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>

                        <div className="resume-item">
                            <h4>Bachelor of Science in Informatics</h4>
                            <h5>2017</h5>
                            <p><em>University of Eldoret, Uasin Gishu, Kenya</em></p>
                            <p>Attained Second Class Honors, Upper Division.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Kenya Certificate of Secondary Education (K.C.S.E)</h4>
                            <h5>2011</h5>
                            <p><em>Chango High School, Vihiga, Kenya</em></p>
                            <p>Secured an A- (Minus) in the K.C.S.E exams.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Kenya Certificate of Primary Education (K.C.P.E)</h4>
                            <h5>2006</h5>
                            <p><em>Meza Primary School, Trans-Nzoia, Kenya</em></p>
                            <p>Obtained a B in the K.C.P.E exams.</p>
                        </div>


                        <h3 className="resume-title">Skills</h3>
                        <div className="resume-item">
                            <p>Backend</p>
                            <ul>
                                <li>Python, Django, Flask</li>
                                <li>Node.js, Express.js</li>
                                <li>AWS, Docker, Kubernetes</li>
                                <li>PostgreSQL, MongoDB, MySQL</li>
                                <li>Apache, Nginx</li>
                                <li>Operating Systems: Linux, Windows, Android, etc.</li>
                                <li>Version Control: GitHub, Bitbucket</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <p>Frontend</p>
                            <ul>
                                <li>JavaScript, TypeScript</li>
                                <li>ReactJS, Next.js, React Native</li>
                                <li>Bootstrap, SemanticUI, MaterialUI</li>
                                <li>Search Engine Optimization</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <p>Other</p>
                            <ul>
                                <li>GitHub, Google Analytics</li>
                                <li>Cloudflare</li>
                                <li>Tailwind CSS</li>
                                <li>Firebase, Firestore</li>
                            </ul>
                    </div>
                </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>

                        <div className="resume-item">
                            <h4>Full-Stack Software Engineer and ICT Officer</h4>
                            <h5>June 01, 2020 - Present</h5>
                            <p><em>Vihiga County Referral Hospital, Mbale</em></p>
                            <ul>
                                <li>Lead in the design, development, and implementation of web applications and system
                                    architecture.
                                </li>
                                <li>Developed an Imaging System to be used internally and externally by the Vihiga
                                    County Referral Hospital, replacing the need for Compact Disks.
                                </li>
                                <li>Led development teams in creating a Diabetes and Hypertension Management Application
                                    that is currently in Beta.
                                </li>
                                <li>Assisted in fixing issues with KenyaEMR at the facility and neighboring facilities
                                    in Vihiga County.
                                </li>
                                <li>Deployed the KenyaEMR+ instance and provided user support at the facility.</li>
                                <li>Resolved issues with the network at the facility, including DHCP server issues, and
                                    managed app deployments.
                                </li>
                                <li>Developed the hospital website using MERN Technology and continues to update it.
                                    (Website: <a href="https://vihigahospital.go.ke">vihigahospital.go.ke</a>)
                                </li>
                                <li>Created database triggers to prevent unauthorized modifications, automated tasks in
                                    Python, and developed APIs.
                                </li>
                                <li>Supported health systems and ensured interoperability among various systems.</li>
                                <li>Configured VLANs, Firewalls, DHCP servers, routings, and resolved conflicting
                                    configurations.
                                </li>

                                <li>Fixed various issues on the county website. (Website: <a
                                    href="https://vihiga.go.ke">vihiga.go.ke</a>)
                                </li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Full-Stack Developer - GRIMZ MART</h4>
                            <h5>July 30, 2023 - Present</h5>
                            <p><em>GRIMZ MART - Ecommerce Web App</em></p>
                            <ul>
                                <li>Developing an ecommerce web application using the MERN stack powered by Next.js.</li>
                                <li>GitHub Repositories: <a
                                    href="https://github.com/bond50/grimmzzart_server.git">Server</a>, <a
                                    href="https://github.com/bond50/grimmzzart_client.git">Client</a></li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Full-Stack Developer - Seahorse Energy Limited</h4>
                            <h5>August 2022 - March 2023</h5>
                            <p><em>Seahorse Energy Limited - Oil and Gas Company</em></p>
                            <ul>
                                <li>Developed Seahorse server and Seahorse client applications. (GitHub: <a
                                    href="https://github.com/bond50/seahorse.git">Seahorse Repository</a>)
                                </li>
                                <li>Website: <a href="https://seahorsenergy.com">seahorsenergy.com</a></li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Full-Stack Developer - Tai Lifestyle Limited</h4>
                            <h5>July 2022 - August 2022</h5>
                            <p><em>Tai Lifestyle Limited - Environmental Solutions and General Contracting</em></p>
                            <ul>
                                <li>Developed backend and frontend applications for Tai Lifestyle. (GitHub: <a
                                    href="https://github.com/bond50/tai-lifestyle_backend.git">Backend</a>, <a
                                    href="https://github.com/bond50/tai_frontend.git">Frontend</a>)
                                </li>
                                <li>Website: <a href="https://tailifestyle.com">tailifestyle.com</a></li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
        </section>

    );
};

export default ResumeSection;
