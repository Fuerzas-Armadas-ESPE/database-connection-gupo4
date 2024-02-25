import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogSchema } from './modules/request-log/request-log.shema';
import { RequestLogService } from './modules/request-log/request-log.service';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@172.17.208.1:27017/mydatabase'), 
    PostsModule,
  ],
  
  providers: [AppService],
  controllers:[AppController]
  
})
export class AppModule {}
