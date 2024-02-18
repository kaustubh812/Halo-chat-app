const express = require("express");
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoute");
const connectToMongoDB = require("./db/connectToMongoDB");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    // root route http://localhost:8000/
    res.send("Server is ready")
});

app.use("/api/auth", authRoutes);


app.listen(PORT, ()=>{ 
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`);
});
