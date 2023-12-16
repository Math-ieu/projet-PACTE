const { Client } = require("pg");

//import { Client } from "./node_modules/pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "demo",
  password: "root",
  port: 5000,
});

client.on("connect", () => {
  console.log("Connected");
});

client.on("end", () => {
  console.log("Disconnected");
});

module.exports = client;
