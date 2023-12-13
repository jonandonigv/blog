import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { UsersController } from './users/users.controller';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController, PostsController, UsersController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
