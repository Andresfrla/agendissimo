import User from '@/app/_models/User';
import connectToDatabase from '@/app/_utils/db';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, phone, isAdmin, dateOfBirth, email, password } = req.body;
      const newUser = new User({ name, phone, isAdmin, dateOfBirth, email, password });
      await newUser.save();
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await User.find({});
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

