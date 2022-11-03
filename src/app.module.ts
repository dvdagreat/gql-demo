import { DatabaseModule } from './modules/database/database.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TeamModule } from './modules/team/team.module';
import { PlayerModule } from './modules/player/player.module';
import { GqlHelperModule } from './modules/gql-helper/gql-helper.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true
    }),
    TeamModule,
    PlayerModule,
    GqlHelperModule,
    AuthModule,
    UsersModule,
    ProductsModule,
    LoggerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
