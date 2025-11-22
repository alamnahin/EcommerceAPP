import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./models/userModel.js";
import { hashPassword } from "./helpers/authHelper.js";
import connectDB from "./config/db.js"; // Assuming you have a db config file

// Config
dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const password = await hashPassword("admin123456"); // Set your desired password

    const adminUser = new users({
      name: "Super Admin",
      email: "admin@ecommerce.com", // Set your desired email
      password: password,
      phone: "1234567890",
      address: "Admin HQ",
      answer: "cricket", // Security answer
      role: 1, // 1 = Admin
    });

    await adminUser.save();
    console.log("Admin Created Successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();