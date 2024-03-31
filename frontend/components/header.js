import React from 'react';
import {APP_NAME} from "../config";
import {Facebook} from "./icons/facebook";
import {Twitter} from "./icons/twitter";
import {Linkedin} from "./icons/linkedin";
import {Github} from "./icons/github";
import Link from "next/link";
import {Home} from "./icons/home";
import {About} from "./icons/about";
import {Resume} from "./icons/resume";
import {Code} from "./icons/code";
import {Documents} from "./icons/documents";
import {Handshake} from "./icons/handshake";

const Header = () => {
    return (
        <header id="header" className='header'>
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src='/img/PASSPORT.png' alt="" className="img-fluid rounded-circle bg-white"/>
                    <h1 className="text-light">
                        <Link href={'/'}>
                            {APP_NAME}
                        </Link>

                    </h1>
                    {/*<h2 className="text-light">*/}
                    {/*    <Link href={'/'}>*/}
                    {/*        Full stack developer(Backend heavy)*/}
                    {/*    </Link>*/}
                    {/*</h2>*/}


                    <div className="social-links mt-3 text-center">
                        <a href="#"><Github/></a>
                        <a href="#"><Twitter/></a>
                        <a href="#"><Facebook/></a>
                        <a href="#"><Linkedin/></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <Link href="#hero" className='nav-link active'>
                                <Home/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#about"} className='nav-link'>
                                <About/>
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#resume"} className='nav-link '>
                                <Resume/>
                                <span>Resume</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#services"} className='nav-link '>
                                <Code/>
                                <span>Projects</span>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link href={"#documents"} className='nav-link '>*/}
                        {/*        <Documents/>*/}
                        {/*        <span>Documents</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li>
                            <Link href={"#contact"} className='nav-link '>
                                <Handshake/>
                                <span>Contact</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
