import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './controller/tasks/tasks.controller';
import { TaskService } from './controller/tasks/task.service';
import { TasksModule } from './controller/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlingModule } from './controller/Bling/bling.module';
import { PipedriveModule } from './controller/Pipedrive/pipedrive.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), TasksModule, BlingModule, PipedriveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
