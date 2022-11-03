import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { playerProviders } from './player.provider';
import { TeamModule } from '../team/team.module';
import { forwardRef } from '@nestjs/common/utils';
import { GqlHelperModule } from '../gql-helper/gql-helper.module';

@Module({
  imports: [
    forwardRef(() => TeamModule),
    forwardRef(() => GqlHelperModule),
  ],
  providers: [
    PlayerResolver, 
    PlayerService,
    ...playerProviders
  ],
  exports: [PlayerService]
})
export class PlayerModule {}
