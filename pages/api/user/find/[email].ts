import type { NextApiRequest, NextApiResponse } from 'next'

import { findUser } from "../../db/search";


export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const query = req.query;
    
    const { email } = query;
    const find = await findUser(email as string);
    res.json(find.content);
    
}