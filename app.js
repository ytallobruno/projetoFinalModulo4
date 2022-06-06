import express from "express";
import cors from "cors";
import fornecedorRouter from "./src/routers/fornecedor/app.js";
import database from "./src/config/db.js";
import pedidoRouter from "./src/routers/Pedidos/app.js";
import estoqueRouter from "./src/routers/Estoque/app.js";
import ClientesRouter from "./src/routers/Clientes/app.js";
import cardapioRouter from "./src/routers/Cardapio/app.js";

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})



app.use ("/api/fornecedor", fornecedorRouter)
app.use('/api/pedidos', pedidoRouter)
app.use("/api/estoque", estoqueRouter)
app.use("/api/clientes", ClientesRouter)
app.use("/api/cardapio", cardapioRouter)

