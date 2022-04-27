import EstoqueTable from "../CriaEstoque.js"
import EstoqueModel from "../models/EstoqueModel.js";
import Validador from "../../utils/Estoque/Validador.js";

class EstoqueController {

    constructor({ id, nome_produto, quantidade, id_fornecedor, tipo, validade }){
        this.id = id;
        this.nome_produto = nome_produto;
        this.quantidade = quantidade;
        this.id_fornecedor = id_fornecedor;
        this.tipo = tipo;
        this.validade = Validador.checaValidade(validade)
    }

    static listar (){
        return EstoqueTable.findAll()
    }
    adicionar(){
        const estoque = new EstoqueModel(this)
        return EstoqueTable.create(estoque)
    }
}

export default EstoqueController