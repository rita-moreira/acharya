import mongoose,  { Document, Model } from 'mongoose';

interface IUser extends Document {
  person: string,
  email: string,
  password: string,
  photo: string,
  role: string,
  status: string,
  verifyEmail: string,
  nif: Number,
  address: String,
  mobile: Number
}

// error: Cannot overwrite `Client` model once compiled.
// delete mongoose.connection.models['Client'];

const userSchema = new mongoose.Schema(
  {
    person: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
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
    photo: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    verifyEmail: {
      type: String,
    },  
    nif: {
      type: Number,
    },
    address: {
      type: String,
    },
    mobile: {
      type: Number
    }, 
  },
  { timestamps: true }
);

let Dataset = mongoose.models.User || mongoose.model('User', userSchema)
export default Dataset
