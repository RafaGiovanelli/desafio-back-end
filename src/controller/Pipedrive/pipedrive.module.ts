import { Module } from '@nestjs/common';
import { PipedriveController } from './pipedrive.controller';
import { PipedriveService } from './pipedrive.service';
import { PipedriveSchema } from './schemas/pipedrive.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module(
        {
                imports: 
                [
                        MongooseModule.forFeature([{name: 'Pipedrive', schema: PipedriveSchema}])
                ],
                controllers: [PipedriveController],
                providers: [PipedriveService]
        })
export class PipedriveModule { }
