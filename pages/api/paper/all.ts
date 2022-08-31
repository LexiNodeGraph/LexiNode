import type { NextApiRequest, NextApiResponse } from 'next';
import { findAllPapers } from "../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const papers = await findAllPapers();
    console.log(papers);
    res.json(papers.content);
}