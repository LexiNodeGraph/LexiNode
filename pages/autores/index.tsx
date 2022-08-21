import axios from 'axios';
import { useEffect, useState } from 'react';

const Autores = () => {

    const [authors, setAuthors] = useState<any[]>([]);

    useEffect(() => {
        
        axios.get('http://localhost:3000/api/author/find/all')
            .then((res) => setAuthors(res.data));
        return () => {
            setAuthors([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <h1 className="flex justify-center text-2xl">Autores</h1>
            <h2>{
                    authors.length > 0 && authors.map(
                        (author) => (
                            <li key={author.id} className="flex row justify-between m-2 bg-black drop-shadow-lg p-2 rounded">
                                <h2 className='text-white'>{author.name}</h2>
                            </li>
                        )
                    )

                }
            </h2>
        </main>
    );
};

export default Autores;
