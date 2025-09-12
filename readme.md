# Champions League API

## Descrição

Este é um exemplo de uma API REST com dados de jogadores que jogaram pela Champions League. Permite até o momento listar jogadores, listar clubes e fazer as operações GET, POST, PUT e DELETE com uma lista de jogadores. 

Foi criada a partir de um projeto original do bootcamp MeuTudo Mobile Developer da DIO, e o projeto original pode ser cechado [aqui](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager).

## Funcionalidades


(PLACEHOLDER)
- **Listar os jogadores e clubes:** Os jogadores tem estatísticas como as de um jogo de simulação de futebol (Fifa/Winning Eleven/Elifoot), com o intuito de demonstrar o uso de uma classe contendo outra em seus atributos. 
- **Adicionar / Remover / Alterar Jogadores :** Os usuários podem realizar adições, remoções e alterações dos jogadores com as rotas adequadas.

### Funcionalidades adicionadas por mim
- **Gravar alterações dos jogadores em arquivo:** O banco de dados dos jogadores está sendo retirado e gravado a partir de um arquivo JSON. As alterações ficam gravadas nesse arquivo mesmo que o server seja finalizado.

### Listar os clubes participantes
- **Endpoint:** `GET /clubs`
- **Descrição:** Retorna uma lista de clubes participantes da Champions League.
- **Exemplo de resposta:**

```json
{
 "clubs": [
    {
      "id": 1,
      "name": "Bayern Munich",
      "city": "Munich",
      "country": "Germany"
    },
    {
      "id": 2,
      "name": "Napoli",
      "city": "Naples",
      "country": "Italy"
    },
 ]
}
```


### Listar jogadores
- **Endpoint:** `GET /players`
- **Descrição:** Retorna uma lista de jogadores a partir do disponível no banco de dados 'player_database.json'. 
- **Exemplo de requisição:** `GET /players`


### Exibir jogador por ID
- **Endpoint:** `GET /players/:id`
- **Descrição:** Retorna o jogador com o id requisitado a partir do disponível no banco de dados 'player_database.json'. 
- **Exemplo de requisição:** `GET /players/5`


### Criar jogadores
- **Endpoint:** `PATCH /players`
- **Descrição:** Cria um novo jogador. É necessário passar as características como parâmetro.  
- **Exemplo de requisição:** `POST /players`


### Alterar jogadores
- **Endpoint:** `PATCH /players/id`
- **Descrição:** Altera os dados do jogador com a id indicada. É necessário passar as características como parâmetro.  
- **Exemplo de requisição:** `PATCH /players/id`


### Remover jogadores
- **Endpoint:** `DELETE /players/id`
- **Descrição:** Retorna uma lista de jogadores a partir do disponível no banco de dados 'player_database.json'. 
- **Exemplo de requisição:** `DELETE /players/id`



## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.
- **[cors]():**
Pacote que disponibiliza middleware para o Connect/Express utilizado para habilitar o CORS com opções.
- **[Express]():**
Framework minimalista para Node.js

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos

### Observações

Foram realizadas algumas mudanças em como o banco de dados era simulado, sendo que no projeto original a simulação foi feita com uma variável dentro do controle e aqui eu trabalho com arquivos JSON dentro da pasta Data (os arquivos de nome Database). Nesse projeto, fiz com que seja possível gravar dados nesses arquivos, mantendo assim as alterações realizadas entre uma sessão e outra.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).