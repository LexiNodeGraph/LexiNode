import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Head from "next/head";

function DefaultLayout({children}: any) {
    return (
        <>
            <Head>
                <title>LEXINODE</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
