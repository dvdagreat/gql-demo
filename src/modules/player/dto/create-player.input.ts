import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PlayerRequest {
  @Field({ description: 'first name of the player' })
  first_name: string;

  @Field({ description: 'last name of the player' })
  last_name: string;

  @Field(() => Int, { description: 'team id of associated team' })
  team_id: number;
}
