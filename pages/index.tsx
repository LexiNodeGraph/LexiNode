import Root from "../graphs/components/Root";
import React, { useEffect } from "react";
import axios from "axios";

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {

    return (
        <>
            <main className="fixed h-screen w-full top-50 z-0">
                <Root />
            </main>
        </>
    );

};

export default Home;
