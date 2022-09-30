import Root from "../graphs/components/Root";
import React, { useState, useRef } from "react";
import axios from "axios";

import { Dialog } from '@headlessui/react'
import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
    const { user } = useUser();
    let [isOpen, setIsOpen] = useState(true);
    
    // Finding and creating user
    const findUser = async () => await axios.get(`/api/user/find/${user?.nickname}`);
    const createUser = async () => await axios.post('/api/user/create', user || {});

    function PopupHandler(): void {
        findUser() 
            .then((res) => {
                if (res.data === null) {
                    createUser();
                }
            });
            
        return setIsOpen(false);
    }

    return (
        <>
            <main className="fixed h-screen w-full top-50 z-0">
                {
                    user && <Dialog className="relative z-40" open={isOpen} onClose={() => PopupHandler()}>
                            </Dialog>
                }
                
               <Root />
                
            </main>
        </>
    );

};


export default Home;
