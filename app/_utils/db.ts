import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Configura dotenv para cargar las variables de entorno desde el archivo .env.local
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

let cached: MongooseCache;

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}
cached = global.mongoose;

async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('Creating new database connection');
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('Database connected');
      return mongoose;
    }).catch((error) => {
      console.error('Database connection error:', error);
      throw error;
    });
  }
  cached.conn = await cached.promise;

  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log('Database is connected');
  } else {
    console.log('Database is not connected');
  }
  
  return cached.conn;
}

export default connectToDatabase;
