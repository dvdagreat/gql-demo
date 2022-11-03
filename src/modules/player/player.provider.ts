import Player from "./model/player.model";

export const playerProviders = [
    {
        provide: 'PLAYER_REPOSITORY',
        useValue: Player
    }
];