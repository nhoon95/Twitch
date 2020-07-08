import "./db";
import app from "./app";
import express from "express";
import "./models/Video";
import "./models/Comment";

const PORT = 7640;

const handleListening = () => {
  console.log(`Twitch is running:localhost:${PORT}`);
};

app.listen(PORT, handleListening);
