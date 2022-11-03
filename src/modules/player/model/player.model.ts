import { Optional } from 'sequelize';
import { Table, Column, Model, BelongsTo, PrimaryKey, AutoIncrement, AllowNull, ForeignKey } from 'sequelize-typescript';
import Team from '../../team/model/team.model';

interface PlayerAttributes {
    id: number;
    first_name: string;
    last_name: string;
    team_id: number;
}
  
interface PlayerCreationAttributes extends Optional<PlayerAttributes, 'id'> {}

@Table({tableName: 'player', timestamps: false})
export default class Player extends Model<PlayerAttributes, PlayerCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  first_name: string;

  @AllowNull(false)
  @Column
  last_name: string;

  @ForeignKey(() => Team)
  @AllowNull(false)
  @Column
  team_id: number;

  @BelongsTo(() => Team, 'team_id')
  team: Team
}