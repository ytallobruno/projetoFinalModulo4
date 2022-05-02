import FornecedorTable from "../criaFornecedor.js"
import FornecedorModel from "../models/FornModel.js";

class FornecedorController {
    constructor ({ id_fornecedor, razao_social, nome_fantasia, endereco, telefone, tipo, tipo_secundario, tempo_entrega }){
        this.id_fornecedor = id_fornecedor;
        this.razao_social = razao_social;
        this.nome_fantasia = nome_fantasia;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
        this.tipo_secundario = tipo_secundario;
        this.tempo_entrega = tempo_entrega
    }

    static listar (){
        return FornecedorTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return FornecedorTable.findByPk(req.params.id_fornecedor)

    }

    async adicionar(){
        const fornecedor = new FornecedorModel(this)
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