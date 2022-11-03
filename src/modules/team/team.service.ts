import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import Player from '../player/model/player.model';
import { PlayerService } from '../player/player.service';
import { TeamRequest } from './dto/create-team.input';
import { UpdateTeamInput } from './dto/update-team.input';
import Team from './model/team.model';

@Injectable()
export class TeamService {
  constructor(
    @Inject('TEAM_REPOSITORY') private teamRepo: typeof Team,
    @Inject(forwardRef(() => PlayerService)) private playerService: PlayerService
  ) {}

  async create(teamRequest: TeamRequest) {
    return (await this.teamRepo.create(teamRequest)).save();
  }

  findAll(joinModels: any[]) {
    return this.teamRepo.findAll({include: joinModels});
  }

  findOne(id: number, joinModels: any[]) {
    return this.teamRepo.findOne({include: joinModels, where: { id } });
  }

  update(id: number, updateTeamInput: UpdateTeamInput) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }

  async getPlayers(teamId: number) {
    return await this.playerService.getTeamPlayers(teamId);
  }

  async findOneWithPlayers(id: number) {
    return await this.teamRepo.findOne({include: [Player], where: { id }});
  }

  mapStringToModels(fieldStrings: string[]): Model[] {
    let model = [];

    if(fieldStrings.includes('player') || fieldStrings.includes('players')) {
      model.push(Player);
    }

    return model;
  }
}
