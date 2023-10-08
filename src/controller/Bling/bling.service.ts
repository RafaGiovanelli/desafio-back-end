import { Injectable } from '@nestjs/common';
import { Bling } from './schemas/bling';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlingService 
{
constructor(@InjectModel('Bling') private readonly blingModel: Model<Bling>){}

    async getAll()
    {
        return await this.blingModel.find().exec();
    }

    async getById(id: string)
    {
        return await this.blingModel.findById(id).exec();
    }

    async create(bling: Bling)
    {
        const createTask = new this.blingModel(bling);
        return await createTask.save();
    }

    async update(id: string, bling: Bling)
    {
        await this.blingModel.updateOne({_id: id}, bling).exec();
        return this.getById(id);
    }

    async delete(id: string)
    {
        return await this.blingModel.deleteOne({_id: id}).exec();
    }
}
