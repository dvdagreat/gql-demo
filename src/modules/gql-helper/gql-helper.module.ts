import { Module } from '@nestjs/common';
import { GqlHelperService } from './gql-helper.service';

@Module({
    providers: [GqlHelperService],
    exports: [GqlHelperService],
})
export class GqlHelperModule {}
