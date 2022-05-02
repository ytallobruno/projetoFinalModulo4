import CardapioTable from "../CriaCardapio.js"

class CardapioController {

    static listar() {
        return CardapioTable.findAll();
    }
    
    static listarUmItemPorId(req) {
        return CardapioTable.findByPk(req.params.id);
    }
    
    static adicionar(cardapio) {
        return CardapioTable.create(cardapio);
    }
    
    static deletar(idDeletado) {
        CardapioTable.destroy({
        where: {
            id_comanda: idDeletado,
        },
        });
    }
    
    static update(req) {
        CardapioTable.update(req.body, {
        where: {
            id_comanda: req.params.id,
        },
        });
    }
    }

export default CardapioController