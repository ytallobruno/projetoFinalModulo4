class FornecedorModel {
    constructor({ id_fornecedor, razao_social, nome_fantasia, endereco, telefone, tipo, tipo_secundario, tempo_entrega }){
        this.id_fornecedor = id_fornecedor;
        this.razao_social = razao_social;
        this.nome_fantasia = nome_fantasia;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
        this.tipo_secundario = tipo_secundario;
        this.tempo_entrega = tempo_entrega
    }
}

export default FornecedorModel

