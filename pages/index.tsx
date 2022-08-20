import Root from "../graphs/components/Root";
import React, { useCallback, useEffect } from "react";
import axios from "axios";

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {

    const {user} = useUser();

    const find = async () => await axios.get(`/api/user/find/${user?.email}`);
    const create = async () => await axios.post('/api/user/create', user || {});

    useEffect(() => {
        if(user) {
            find()
                .then((res) => { 
                    if(res.data === null) {
                        create();
                }
            });
        }
    }, []);

    // if(user) {
    //     axios.get(`/api/user/find/${user?.email}`)
    //         .then((res) => { 
    //             if(res.data === null) {
    //                 axios.post('/api/user/create', user || {})
    //                     .then(res => console.log("created"));
    //         }
    //     });
    // }

    return (
        <>  
            <main className="fixed h-screen w-full top-50 z-0">
                

                <Root />
            </main>
        </>
    );

};


export default Home;
