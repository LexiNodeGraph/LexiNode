import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Head from "next/head";
import NavBarResp from "../components/NavBarResp";

function DefaultLayout({children}: any) {
    return (
        <>
            <Head>
                <title>LEXINODE</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <NavBarResp />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
