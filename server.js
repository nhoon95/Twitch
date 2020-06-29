import app from "./app";
import express from "express";

const PORT = 7640;

const handleListening = () => {
  console.log(`Twitch is running:localhost:${PORT}`);
};

app.listen(PORT, handleListening);
