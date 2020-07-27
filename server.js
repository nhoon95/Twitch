import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/Image";
import "./models/User";

const PORT = 7640;

const handleListening = () => {
  console.log(`Twitch is running:localhost:${PORT}`);
};

app.listen(PORT, handleListening);
