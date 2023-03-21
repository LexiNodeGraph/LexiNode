import Root from "../graphs/components/Root";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Dialog } from "@headlessui/react";
import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(true);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        const findUser = async () => {
            const res = await axios.get(`/api/user/find/${user?.nickname}`);
            setUserExists(res.data !== null);
        };

        if (user) {
            findUser();
        }
    }, [user]);

    return (
        <>
            <main className="fixed min-h-screen w-full top-50 z-0">
                <Dialog
                    className="relative z-40"
                    static
                    open={isOpen && user && !userExists}
                    onClose={() => setIsOpen(false)}
                ></Dialog>
                <Root />
            </main>
        </>
    );
};

export default Home;
