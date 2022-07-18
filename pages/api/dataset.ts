import type { NextApiRequest, NextApiResponse } from 'next'

type Dataset = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dataset>
) {
  res.status(200).json({ name: 'Grafos' })
}
