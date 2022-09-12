import type { NextApiRequest, NextApiResponse } from 'next'
import { createPaper } from '../db/post';

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    console.log(req.body);
    const { title, journal_title, research_field,
             year, international, web_link, abstract } = req.body;
    const create = await createPaper(title, journal_title, research_field,
                                        year, international, web_link, abstract);
    res.json(create);
    
}
