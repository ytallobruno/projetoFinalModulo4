import FornecedorTable from "../Fornecedor/criaFornecedor.js";
import ClientesTable from '../Clientes/CriarCliente.js'
import CardapioTable from '../Cardapio/CriaCardapio.js'
import EstoqueTable from '../Estoque/CriaEstoque.js'
import PedidoTable from '../Pedidos/criaPedido.js'



FornecedorTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)


ClientesTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)

    CardapioTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)

    EstoqueTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)

    PedidoTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)
