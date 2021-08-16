import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      introspection: true,
      autoSchemaFile: true, // Disabling this makes the useClass approach work
    }),
  ],
  providers: [
    // Works:
    // AppResolver,


    // Only works when `autoSchemaFile !== true`
    // {
    //   provide: 'FOO',
    //   useClass: AppResolver,
    // },


    // Doesn't work:
    {
      provide: 'FOO', // AppResolver not working here either
      useFactory(): AppResolver {
        console.log('FACTORY FUNCTION CALLED');
        return new AppResolver();
      },
    },


    // Also doesn't work:
    // {
    //   provide: 'FOO',
    //   useValue: new AppResolver(),
    // },
  ],
})
export class AppModule {}
