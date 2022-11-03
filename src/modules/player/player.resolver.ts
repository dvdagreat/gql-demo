import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Info } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { PlayerService } from './player.service';
import Player from './entities/player.entity';
import { PlayerRequest } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';
import { GqlHelperService } from '../gql-helper/gql-helper.service';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(
    private readonly playerService: PlayerService,
    private readonly gqlHelperService: GqlHelperService
    
  ) {}

  @Query(() => [Player], { name: 'players' })
  findAll(@Info() info: GraphQLResolveInfo) {
    const joinModels = this.playerService.mapStringToModels(this.gqlHelperService.getFields(info));
    return this.playerService.findAll(joinModels);
  }

  @Query(() => Player, { name: 'player' })
  findOne(@Info() info: GraphQLResolveInfo, @Args('id', { type: () => Int }) id: number) {
    const joinModels = this.playerService.mapStringToModels(this.gqlHelperService.getFields(info));
    return this.playerService.findOne(id, joinModels);
  }

  @Mutation(() => Player, { name: 'createPlayer'})
  async createPlayer(@Args('player') playerRequest: PlayerRequest) {
    return await this.playerService.create(playerRequest);
  }

  @Mutation(() => Player)
  updatePlayer(@Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput) {
    return this.playerService.update(updatePlayerInput.id, updatePlayerInput);
  }

  @Mutation(() => Player)
  removePlayer(@Args('id', { type: () => Int }) id: number) {
    return this.playerService.remove(id);
  }
}
