import EstoqueTable from '../Estoque/CriaEstoque.js'


EstoqueTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)