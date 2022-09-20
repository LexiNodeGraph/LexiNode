import type { NextApiRequest, NextApiResponse } from 'next';
import { findKeyword } from "../../../db/search";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const query = req.query;

    const { keyword } = query;
    const find = await findKeyword(keyword as string);
    res.json(find.content);

}