import type { NextApiRequest, NextApiResponse } from 'next'

import { createUser } from "../db/post";

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const { name, email } = req.body;
    const create = await createUser(name, email);
    res.json(create);
    
}