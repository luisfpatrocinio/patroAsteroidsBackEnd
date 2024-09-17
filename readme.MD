# PatroAsteroids Backend

Este repositório contém o back-end do jogo **PatroAsteroids**, responsável por armazenar e fornecer informações dos jogadores, como estatísticas de jogo, pontuações, e dados relacionados. A comunicação é feita via API com o front-end da página **PatroAsteroids Page**.

## Funcionalidades

- Gerenciamento de dados dos jogadores, como nome, maior pontuação, nível de patente, moedas coletadas, entre outros.
- Rotas GET e POST para acessar e atualizar informações dos jogadores.
- Integração com o front-end para exibir as estatísticas em tempo real.
- Atualização automática de pontuações enviadas pelos jogadores.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no lado do servidor.
- **Express.js**: Framework utilizado para criar a API e gerenciar rotas.
- **CORS**: Configuração de políticas de segurança para permitir comunicação com o front-end.
- **TypeScript**: Utilizado para garantir maior segurança no desenvolvimento com tipagem estática.

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/PatroAsteroidsBackend.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

4. O servidor estará rodando na porta `3000`. Certifique-se de que o front-end esteja configurado para se comunicar com essa porta.

## Estrutura do Repositório

- `server.ts`: Arquivo principal do servidor, onde as rotas e lógica do back-end estão definidas.
- `playerDatabase.ts`: Banco de dados simples em memória para armazenar as informações dos jogadores.
- `package.json`: Arquivo de configuração do Node.js com as dependências do projeto.
  
## Rotas da API

- **GET /player/:name**: Retorna os dados de um jogador específico pelo nome.
- **POST /score**: Atualiza a pontuação e outros dados do jogador com base na requisição.

### Exemplo de Requisição GET:

```bash
GET /player/Ely
