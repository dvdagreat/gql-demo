import { Optional } from 'sequelize';
import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, HasMany } from 'sequelize-typescript';
import Player from '../../player/model/player.model';

interface TeamAttributes {
    id: number;
    name: string
}
  
interface TeamCreationAttributes extends Optional<TeamAttributes, 'id'> {}

@Table({tableName: 'team', timestamps: false})
export default class Team extends Model<TeamAttributes, TeamCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => Player, 'team_id')
  players: Player[];
}