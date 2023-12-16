const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "",
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
