require('dotenv').config({ path: "config/config.env" });
const connectDatabase = require('./config/database')


const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Tắt máy chủ vì Uncaught Exception`);
    process.exit(1);
  });

connectDatabase();

app.get('/', (req, res) => {
  res.send('Hello World!1111')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})