import EstoqueTable from "../CriaEstoque.js"
import EstoqueModel from "../models/EstoqueModel.js";

class EstoqueController {

    static listar (){
        return EstoqueTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return EstoqueTable.findByPk(req.params.id)

    }

    static adicionar(estoque){
        return EstoqueTable.create(estoque)
    }

    static deletar (idDeletado){
        EstoqueTable.destroy(
            {
                where: {
                    id: idDeletado
                }
            }
        )
    }

    static update(req) {
        EstoqueTable.update(
            req.body
        ,
        {
            where: {
                id: req.params.id
            }
        }
        )
    }
}

export default EstoqueController