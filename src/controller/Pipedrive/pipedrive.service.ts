import { Injectable } from '@nestjs/common';
import { PipedriveDocument } from './schemas/pipedrive.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import axios from 'axios';
import { stringify } from 'qs';
import { ObjectId } from 'mongodb';

@Injectable()
export class PipedriveService 
{
    host: string = process.env.PIPEDRIVE_HOST;
    token: string = process.env.PIPEDRIVE_TOKEN;

    constructor(@InjectModel('Pipedrive') private readonly pipedriveModel: Model<PipedriveDocument>){}

    async getAllProducts()
    {
        return this.pipedriveModel.find().exec();
    }

    async getProductById (id: string)
    {
        return this.pipedriveModel.findById(id).exec();
    }

    async createProducts (body: any)
    {
        const query = {api_token: String(this.token)}
        const queryString = stringify(query);
        const res = await axios.post(`${this.host}/products?${queryString}`, body); 
        res.data.data['id'] = new mongoose.Types.ObjectId();
        await this.pipedriveModel.create(res.data.data);
        return res.data;
    }

    //Ajustar o update, pois nao esta buscando o id correto.
    async updateProducts(body: any, id: string)
    {
        return this.pipedriveModel.updateOne({_id : id}, body).exec();
    }

    async deleteProducts(id: string)
    {
        return this.pipedriveModel.deleteOne({_id : id}).exec();
    }
}
