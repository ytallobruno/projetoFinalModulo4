import express from "express";
import database from "./src/config/db.js";
import estoqueRouter from "./src/routers/Estoque/app.js";
import cardapioRouter from "./src/routers/Cardapio/app.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})

app.post('/api/estoque', estoqueRouter)
app.post('/api/cardapio', cardapioRouter)