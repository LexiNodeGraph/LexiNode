import Root from "../graphs/components/Root";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog } from '@headlessui/react'

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {
    const {user} = useUser();
    let [isOpen, setIsOpen] = useState(true);
    // Finding and createting user
    const findUser = async () => await axios.get(`/api/user/find/${user?.nickname}`);
    const createUser = async () => await axios.post('/api/user/create', user || {});
    
    // Finding and createting author
    const findAuthor = async () => await axios.get(`/api/author/find/${user?.nickname}`);
    const createAuthor = async () => await axios.post('/api/author/create', user || {});

    function PopupHandler() {
        // if(user?.email?.includes("@ifc.edu.br"))
        // if(user?.email?.includes("venienn")) Teste de email
        if(user?.email?.includes("venienn")) {
            findAuthor()
                .then((res) => { 
                    if(res.data === null) {
                        createAuthor();
                }
            });
        } else {
            findUser()
                .then((res) => { 
                    if(res.data === null) {
                        createUser();
                }
            });
        }
        return setIsOpen(false);
    }

    return (
        <>  
            <main className="fixed h-screen w-full top-50 z-0">
                <Dialog className="relative z-50" open={isOpen} onClose={() => PopupHandler()}>
                </Dialog>
                <Root />
            </main>
        </>
    );

};


export default Home;
