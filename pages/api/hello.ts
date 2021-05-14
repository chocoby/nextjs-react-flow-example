// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { VercelRequest, VercelResponse } from '@vercel/node'

export default (req: VercelRequest, res: VercelResponse) => {
  const { name = 'John Doe' } = req.query;
  res.status(200).json({ name })
}
