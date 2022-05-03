import EstoqueTable from "../CriaEstoque.js"

class EstoqueController {
    constructor({ id, nome_produto, quantidade, id_fornecedor, tipo, validade }){
        this.id = id;
        this.nome_produto = nome_produto;
        this.quantidade = quantidade;
        this.id_fornecedor = id_fornecedor;
        this.tipo = tipo;
        this.validade = validade
    }

    static listar (){
        return EstoqueTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return EstoqueTable.findByPk(req.params.id)

    }

    adicionar(){
        const estoque = new EstoqueModel(this)
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