import EstoqueTable from "../CriaEstoque.js"

class EstoqueController {

    static listar (){
        return EstoqueTable.findAll()
    }
    static adicionar(estoque){
        return EstoqueTable.create(estoque)
    }
}

export default EstoqueController