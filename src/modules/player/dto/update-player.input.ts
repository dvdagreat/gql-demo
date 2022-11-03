import { PlayerRequest } from './create-player.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlayerInput extends PartialType(PlayerRequest) {
  @Field(() => Int)
  id: number;
}
