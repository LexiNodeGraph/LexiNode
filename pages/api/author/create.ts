import type { NextApiRequest, NextApiResponse } from 'next'

import { createAuthor } from "../db/post";

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const { name, email } = req.body;
    const create = await createAuthor(name, email);
    res.json(create);
}
