import { Sequelize } from 'sequelize-typescript';
import Player from '../player/model/player.model';
import Team from '../team/model/team.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'my_store',
      });
      sequelize.addModels([Player, Team]);
      await sequelize.sync();
      return sequelize;
    },
  },
];