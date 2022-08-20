import Root from "../graphs/components/Root";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog } from '@headlessui/react'

import {useUser} from "@auth0/nextjs-auth0";

const Home = () => {
    const {user} = useUser();
    let [isOpen, setIsOpen] = useState(true);

    const find = async () => await axios.get(`/api/user/find/${user?.email}`);
    const create = async () => await axios.post('/api/user/create', user || {});
    
    function PopupHandler() {
        find()
            .then((res) => { 
                if(res.data === null) {
                    create();
            }
        });
        return setIsOpen(false);
    }

    return (
        <>  
            <main className="fixed h-screen w-full top-50 z-0">
                
                <Dialog className="relative z-50" open={isOpen} onClose={() => PopupHandler()}>
                    {/* <Dialog.Panel>
                        <Dialog.Title>Deactivate account</Dialog.Title>
                        <Dialog.Description>
                        This will permanently deactivate your account
                        </Dialog.Description>

                        <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                        </p>

                        <button onClick={() => setIsOpen(false)}>Deactivate</button>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                    </Dialog.Panel> */}
                </Dialog>
                <Root />
            </main>
        </>
    );

};


export default Home;
