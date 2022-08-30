import type { NextApiRequest, NextApiResponse } from 'next'

import { findAllPapers } from "../../db/search";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const find = await findAllPapers();
    res.json(find.content);
}