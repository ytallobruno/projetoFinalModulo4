import ClientesTable from "../CriarCliente.js";

class ClientesController {

  static listar() {
    return ClientesTable.findAll();
  }

  static listarUmItemPorId(req) {
    return ClientesTable.findByPk(req.params.id_comanda);
  }

  static adicionar(cliente) {
    return ClientesTable.create(cliente);
  }

  static deletar(idDeletado) {
    ClientesTable.destroy({
      where: {
        id_comanda: idDeletado,
      },
    });
  }

  static update(req) {
    ClientesTable.update(req.body, {
      where: {
        id_comanda: req.params.id_comanda,
      },
    });
  }
}

export default ClientesController;
