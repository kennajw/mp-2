export interface Card {
    id: string;
    name: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    images: Images;
}

export interface Images {
    small: string;
}