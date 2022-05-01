import ClientesTable from '../Clientes/CriarCliente.js'


ClientesTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)