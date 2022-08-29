import type { NextApiRequest, NextApiResponse } from 'next'

import { findAuthorUser } from "../../../db/search";


export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const query = req.query;
    
    const { nickname } = query;
    const find = await findAuthorUser(nickname as string);
    res.json(find.content);
    
}