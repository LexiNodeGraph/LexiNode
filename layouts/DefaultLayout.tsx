import React from "react";
import Footer from "../components/Footer";

import Head from "next/head";
import Navbar from "../components/Navbar";

function DefaultLayout({children}: any) {
    return (
        <>
            <Head>
                <title>LEXINODE</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <div className="">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
