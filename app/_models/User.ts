import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone: number;
  isAdmin: Boolean;
  dateOfBirth: Date;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: {type: Number, required: true },
  isAdmin: {type: Boolean, default: true},
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
