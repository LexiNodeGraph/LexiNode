import Root from "../graphs/components/Root";
import React, { useState, useRef } from "react";
import axios from "axios";
import { Dialog } from '@headlessui/react'

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {
    const {user} = useUser();
    let [isOpen, setIsOpen] = useState(true);
    let completeButtonRef = useRef(null)

    // Finding and createting user
    const findUser = async () => await axios.get(`/api/user/find/${user?.nickname}`);
    const createUser = async () => await axios.post('/api/user/create', user || {});
    
    // Finding author
    const findAuthor = async () => {
        let find = await axios.get(`/api/author/find/${user?.nickname}`)
        if (find.data === null) {
            return false;
        } else {
            return true;
        }
    };
    // const createAuthor = async () => await axios.post('/api/author/create', user || {});

    function PopupHandler() {
        findUser()
            .then((res) => { 
                if(res.data === null) {
                    createUser();
            }
        });
        return setIsOpen(false);
    }

    return (
        <>  
            <main className="fixed h-screen w-full top-50 z-0">

                {   user?.email?.includes("@ifc") ? (
                    
                    <h1>{user?.nickname}</h1>

                ) : (
                    <div>
                        <Dialog className="relative z-40" open={isOpen} onClose={() => PopupHandler()}>
                        </Dialog>
                        <Root />
                    </div>
                )} 

                

                
            </main>
        </>
    );

};


export default Home;
