import CardapioTable from "../CriaCardapio.js"

class CardapioController {

    static listar() {
        return CardapioTable.findAll();
    }
    
    static listarUmItemPorId(req) {
        return CardapioTable.findByPk(req.params.id_item);
    }
    
    static adicionar(cardapio) {
        return CardapioTable.create(cardapio);
    }
    
    static deletar(idDeletado) {
        CardapioTable.destroy({
        where: {
            id_item: idDeletado,
        },
        });
    }
    
    static update(req) {
        CardapioTable.update(req.body, {
        where: {
            id_item: req.params.id_item,
        },
        });
    }
    }

export default CardapioController