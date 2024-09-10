import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { getBotResponse } from "./ChatBot.js";

dotenv.config({ path: "./.env" });

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("A user connected: ", socket.id);
    socket.on('chat message', (message) => {
        console.log("New message received: ", message);
        const botReply = getBotResponse(message);
        socket.emit('Bot Reply', botReply); 
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected: ', socket.id);
    });
});

app.use(express.static(path.resolve("./Public")));

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
