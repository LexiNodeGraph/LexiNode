import type { NextApiRequest, NextApiResponse } from 'next';
import { findAllPapers } from "../../../../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const query = req.query;
    const papers = await (await findAllPapers()).content;

    const findPaperByAuthor = (allPapers: any) => allPapers.filter((paper: any) => Object.values(paper.authors).some((author: any) => author.email === query.author));
    res.status(200).json(findPaperByAuthor(papers));
}