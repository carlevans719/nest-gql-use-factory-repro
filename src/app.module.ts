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
    // Doesn't Work:
    {
      provide: 'FOO', // AppResolver not working here either
      useFactory(): AppResolver {
        console.log('FACTORY FUNCTION CALLED');
        return new AppResolver();
      },
    },


    // Also Doesn't Work:
    // {
    //   provide: 'FOO', // AppResolver not working here either
    //   useValue: new AppResolver(),
    // },


    // Works:
    // AppResolver,
  ],
})
export class AppModule {}
