import express from "express";
import ClientesController from "../../Clientes/controllers/ClientesController.js";
import ClientesModel from "../../Clientes/models/ClientesModel.js";
import Validador from "../../utils/Clientes/Validador.js";

const ClientesRouter = express.Router();

ClientesRouter.post("/", async (req, res) => {
  try {
    if (Validador.checaEmail(req.body.email_cliente)) {
      const dados = Object.values(req.body)
      const cliente = new ClientesModel(...dados)
      await ClientesController.adicionar(cliente)
      res.status(201).json({cliente})
    } else {
      throw new Error("E-mail inválido! Insira e-mail um no seguinte formato: usuario@dominio.com");
    }
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

ClientesRouter.get("/:id", async (req, res) => {
  try {
    const cliente = await ClientesController.listarUmItemPorId(req);
    if (cliente != null) {
      res.status(200).json({ cliente });
    } else {
      throw new Error(
        "Comanda não encontrada. Verifique se o ID está correto e tente novamente."
      );
    }
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

ClientesRouter.get("/", async (req, res) => {
  try {
    const clientes = await ClientesController.listar();
    console.log(req.params);
    res.status(200).json({ clientes });
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

ClientesRouter.delete("/:id", async (req, res) => {
  try {
    const deletado = await ClientesController.deletar(req.params.id);
    const cliente = await ClientesController.listar();
    res.status(200).json({ cliente });
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

ClientesRouter.patch("/:id", async (req, res) => {
  try {
    const modificado = await ClientesController.update(req);
    const cliente = await ClientesController.listar();
    res.status(200).json({ cliente });
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

export default ClientesRouter;
