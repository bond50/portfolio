import React from 'react';
import Typewriter from 'typewriter-effect';
import { APP_NAME } from "../config";

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container">
                <h1>{APP_NAME}</h1>
                <div className='type-writer'>
                    <Typewriter
                        options={{
                            strings: [
                                // Backend
                                'Python, Django, Flask',
                                'Node.js, Express.js',
                                'AWS, Docker, Kubernetes',
                                'PostgreSQL, MongoDB, MySQL',
                                'Apache, Nginx',
                                "Operating Systems: Linux, Windows, Android",
                                "Version Control: GitHub, Bitbucket",

                                // Frontend
                                'JavaScript, TypeScript',
                                'ReactJS, Next.js, React Native',
                                'Bootstrap, SemanticUI, MaterialUI',
                                'Search Engine Optimisation',

                                // Email and Server Management
                                'Postfix, Dovecot',
                                'DMARC, SPF, DKIM',
                                'VPS Management',
                                'DNS Configuration',


                                // Other
                                'GitHub, Google Analytics',
                                'Cloudflare',

                                // Additional
                                // 'GraphQL, Apollo',
                                // 'Vue.js, Nuxt.js',
                                'Tailwind CSS',
                                'Firebase, Firestore',
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
