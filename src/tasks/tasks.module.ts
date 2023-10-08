import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './shared/task.service/task.service';
import { TaskSchema } from './schemas/task.schema';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


@Module(
        {
                imports: 
                [
                        MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])
                ],
                controllers: [TasksController],
                providers: [TaskService]
        })
export class TasksModule { }
