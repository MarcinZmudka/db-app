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
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const login = req.query.login;
        const password = req.query.password;
        try {
            const pool = yield sql.connect(config);
            const response = yield pool.request().query(`select * from users`);
            if (response.recordset[0].login == login && response.recordset[0].password == password) {
                res.send(true);
            }
            else {
                res.send(false);
            }
            yield sql.close();
        }
        catch (err) {
            console.log(err);
        }
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map