import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone: number;
  isAdmin: Boolean;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: {type: Number, required: true },
  isAdmin: {type: Boolean, default: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
