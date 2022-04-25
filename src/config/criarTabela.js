import Estoque from '../models/Estoque.js'


Estoque
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)