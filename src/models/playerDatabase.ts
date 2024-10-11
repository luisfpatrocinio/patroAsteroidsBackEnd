export interface Player {
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
}

export const playerDatabase: Player[] = [
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
        totalScore: 250,
        highestScore: 250,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    }
];