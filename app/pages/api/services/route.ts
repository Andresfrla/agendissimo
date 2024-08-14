import Service from '@/app/_models/Service';
import connectToDatabase from '@/app/_utils/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { name, description, price, duration } = await req.json(); // Cambiado para leer el cuerpo de la solicitud
    const newService = new Service({ name, description, price, duration });
    await newService.save();
    return NextResponse.json({ success: true, data: newService }, { status: 201 });
  } catch (error) {
    const errorMessage = (error as Error).message; 
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}

export async function GET(req: Request) {
  await connectToDatabase();

  try {
    const services = await Service.find({});
    return NextResponse.json({ success: true, data: services }, { status: 200 });
  } catch (error) {
    const errorMessage = (error as Error).message; 
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}

