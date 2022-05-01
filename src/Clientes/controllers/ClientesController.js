import ClientesTable from "../CriarCliente.js";
import ClientesModel from "../models/ClientesModel.js";

class ClientesController {
  constructor({ id_comanda, id_pedido, nome_cliente, email_cliente }) {
    this.id_comanda = id_comanda;
    this.id_pedido = id_pedido;
    this.nome_cliente = nome_cliente;
    this.email_cliente = email_cliente;
  }

  static listar() {
    return ClientesTable.findAll();
  }

  static listarUmItemPorId(req) {
    return ClientesTable.findByPk(req.params.id);
  }

  adicionar() {
    const cliente = new ClientesModel(this);
    return ClientesTable.create(cliente);
  }

  static deletar(idDeletado) {
    ClientesTable.destroy({
      where: {
        id: idDeletado,
      },
    });
  }

  static update(req) {
    ClientesTable.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  }
}

export default ClientesController;
