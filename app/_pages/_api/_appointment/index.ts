import Appointment from '@/app/_models/Appointment';
import connectToDatabase from '@/app/_utils/db';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { user, service, date, duration, notes } = req.body;
      const newAppointment = new Appointment({ user, service, date, duration, notes });
      await newAppointment.save();
      res.status(201).json({ success: true, data: newAppointment });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else if (req.method === 'GET') {
    try {
      const appointments = await Appointment.find({}).populate('user').populate('service');
      res.status(200).json({ success: true, data: appointments });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
