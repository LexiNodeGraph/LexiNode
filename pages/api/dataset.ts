import type { NextApiRequest, NextApiResponse } from 'next';
import { find_data } from './db/search';

export default async function handler(
   req: NextApiRequest, 
   res: NextApiResponse) {

   const id = await find_data("622b7fde465c99fbde6f6dcd");
   res.json(id.content);

}
