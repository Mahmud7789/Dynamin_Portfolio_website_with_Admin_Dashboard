import mongoose from "mongoose";

export default async function ConnectDB(){
  try {
    
    await mongoose.connect("mongodb+srv://Mahmud_99:Mahmud@555.@portfolio.xtfxv7o.mongodb.net/");
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}