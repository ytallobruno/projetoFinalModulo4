



class PedidoModel {
    constructor({ id,id_cliente,id_item, numero_mesa,quantidade, item, preco_total,}){
        this.id = id;
        this.id_cliente = id_cliente;
        this.id_item= id_item;
        this.numero_mesa = numero_mesa;
        this.quantidade = quantidade;
        this.item = item;
        this.preco_total = preco_total;
    }
  }
    export default PedidoModel