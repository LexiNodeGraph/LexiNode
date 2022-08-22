import Root from "../graphs/components/Root";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Dialog } from '@headlessui/react'

import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
    const { user } = useUser();
    let [isOpen, setIsOpen] = useState(true);
    let [isAuthor, setIsAuthor] = useState(false);
    let completeButtonRef = useRef(null)

    // Finding and createting user
    const findUser = async () => await axios.get(`/api/user/find/${user?.nickname}`);
    const createUser = async () => await axios.post('/api/user/create', user || {});

    // const createAuthor = async () => await axios.post('/api/author/create', user || {});

    function PopupHandler(): void {
        findUser()
            .then((res) => {
                if (res.data === null) {
                    createUser();
                }
            });
        return setIsOpen(false);
    }

    
        // Finding author
       
    let find = async () => await axios.get(`/api/author/find/${user?.nickname}`).then((res) => {
        if (res.data == null) {
            setIsAuthor(false);
        }
        else {
            setIsAuthor(true);
        }
    })
    find();



    return (
        <>
            <main className="fixed h-screen w-full top-50 z-0">

                {user?.email?.includes("ven") && isAuthor == false ? (

                    <div>
                        <h1>~ FORMULÁRIO AUTOR~</h1>

                    </div>
                    
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
