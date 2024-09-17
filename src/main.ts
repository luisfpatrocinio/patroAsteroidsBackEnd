import express, { Request, Response } from 'express';
import cors from 'cors';

// Criar instancia do Express
const app = express();

// Configuração do Express
app.use(express.json());

// Configuração do CORS
app.use(cors());

// Definir rota
app.get('/', (req: Request, res: Response) => {
    console.log(`Hello World! :D`);

    // Enviar resposta em json
    res.json({ 
        type: "connected",
        content: "Hello World! :D" 
    });
});

const playerDatabase: { 
    name: string; 
    rankLevel: number; 
    expPoints: number; 
    bio: string; 
    enemiesDestroyed: number; 
    totalScore: number; 
    highestScore: number; 
    coinsCollected: number; 
    avatarIndex: number; 
    colorIndex: number; 
}[] = [
    {
        name: "Ely",
        rankLevel: 1,
        expPoints: 0,
        bio: "Professor de Programação",
        enemiesDestroyed: 0,
        totalScore: 0,
        highestScore: 0,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    },
    {
        name: "Patrocinio",
        rankLevel: 1,
        expPoints: 0,
        bio: "Mestre do Universo",
        enemiesDestroyed: 0,
        totalScore: 0,
        highestScore: 0,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    }
];

function getPlayerData(playerName: string) {
    return playerDatabase.find(player => player.name === playerName);
}


// Obter dados do player:
app.get('/player/:name', (req: Request, res: Response) => {
    // Exibir no console o nome do jogador solicitado.
    console.log(`Player data requested:`);

    // Consultar banco de dados para obter dados do jogador.
    var _data = getPlayerData(req.params.name);

    // Caso o jogador não exista, adicionar:
    if (!_data) {
        _data = {
            name: req.params.name,
            rankLevel: 1,
            expPoints: 0,
            bio: "Novo Jogador",
            enemiesDestroyed: 0,
            totalScore: 0,
            highestScore: 0,
            coinsCollected: 0,
            avatarIndex: 1,
            colorIndex: 1
        };
        playerDatabase.push(_data);
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
})

// Atualizar banco de dados com dados do jogador.
app.post('/score', (req: Request, res: Response) => {
    console.log("Request received.");
    // Exibir no console o conteúdo recebido.
    console.log(req.body);
    
    // Atualizar dados do jogador.
    var _player = getPlayerData(req.body.name);
    if (_player) {
        _player.totalScore += req.body.score;
        _player.highestScore = Math.max(_player.highestScore, req.body.score);
        _player.enemiesDestroyed += req.body.enemiesDestroyed;
    }

    res.json(
        {
            type: "scoreReceived",
            content: "Score received."
        }
    );

    console.log(getPlayerData(req.body.name));
});

// Obter dados de todos os jogadores
app.get('/players', (req: Request, res: Response) => {
    console.log(`All players data requested`);

    // Criar um json etiquetando o tipo de informação enviada
    var _response = {
        type: "allPlayersData",
        content: playerDatabase
    };

    // Enviar resposta em json
    res.json(_response);
});