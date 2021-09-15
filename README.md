# API Paraisos do Brasil - NodeJs

<img src="https://trechosemilhas.com.br/wp-content/uploads/2020/04/TurismoBrasil.jpg" />

> API de estudo dos conceitos basicos de back-end, utilizando JavaScript e o banco de dados MongoDB. Esta api possui um CRUD completo de lugares para turismo no Brasil.

Para uso do projeto, faça o dowload do arquivo em formato zip ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Como executar o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: 

mongodb://localhost:27017/db_marvel.

Pronto para executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Testando a API

Você pode utiliza a ferramenta:

* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL para buscar todos os lugares: http://localhost:3000/lugares
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/lugares/613ffc6e63a215c04f09952d
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/filterByName?nome=Chapada dos Veadeiros


## Para testar os end-points
>Estes são alguns dos lugares que essa Api possui no banco de dados, você pode utilizalos para testar os end-points.

* Chapada dos Veadeiros
* Cataratas do Iguaçu
* Cachoeira da Fumaça

## Fazendo POST e PUT

>Essa é a estrutura JSON para que você possa fazer um POST ou PUT:

```json
{
    "nome": "Chapada dos Veadeiros",
      "estado": "Goiás",
      "descricao": "Sem dúvidas, em algum momento da vida você já se deparou com fotos da Chapada dos Veadeiros e - talvez - até sem saber de qual lugar se tratava, se encantou. Sim, esse é o poder que o atrativo turístico, localizado em Goiás, tem; afinal, com tanta beleza e uma energia única, é impossível não ficar apaixonado. Além do visual incrível, a Chapada também oferece uma pegada esotérica, o que é um prato cheio para quem gosta de viagens nesse estilo, tendo em vista que, entre suas belezas naturais, encontram-se dezenas de cachoeiras, muito verde e paredões rochosos.",
      "imagem": "https://www.guiadasemana.com.br/contentFiles/image/2018/07/FEA/galeria/54644_w840h525_1531341826shutterstock-786362134.jpg",
}
```

>>Agradeço por todos os testes realizados!