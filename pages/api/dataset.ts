import type { NextApiRequest, NextApiResponse } from 'next';
import { find_data } from './db/search';

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

   const id = await find_data("629a36276b50cb2f8c950891");
   res.json(id.content);

}
