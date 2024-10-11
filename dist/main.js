"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerDatabase_1 = require("./playerDatabase");
// Criar instancia do Express
const app = express();
// Configuração do Express
app.use(express.json());
// Configuração do CORS
app.use(cors());
// Rota inicial de teste.
app.get('/', (req, res) => {
    console.log(`Hello World! :D`);
    // Enviar resposta em json
    res.json({
        type: "connected",
        content: "Hello World! :D"
    });
});
// Obter dados do player:
app.get('/player/:name', (req, res) => {
    // Exibir no console o nome do jogador solicitado.
    console.log(`Player data requested:`);
    // Consultar banco de dados para obter dados do jogador.
    var _data = (0, playerDatabase_1.getPlayerData)(req.params.name);
    // Caso o jogador não exista, adicionar:
    if (!_data) {
        _data = (0, playerDatabase_1.createNewPlayer)(req.params.name);
        (0, playerDatabase_1.addPlayerToDatabase)(_data);
    }
    // Criar um json etiquetando o tipo de informação enviada.
    var _response = {
        type: "playerData",
        content: _data
    };
    // Enviar resposta em json
    res.json(_response);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Atualizar banco de dados com dados do jogador.
app.post('/score', (req, res) => {
    console.log("Request received.");
    console.log(req.body);
    // Atualizar info do player.
    (0, playerDatabase_1.updatePlayerScore)(req.body.name, req.body.score);
    (0, playerDatabase_1.updatePlayerDefeatedEnemies)(req.body.name, req.body.enemiesDestroyed);
    res.json({
        type: "scoreReceived",
        content: "Score received."
    });
    console.log((0, playerDatabase_1.getPlayerData)(req.body.name));
});
// Obter dados de todos os jogadores
app.get('/players', (req, res) => {
    console.log(`All players data requested`);
    // Criar um json etiquetando o tipo de informação enviada
    var _response = {
        type: "allPlayersData",
        content: (0, playerDatabase_1.getPlayersDatabase)()
    };
    // Enviar resposta em json
    res.json(_response);
});
