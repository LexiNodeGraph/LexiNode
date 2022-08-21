import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthor } from "../db/post";

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const { name, nickname, email, picture } = req.body;
    const create = await createAuthor(name, nickname, email, picture);
    res.json(create);
}
