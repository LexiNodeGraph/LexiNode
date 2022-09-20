import type { NextApiRequest, NextApiResponse } from 'next';
import { findAllPapers } from "../../../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const keywords = await (await findAllPapers()).content.map((paper: any) => paper.keywords);

    const uniqueArray = (allKeywords: any) => [
        ...new Set(allKeywords
            .map((oneKeyword: any) =>
                JSON.stringify(oneKeyword)
            )
        )].map((s: any) => JSON.parse(s));

    res.status(200).json(keywords.flat());
}