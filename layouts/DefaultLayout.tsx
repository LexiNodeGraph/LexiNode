import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function DefaultLayout({children}: any) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
