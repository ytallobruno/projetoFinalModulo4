

class EstoqueModel {
    constructor({ id, nome_produto, quantidade, id_fornecedor, tipo, validade }){
        this.id = id;
        this.nome_produto = nome_produto;
        this.quantidade = quantidade;
        this.id_fornecedor = id_fornecedor;
        this.tipo = tipo;
        this.validade = validade
    }
}

export default EstoqueModel

