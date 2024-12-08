import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db.js"
dotenv.config();


connectDB();
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
