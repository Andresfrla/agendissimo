import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IService } from './Service';

export interface IAppointment extends Document {
  user: IUser['_id'];
  service: IService['_id'];
  date: Date;
  duration: number;
  notes?: string;
}

const appointmentSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  notes: { type: String },
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', appointmentSchema);
