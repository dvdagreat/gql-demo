import { Injectable, Inject } from '@nestjs/common';
import Team from '../team/model/team.model';
import { TeamService } from '../team/team.service';
import { PlayerRequest } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';
import Player from './model/player.model';
import { forwardRef } from '@nestjs/common/utils';
import {Model} from 'sequelize-typescript';

@Injectable()
export class PlayerService {

  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepo: typeof Player,
    @Inject(forwardRef(() => TeamService)) private teamService: TeamService,
  ) {}

  async create(playerRequest: PlayerRequest) {
    return (await this.playerRepo.create(playerRequest)).save();
  }

  async findAll(joinModels: any[]): Promise<Player[]> {
    return await this.playerRepo.findAll({ include: joinModels });
  }

  async findOne(id: number, joinModels: any[]): Promise<Player> {
    return await this.playerRepo.findOne({ include: joinModels, where: { id } });
  }

  async findWithTeam(id: number) {
    return this.playerRepo.findOne({ include: [Team], where: { id } });
  }

  update(id: number, updatePlayerInput: UpdatePlayerInput) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }

  // async getTeam(playerId: number): Promise<Team> {
  //   return await this.teamService.findOne(playerId);
  // }

  async getTeamPlayers(teamId: number): Promise<Player[]> {
    return await this.playerRepo.findAll({where: { team_id: teamId}});
  }

  mapStringToModels(fieldStrings: string[]): Model[] {
    let model = [];

    if(fieldStrings.includes('team') || fieldStrings.includes('teams')) {
      model.push(Team);
    }

    return model;
  }
}
