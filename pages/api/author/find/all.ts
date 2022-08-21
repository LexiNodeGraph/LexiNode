import type { NextApiRequest, NextApiResponse } from 'next'
import { findAllAuthors } from "../../db/search";


export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    const find = await findAllAuthors();
    res.json(find.content);
    
}