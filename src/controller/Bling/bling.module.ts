import { Module } from '@nestjs/common';
import { BlingController } from './bling.controller';
import { BlingService } from './bling.service';
import { BlingSchema } from './schemas/bling.schema';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


@Module(
        {
                imports: 
                [
                        MongooseModule.forFeature([{name: 'Task', schema: BlingSchema}])
                ],
                controllers: [BlingController],
                providers: [BlingService]
        })
export class BlingModule { }
