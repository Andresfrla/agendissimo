import User from '@/app/_models/User';
import connectToDatabase from '@/app/_utils/db';

export async function POST(req: Request) {
  try {
    const { name, phone, isAdmin, dateOfBirth, email, password } = await req.json();
    await connectToDatabase();
    const newUser = new User({ name, phone, isAdmin, dateOfBirth, email, password });
    await newUser.save();
    return new Response(JSON.stringify({ success: true, data: newUser }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return new Response(JSON.stringify({ success: true, data: users }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}