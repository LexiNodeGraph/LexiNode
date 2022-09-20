import type { NextApiRequest, NextApiResponse } from 'next';
import { findAllPapers } from "../../../db/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const authors = await (await findAllPapers()).content.map((paper:any) => paper.authors);

    const uniqueArray = (allAuthors: any) => [
                        ...new Set(allAuthors
                            .map((oneAuthor: any) => 
                                JSON.stringify(oneAuthor)
                                )
                            )].map((s:any) => JSON.parse(s));

    res.status(200).json(Array.from(uniqueArray(authors.flat())));
}