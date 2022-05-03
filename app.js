import express from "express";
import fornecedorRouter from "./src/routers/fornecedor/app.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})



app.use ("/api/fornecedor", fornecedorRouter)