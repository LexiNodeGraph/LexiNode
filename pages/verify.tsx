import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";
import axios from "axios";

const Verify = () => {
    const {user, error, isLoading} = useUser();

    const find = async () => await axios.get(`/api/user/find/${user?.email}`);
    const create = async () => await axios.post('/api/user/create', user || {});

    if (user) {
        find().then((res) => {
            if (res.data === null) {
                create()
            }
        })
    }
    return (
        <div>
        <h1>Verifying</h1>
        </div>
    );
}

export default Verify;
export const getServerSideProps = withPageAuthRequired();