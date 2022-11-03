import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { teamProviders } from './team.provider';
import { PlayerModule } from '../player/player.module';
import { forwardRef } from '@nestjs/common/utils';
import { GqlHelperModule } from '../gql-helper/gql-helper.module';

@Module({
  imports: [
    forwardRef(() => PlayerModule),
    forwardRef(() => GqlHelperModule)
  ],
  providers: [
    TeamResolver, 
    TeamService,
    ...teamProviders
  ],
  exports: [TeamService]
})
export class TeamModule {}
