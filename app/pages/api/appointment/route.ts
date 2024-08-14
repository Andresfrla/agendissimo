import Appointment from '@/app/_models/Appointment';
import Service from '@/app/_models/Service'; // Asegúrate de importar el modelo de servicio
import connectToDatabase from '@/app/_utils/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { user, service, date, notes } = await req.json(); // Obtener user, service y notes del cuerpo de la solicitud

    // Buscar el servicio para obtener la duración
    const foundService = await Service.findById(service);
    if (!foundService) {
      return NextResponse.json({ success: false, message: 'Servicio no encontrado' }, { status: 404 });
    }

    // Crear una nueva cita con la duración del servicio
    const newAppointment = new Appointment({
      user,
      service,
      date,
      duration: foundService.duration, // Usar la duración del servicio encontrado
      notes,
    });
    await newAppointment.save();

    return NextResponse.json({ success: true, data: newAppointment }, { status: 201 });
  } catch (error) {
    const errorMessage = (error as Error).message; // Extraer el mensaje de error
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}

export async function GET(req: Request) {
  await connectToDatabase();

  try {
    const appointments = await Appointment.find({}).populate('user').populate('service');
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    const errorMessage = (error as Error).message; // Extraer el mensaje de error
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
