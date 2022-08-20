import type { NextApiRequest, NextApiResponse } from 'next'

import { createAuthor } from "../db/post";

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const { name, email, picture } = req.body;
    const create = await createAuthor(name, email, picture);
    res.json(create);
}
