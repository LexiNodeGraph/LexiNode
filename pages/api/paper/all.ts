import type { NextApiRequest, NextApiResponse } from 'next';
import { findAllPapers } from "../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
        
    res.status(200).json({
        message: "ok"
    });
}