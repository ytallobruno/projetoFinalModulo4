import FornecedorTable from "../criaFornecedor.js"
import fornecedorRouter from "../../routers/fornecedor/app.js"
import FornecedorModel from "../models/FornModel.js";

class FornecedorController {
    constructor ({ id_fornecedor, razao_social, nome_fantasia, endereco, tipo, id_item, tempo_entrega }){
        this.id_fornecedor = id_fornecedor;
        this.razao_social = razao_social;
        this.nome_fantasia = nome_fantasia;
        this.endereco = endereco;
        this.tipo = tipo;
        this.id_item = id_item;
        this.tempo_entrega = tempo_entrega
    }

    static listar (){
        return FornecedorTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return FornecedorTable.findByPk(req.params.id)

    }

    adicionar(){
        const fornecedor = new FornecedorModel(this)
        return FornecedorTable.create(fornecedor)
    }

    static deletar (idDeletado){
        FornecedorTable.destroy(
            {
                where: {
                    id: idDeletado
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
                id: req.params.id
            }
        }
        )
    }
}

export default FornecedorController