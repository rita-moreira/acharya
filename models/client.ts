import mongoose,  { Document, Model, Schema } from 'mongoose';
import crypto from 'crypto';

interface Client extends Document {
  name: string,
  email: string,
  hashed_password: string,
  salt: string,
  role: string,
  photo: string,
}


const clientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 0,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Client>('User', clientSchema);
