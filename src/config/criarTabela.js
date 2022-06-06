import ClienteTable from "../Clientes/CriarCliente.js";

ClienteTable 
    .sync()
    .then( () => {
        console.log('tabela criada com sucesso')
    })
    .catch(console.error)
