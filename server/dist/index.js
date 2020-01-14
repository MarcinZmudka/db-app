"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = express_1.default();
app.use(cors());
const port = 3001;
const sql = require("mssql");
const config = {
    user: "sa",
    password: "12345678",
    server: "localhost\\PASTACH_INS",
    database: "Pastach_db"
};
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const login = req.query.login;
        const password = req.query.password;
        try {
            const pool = yield sql.connect(config);
            const data = yield pool.request().query(`select * from uzytkownicy`);
            for (let i = 0; i < data.recordset.length; i++) {
                if (data.recordset[i].nazwa_uzytkownika === login &&
                    data.recordset[i].haslo === password) {
                    console.log(Math.random(), "logowanko");
                    const id = data.recordset[i].id_uzytkownika;
                    const data1 = yield pool
                        .request()
                        .query(`select id_stanowiska from pracownicy where id_pracownika = ${id}`);
                    const job_id = data1.recordset[0].id_stanowiska;
                    yield sql.close();
                    return res.send({ id, job_id: 2 });
                }
            }
            res.send(false);
            yield sql.close();
        }
        catch (err) {
            console.log(err);
        }
    });
});
app.get("/query", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = req.query.query;
        const pool = yield sql.connect(config);
        const data = yield pool.request().query(query);
        console.log(data);
        res.send({ data: data.recordset });
        yield sql.close();
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map