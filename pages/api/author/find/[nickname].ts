import type { NextApiRequest, NextApiResponse } from 'next'

import { findAuthor } from "../../db/search";


export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const query = req.query;
    
    const { nickname } = query;
    const find = await findAuthor(nickname as string);
    res.json(find.content);
    
}