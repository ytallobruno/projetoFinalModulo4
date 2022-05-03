import PedidoTable from '../Pedidos/CriaPedido.js'





PedidoTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)


   