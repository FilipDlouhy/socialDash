import type { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json({ limit: '10mb' });

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Parse the request payload using the bodyParser middleware
  jsonParser(req, res, async function () {
    const formData = req.body;
    const data = await fetch('https://api.cloudinary.com/v1_1/dnhqwtuev/image/upload', {
      method: 'POST',
      body: formData,
    }).then((r) => r.json());
    res.send(data);
  });
}