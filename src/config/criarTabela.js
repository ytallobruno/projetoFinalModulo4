import CardapioTable from '../Cardapio/CriaCardapio.js'


CardapioTable
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)