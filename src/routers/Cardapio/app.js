import express from "express";
import CardapioModel from "../../Cardapio/models/CardapioModel.js";
import CardapioController from "../../Cardapio/controllers/CardapioController.js";

const cardapioRouter = express.Router()


cardapioRouter.post("/cardapio", async (req, res) => {
    try {       
        const dados = req.body
        const cardapio = new CardapioModel(dados)
        console.log(cardapio)
        await CardapioController.adicionar(cardapio)
        res.status(201).json({cardapio})       
    }
    catch (e) {
    res.status(400).json({ erro: e.message });
    }
});

cardapioRouter.get("/cardapio/:id_item", async (req, res) => {
    try {
        const cardapio = await CardapioController.listarUmItemPorId(req);
        if (cardapio != null) {
            res.status(200).json({
                cardapio
            });
        } else {
            throw new Error(
                "Comanda não encontrada. Verifique se o ID está correto e tente novamente."
            );
        }
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

cardapioRouter.get("/cardapio", async (req, res) => {
    try {
        const cardapio = await CardapioController.listar();
        console.log(req.params);
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

cardapioRouter.delete("/cardapio/:id_item", async (req, res) => {
    try {
        const deletado = await CardapioController.deletar(req.params.id_item);
        const cardapio = await CardapioController.listar();
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

cardapioRouter.patch("/cardapio/:id_item", async (req, res) => {
    try {
        const modificado = await CardapioController.update(req);
        const cardapio = await CardapioController.listarUmItemPorId(req);
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});


export default cardapioRouter