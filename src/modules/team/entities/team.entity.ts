import { ObjectType, Field, Int } from '@nestjs/graphql';
import Player from '../../player/entities/player.entity';

@ObjectType()
export default class Team {
  @Field(() => Int, { description: 'team id', nullable: true })
  id?: number;

  @Field({ description: 'team name' })
  name: string;

  @Field(() => [Player], { description: 'players associated with the team' })
  players: Player[];
}
