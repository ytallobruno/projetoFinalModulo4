import FornecedorTable from '../Fornecedor/criaFornecedor.js'


FornecedorTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)