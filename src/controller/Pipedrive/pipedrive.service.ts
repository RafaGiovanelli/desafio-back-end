import { Injectable } from '@nestjs/common';
import { Pipedrive } from './schemas/pipedrive';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import qs from 'qs';

@Injectable()
export class PipedriveService 
{
    host: string = process.env.PIPEDRIVE_HOST;
    token: string = process.env.PIPEDRIVE_TOKEN;

    constructor(@InjectModel('Pipedrive') private readonly pipedriveModel: Model<Pipedrive>){}

    async getAll()
    {
        return this.pipedriveModel.find().exec();
    }

    async getById(id: string)
    {
        return this.pipedriveModel.findById(id).exec();
    }

    async create(pipedrive: Pipedrive)
    {
        const createTask = new this.pipedriveModel(pipedrive);
        return createTask.save();
    }

    async update(id: string, pipedrive: Pipedrive)
    {
        this.pipedriveModel.updateOne({_id: id}, pipedrive).exec();
        return this.getById(id);
    }

    async delete(id: string)
    {
        return this.pipedriveModel.deleteOne({_id: id}).exec();
    }

    async addProduct (body: any)
    {
        console.log('process.env.PIPEDRIVE_TOKEN :>> ', process.env.PIPEDRIVE_TOKEN);
        const queryString = qs.stringify({api_token: this.token})
        return axios.post(`${this.host}/products?${queryString}`, body);
    }
}
