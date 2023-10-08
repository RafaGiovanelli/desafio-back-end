import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './controller/tasks/tasks.controller';
import { TaskService } from './controller/tasks/task.service';
import { TasksModule } from './controller/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
