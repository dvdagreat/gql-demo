import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Info } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql/type';
import { TeamService } from './team.service';
import Team from './entities/team.entity';
import { TeamRequest } from './dto/create-team.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { GqlHelperService } from '../gql-helper/gql-helper.service';

@Resolver(() => Team)
export class TeamResolver {
  constructor(
    private readonly teamService: TeamService,
    private readonly gqlHelperService: GqlHelperService
  ) {}

  @Mutation(() => Team, { name: 'createTeam' })
  async createTeam(@Args('team') teamRequest: TeamRequest) {
    return await this.teamService.create(teamRequest);
  }

  @Query(() => [Team], { name: 'teams' })
  async findAll(@Info() info: GraphQLResolveInfo) {
    const joinModels = this.teamService.mapStringToModels(this.gqlHelperService.getFields(info));
    return await this.teamService.findAll(joinModels);
  }

  @Query(() => Team, { name: 'team' })
  findOne(@Info() info: GraphQLResolveInfo, @Args('id', { type: () => Int }) id: number) {
    const includeFields = this.teamService.mapStringToModels(this.gqlHelperService.getFields(info));
    return this.teamService.findOne(id, includeFields);
  }

  @Mutation(() => Team)
  updateTeam(@Args('updateTeamInput') updateTeamInput: UpdateTeamInput) {
    return this.teamService.update(updateTeamInput.id, updateTeamInput);
  }

  @Mutation(() => Team)
  removeTeam(@Args('id', { type: () => Int }) id: number) {
    return this.teamService.remove(id);
  }
}
