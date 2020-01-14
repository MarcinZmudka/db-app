import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;
const sql = require("mssql");
const config = {
  user: "sa",
  password: "12345678",
  server: "localhost\\PASTACH_INS",
  database: "Pastach_db"
};

app.get("/", async function(req, res) {
  const login = req.query.login;
  const password = req.query.password;
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query(`select * from uzytkownicy`);
    for (let i = 0; i < data.recordset.length; i++) {
      if (
        data.recordset[i].nazwa_uzytkownika === login &&
        data.recordset[i].haslo === password
      ) {
        console.log(Math.random(), "logowanko");
        const id = data.recordset[i].id_uzytkownika;
        const data1 = await pool
          .request()
          .query(
            `select id_stanowiska from pracownicy where id_pracownika = ${id}`
          );
        const job_id = data1.recordset[0].id_stanowiska;
        await sql.close();
        return res.send({ id, job_id: 2 });
      }
    }
    res.send(false);
    await sql.close();
  } catch (err) {
    console.log(err);
  }
});
app.get("/query", async function(req, res) {
  const query = req.query.query;
  const pool = await sql.connect(config);
  const data = await pool.request().query(query);
  console.log(data);
  res.send({ data: data.recordset });
  await sql.close();
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
