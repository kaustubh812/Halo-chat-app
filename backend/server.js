const express = require("express");
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoute");
const connectToMongoDB = require("./db/connectToMongoDB");


dotenv.config();
const PORT = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`);
});
