import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.get("/", (req, res)=>{
    // root route http://localhost:8000/
    res.send("Server is ready")
});

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{ 
    console.log(`Server Running on port ${PORT}`);
});
