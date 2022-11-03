import { TeamRequest } from './create-team.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeamInput extends PartialType(TeamRequest) {
  @Field(() => Int)
  id: number;
}
