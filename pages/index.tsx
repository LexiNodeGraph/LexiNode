import Root from "../graphs/components/Root";
import React, { useEffect } from "react";
import axios from "axios";

import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
    const { user } = useUser();

    const find = async () => await axios.get(`/api/user/find/${user?.email}`);
    const create = async () => await axios.post('/api/user/create', user || {});


    if (user) {
        find().then((res) => {
            if (res.data === null) {
                create().then((res) => {
                    console.log(res);
                })
            }
        })

    }

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
