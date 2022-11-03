import { ObjectType, Field, Int } from '@nestjs/graphql';
import Team from '../../team/entities/team.entity';

@ObjectType()
export default class Player {
  @Field(() => Int, { description: 'player id', nullable: true })
  id: number;

  @Field({ description: 'player first name' })
  first_name: string;

  @Field({ description: 'player last name' })
  last_name: string;

  @Field({ description: 'team associated with the player' })
  team_id: number;

  @Field(() => Team)
  team: Team
}
