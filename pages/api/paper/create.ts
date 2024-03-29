import type { NextApiRequest, NextApiResponse } from 'next'
import { createPaper } from '../db/post';

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

    console.log(req.body);
    const { title, journal_title, research_field,
             year, international, web_link, abstract, keywords, author } = req.body;
    
    let keys = keywords.map((x:string)=>x.trim().toLowerCase());
    let auts = author.filter((x: any) => Object.keys(x).length != 1);

    const create = await createPaper(title, journal_title, research_field,
        year, parseInt(international), web_link, abstract, keys, auts);
    res.json(create);
}
