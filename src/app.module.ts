import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      introspection: true,
      autoSchemaFile: true,
    }),
  ],
  providers: [
    {
      provide: 'FOO', // AppResolver not working here either
      useFactory(): AppResolver {
        return new AppResolver();
      }
    }
  ],
})
export class AppModule {}
