import express from "express";
import estoqueRouter from "./src/routers/Estoque/app.js";
import ClientesRouter from "./src/routers/Clientes/app.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 4200;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})


app.use("/api/", estoqueRouter)
app.use("/api/clientes", ClientesRouter)

