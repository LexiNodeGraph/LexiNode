import type { NextApiRequest, NextApiResponse } from 'next';
import { findPaper } from "../../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const query = req.query;
    const { id } = query;

    const paper = await findPaper(id as string);
    res.status(200).json(paper.content);
}
