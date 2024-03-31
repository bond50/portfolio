import React, {useEffect} from 'react'
import '../styles/global.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

import Script from "next/script";



const MyApp = ({Component, pageProps}) => {

    useEffect(() => {
        AOS.init(
            {duration: 1500, once: true},
        )
    },)
    const returnHead = () => {
        return <Head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>
    }




    return <>


        {returnHead()}
        <Component {...pageProps} />
    </>


};

export default MyApp
