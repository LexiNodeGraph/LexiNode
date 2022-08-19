import Root from "../graphs/components/Root";
import React from "react";
import axios from "axios";

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {
    const { user } = useUser();
    
    // const find = axios.get('/api/user/find')
    //     .then(response => {
    //         const email = response.data.email || "No email";
    //         this.setState({ email });
    //     })
    
        // const create = axios.post('/api/user/create', user || "");

    // console.log(user);


    return (
        <>
            <main className="fixed h-screen w-full top-50 z-0">
                <Root />
            </main>
        </>
    );
};

export default Home;
