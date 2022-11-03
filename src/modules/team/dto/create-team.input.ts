import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class TeamRequest {
  @Field({ description: 'name of the team' })
  name: string;
}
