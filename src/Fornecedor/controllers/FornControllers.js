import FornecedorTable from "../criaFornecedor.js"
import FornecedorModel from "../models/FornModel.js";

class FornecedorController {
      static listar (){
        return FornecedorTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return FornecedorTable.findByPk(req.params.id_fornecedor)

    }

    static async adicionar(fornecedor){
        return await FornecedorTable.create(fornecedor)
    }

    static deletar (idDeletado){
        FornecedorTable.destroy(
            {
                where: {
                    id_fornecedor: idDeletado
                }
            }
        )
    }

    static update (req) {
        FornecedorTable.update(
            req.body
        ,
        {
            where: {
                id_fornecedor: req.params.id_fornecedor
            }
        }
        )
    }
}

export default FornecedorController