import React from 'react';
import {Code} from "./icons/code";
import {Link} from "./icons/link";

const ServicesSection = () => {
    const services = [
        {
            link: "https://vihigahospital.go.ke/",
            status: 'published',
            date: 'Sat, 03 Oct 2020 09:34:31',
            title: "Vihiga County Referral Hospital",
            description: "Vihiga County Referral Hospital (VCRH) is a government healthcare facility in Kenya, serving the community for over 23 years. With a bed capacity of 164 and six wards, it provides essential healthcare services to Vihiga and its environs. Originally Vihiga District Hospital, it was renamed after the devolution of health services."
        },
        {
            link: "https://github.com/bond50/grimmzzart_client.git",
            status: 'ongoing',
            date: 'Sat, 03 Oct 2020 09:34:31',
            title: "The Grimzz Mart",
            description: "The Grimzz Mart is an ongoing online ecommerce platform based in Nairobi. It specializes in electronics and integrates major payment gateways in Kenya such as PayPal, Stripe, and M-Pesa. This large-scale project aims to showcase new technologies and elevate my skills to another level."
        },

        {
            link: "https://seahorsenergy.com",
            status: 'published',
            date: 'Sat, 03 Oct 2020 09:34:31',
            title: "SeaHorse Energy Ltd",
            description: "SeaHorse Energy Ltd is a privately registered Oil and Gas Company in Kenya, licensed by EPRA to Import, Export, and Wholesale Petroleum products across East and Central Africa."
        },

        {
            link: "https://tailifestyle.com",
            status: 'published',
            date: 'Wed, 09 Jun 2021 11:20:15',
            title: "Tai Lifestyle Limited",
            description: "Tai Lifestyle Limited is a 100% Kenyan firm covering East and Central Africa. With a focus on high professionalism and responsiveness to clients’ needs, we invest in modern business practices to stay at the cutting edge of our industry."
        },
       {
    "link": "https://galavuwal.com",
    "status": 'published',
    "date": 'Mon, 01 Jan 2024 11:20:15',
    "title": "Galavuwal Portfolio",
    "description": "Galavuwal.com is the professional portfolio of Waldguard Galavu, showcasing a collection of my most significant projects and achievements. The site features detailed case studies on software development, highlighting my expertise in MERN stack, Django, and other technologies. This portfolio serves as a reflection of my journey in tech, demonstrating my commitment to delivering impactful solutions and my continuous growth in the field."
}


    ];

    return (<section id="services" className="services">
        <div className="container section-title" data-aos="fade-up">
            <h2>Projects</h2>
            <p>Below are some of the projects I have worked on</p>

        </div>

        <div className="container">
            <div className="row gy-4">
                {services.map((service, index) => (
                    <div key={index} className="col-lg-12" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                        <div className="service-item d-flex">
                            <div className="icon flex-shrink-0"><Link className='code'/></div>
                            <div>
                                <h4 className="title">
                                    <a href={service.link} className="stretched-link">{service.title}</a>
                                </h4>
                                <p className='link'>{service.link}</p>
                                <p className="description">{service.description}</p>
                                <p className='status'>{service.status}</p>
                                <p className='date'>{service.date}</p>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    </section>);
};

export default ServicesSection;
