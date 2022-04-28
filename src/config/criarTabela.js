import ClientesTable from '../Cardapio/Cria.js'


ClientesTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)