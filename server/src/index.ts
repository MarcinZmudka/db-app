import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;
const sql = require("mssql");
const config = {
  user: "adminazurebaza",
  password: "Test12345",
  server: "azuretestbazy.database.windows.net",
  database: "TEST",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true
  }
};

app.get("/", async function(req, res) {
  try {
    const pool = await sql.connect(config);
    const response = await pool.request().query(`select * from users`);
    res.send(response);
    await sql.close();
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
