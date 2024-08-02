import Service from '@/app/_models/Service';
import connectToDatabase from '@/app/_utils/db';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, description, price, duration } = req.body;
      const newService = new Service({ name, description, price, duration });
      await newService.save();
      res.status(201).json({ success: true, data: newService });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else if (req.method === 'GET') {
    try {
      const services = await Service.find({});
      res.status(200).json({ success: true, data: services });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
