import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
let document = "";

wss.on("connection", (ws) => {
  console.log("New Client Connected");
  ws.send(JSON.stringify({ type: "init", data: document }));
  ws.on("message", (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.type === "update") {
        document = parsedMessage.data;
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "update", data: document }));
          }
        });
      }
    } catch (error) {
      console.error("Error parsing message: ", error);
    }
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
