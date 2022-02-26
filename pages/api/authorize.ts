import { NextApiRequest, NextApiResponse } from 'next';

export default function authorize(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ isAuthorized: true });
}
