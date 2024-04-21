import React, {useState} from 'react';
import BioData from "../components/bio-data";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import ResumeSection from "../components/resume";
import Project from "../components/project";
import ContactSection from "../components/contact";
import {MenuToClose} from "../components/icons/menu-to-close";
import {CloseToMenu} from "../components/icons/close-to-menu";


const Index = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open); // This should toggle the state correctly
        console.log('Toggle function called', !open); // This log will show the expected state after click
    };


    return (
        <>
            {!open ? (
                <CloseToMenu className='mobile-nav-toggle d-xl-none' onClick={toggleOpen}/>
            ) : (
                <MenuToClose className='mobile-nav-toggle d-xl-none' onClick={toggleOpen}/>
            )}


            <Header open={open}/>
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