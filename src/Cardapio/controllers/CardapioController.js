import CardapioTable from "../CriaCardapio.js"

class CardapioController {

    static listar (){
        return CardapioTable.findAll()
    }
    static adicionar(cardapio){
        return CardapioTable.create(cardapio)
    }
}

export default CardapioController