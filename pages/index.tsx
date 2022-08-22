import Root from "../graphs/components/Root";
import React, { useState, useRef } from "react";
import AuthorForm from "./componets/AuthorForm";

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

    const findAuthor = async () => await axios.get(`/api/author/find/${user?.nickname}`);
    const createAuthor = async () => await axios.post('/api/author/create', user || {});

    function PopupHandler(): void {

        if(user?.email?.includes("@ifc.edu.br")) {
            findAuthor()
                .then((res) => {
                    if (res.data === null) {
                        createAuthor();
                    }
                });
        } else {
            findUser()
                .then((res) => {
                    if (res.data === null) {
                        createUser();
                    }
                });
        }


        return setIsOpen(false);
    }

    return (
        <>
            <main className="fixed h-screen w-full top-50 z-0">
                <Dialog className="relative z-40" open={isOpen} onClose={() => PopupHandler()}>
                </Dialog>
                <Root />



            </main>
        </>
    );

};


export default Home;
