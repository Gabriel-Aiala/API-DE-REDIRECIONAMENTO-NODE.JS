import  express  from "express";
import db from "./config/dbconnect.js";
import links from "./models/Link.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

db.on('error',console.log.bind(console,'erro ao conectar ao banco'))
db.once("open",()=>{
    console.log('conexão feita com sucesso')
})
const app = express();
app.use(express.json())
routes(app);






export default app