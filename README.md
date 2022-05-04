# Projeto Final Módulo 4 - API Restaurante

<div id="inicio" align=center>
  <a href="#contribuir">Como contribuir</a>&nbsp;&nbsp;
  <a href="#grupo">Autores</a> 
</div>

## Descrição da aplicação:
A aplicação é um ambiente back-end que utilizamos para simular uma rotina de um restaurante. Para isso foi utilizado o banco de dados relacional SQLite, o padrão do tipo REST e como organização conceitos iniciais de Repository, porém com noções de MVC.

<br>

## Ferramentas utilizadas:
Utilizamos as seguintes ferramentas em nossa API:
- Linguagem: Javascript com NodeJS
- Framework: Express
- Banco de dados relacional: SQLite
- ORM: Sequelize
- Deploy: Heroku

<br>

## Dependencias necessárias:
```js
  "dependencies": {
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sequelize": "^6.19.0",
    "sqlite3": "^5.0.5",
    "url": "^0.11.0"
  }
```
Você também pode encontrar as dependências <a href = 'https://github.com/ytallobruno/ProjetoFinalModulo4/blob/main/package.json'>neste arquivo</a> do qual o trecho acima foi extraído.

Para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v", e assim irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/ytallobruno/ProjetoFinalModulo4.git && cd apiRestNodeJsRestaurante && npm install
```

<br>

## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

<br>

### Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS. É necessário a instalação de versão igual ou superior para a perfeita execução.

<br>

## Rotas da api:

Em nossa API temos 5 (cinco) rotas, sendo elas <b> ` "/clientes", "/cardapio", "/estoque", "/pedido" e "/fornecedores"`</b>, onde podemos fazer alguns métodos interessantes. Vamos conferir abaixo utilizando a rota <b>CLIENTES</b>:
<br>

### Ver todos os clientes:

Utilizar o método HTTP Get no caminho <b>`"url da api" + /api/clientes`</b>
<br>
<br>

### Buscar clientes por id:

Utilizar o método HTTP Get no caminho <b>`"url da api" + /api/clientes/id`</b>
<br>
<br>

### Adicionar clientes:
Utilizar o método HTTP Post no caminho <b>`"url da api" + /api/clientes`</b> com todos os dados necessários para o seu banco de dados. Abaixo segue um json de exemplo para o corpo da requisição:

```json
{
      "id_comanda": 1,
      "id_cliente": 1,
      "nome_cliente": "Ytallo",
      "email_cliente": "ytallo@bruno.com",
    }
```
<br>


### Modificar um cliente já existente:
Utilizar o método HTTP Patch no caminho <b>`"url da api" + /api/clientes/id`</b>, utilizando o <b>ID da Comanda</b> como referência, passando os valores que deseja alterar especificando seus devidos campos mas sempre respeitando a sintaxe json novamente passada abaixo no body da requisição.

```json
{
      "id_comanda": 1,
      "id_cliente": 1,
      "nome_cliente": "Ytallo Bruno",
      "email_cliente": "ytallo_bruno@dominio.com",
    }
```

<br>

### Deletar um Cliente:
Utilizar o método HTTP Delete no caminho <b>`"url da api" + /api/clientes/id`</b>.
<br>
<br>


> Obs.: Caso você apague o arquivo do banco de dados sem querer por algum motivo desconhecido, preencha o arquivo `criarTabela` de acordo com a entidade escolhida utilizando o comando no formato abaixo para criar outro, mas atenção, esse novo banco virar vazio, apenas com a linha 1 contendo o exemplo dos tipos de dados aceitos nele.
>
> ```js
> import ClientesTable from "../Clientes/CriarCliente.js";
>
> ClientesTable
>    .sync()
>    .then( () => {
>        console.log('tabela criada com sucesso')
>    })
>    .catch(console.error)
>```
>
> E logo em seguida, rode o comando abaixo para criar a tabela no banco de dados:
>
>```node
>node ./src/config/criarTabela.js
>```

<br>
<hr>

<h2 id="contribuir">Como contribuir 📫</h2>

Para contribuir com nosso projeto, siga estas etapas:
  >- Bifurque este repositório.
  >- Crie um branch: `git checkout -b <nome_branch>`.
  >- Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
  >- Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
  >- Crie a solicitação de pull.
*Consulte a documentação do GitHub em* [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<h2 id="grupo">Autores 🥇</h2>

  - [Christopher Mamed](https://www.linkedin.com/in/christopher-mamed-407485139/)
  - [Emilly Cristina](https://www.linkedin.com/in/emilly-finco/)
  - [Felipe Oliveira](https://www.linkedin.com/in/carvalho-felipe28/)
  - [Suelen Reche](https://www.linkedin.com/in/suelen-reche-55a43a79/)
  - [Ytallo Bruno](https://linkedin.com/in/ytallobruno)

<hr>

<div align="center">
  &#11165;&nbsp;<a href="#inicio"><strong>Voltar ao topo</strong></a>&nbsp;&#11165;
</div>
