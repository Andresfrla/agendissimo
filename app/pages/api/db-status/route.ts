import mongoose from 'mongoose';
import connectToDatabase from '@/app/_utils/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  await connectToDatabase();

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    return NextResponse.json({ success: true, message: 'Database is connected' });
  } else {
    return NextResponse.json({ success: false, message: 'Database is not connected' }, { status: 500 });
  }
}

