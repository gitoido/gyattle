import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function authorize(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const isAuthorized = Boolean(session);

  return res.status(200).json({ isAuthorized });
}
