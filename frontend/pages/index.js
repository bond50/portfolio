import React from 'react';
import BioData from "../components/bio-data";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import ResumeSection from "../components/resume";
import Project from "../components/project";
import ContactSection from "../components/contact";

const Index = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <main className='main' id='main'>
                <About/>
                <ResumeSection/>
                <Project/>
                <ContactSection/>
            </main>

        </>
    );
};

export default Index;