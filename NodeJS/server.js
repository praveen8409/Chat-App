// Package Imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// File Imports
import authRoutes from "./routes/auth.routes.js";
import connectToMongo from "./db/connectToMongoDB.js";
import messageRotes from "./routes/message.routes.js";
import userRotes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";


// Variables

const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

// Middleware
dotenv.config();
app.use(express.json()); 
app.use(cookieParser());

// API
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRotes);
app.use("/api/users",userRotes);

// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
app.use(express.static(path.join(__dirname, "/ReactJS/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "ReactJS", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectToMongo();
    console.log(`server is running at port ${PORT}`);
});