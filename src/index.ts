import http from "http";
import app from "./app";
import configuration from "./configuration";
import socketIo, { Socket } from "socket.io";
import "../src/database";
const server = http.createServer(app);
import mqtt from "mqtt";
import { SocketEvents } from "./constants";
const options: any = {
  host: "broker.emqx.io",
  port: 1883,
  protocol: "public",
  username: "emqx",
  password: "public",
};

const socketClient = new socketIo.Server(server, { transports: ["websocket"] });
const client = mqtt.connect(options);
let socket: Socket;

//
socketClient.on("connection", (sock) => {
  console.log("new socket connected");
  socket = sock;
  sock.on(SocketEvents.slot, (data) => {
    console.log("Slot Status " + data);
  });
});

//
///////////
client.on("connect", function () {
  //client.publish("connection", "server connected");
  //////////////////////
  client.subscribe("slot", { qos: 0 }, (error) => {
    if (error) return console.log(error.message);
  });
  client.subscribe("connection", { qos: 0 }, (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  console.log("mqtt connected");
});

client.on("message", async function (topic, message) {
  // Called each time a message is received
  console.log("Received message:", topic, message.toString());
  if (topic === "slot") {
    const data = message.toString();
    if (Boolean(data.length)) {
      socket && socket.emit(SocketEvents.slot, data);
    }
  }
});

server.listen(configuration.port, () =>
  console.log(`Server Running on http://localhost:${configuration.port}`)
);
