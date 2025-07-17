import mongoose from "mongoose";
import "dotenv/config";



async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("MONGODB CONNECTED");
  } catch (err) {
    console.log(err);
  }
}
export default connectdb;
