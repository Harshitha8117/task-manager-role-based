import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../config/db.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const run = async () => {
  await connectDB();
  const email = 'admin@avpl.com';
  const exists = await User.findOne({ email });
  if (exists) { console.log('exists'); process.exit(); }
  const hashed = await bcrypt.hash('Admin@123', 10);
  const u = await User.create({ name: 'Admin', email, password: hashed, role: 'admin' });
  console.log('created', u._id);
  process.exit();
};
run();
