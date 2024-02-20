const express = require("express");
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoute");
const messageRoutes = require("./routes/messageRoute");
const connectToMongoDB = require("./db/connectToMongoDB");
const cookieParser = require("cookie-parser")


dotenv.config();
const PORT = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`);
});
