<<<<<<< HEAD
import PedidoTable from '../Pedidos/CriaPedido.js'


PedidoTable
=======
import ClientesTable from '../Clientes/CriarCliente.js'


ClientesTable
>>>>>>> 835381e18dd1193db2746ec2c83882f08fef1735
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)


   