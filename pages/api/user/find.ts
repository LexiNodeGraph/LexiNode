import type { NextApiRequest, NextApiResponse } from 'next'

import { findUser } from "../db/search";


export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const { email } = req.body;
    const find = await findUser(email);
    res.json(find);
    
}