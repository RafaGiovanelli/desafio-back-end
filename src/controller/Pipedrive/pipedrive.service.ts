import { Injectable } from '@nestjs/common';
import { Pipedrive } from './schemas/pipedrive';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { stringify } from 'qs';
import { json } from 'stream/consumers';

@Injectable()
export class PipedriveService 
{
    host: string = process.env.PIPEDRIVE_HOST;
    token: string = process.env.PIPEDRIVE_TOKEN;

    constructor(@InjectModel('Pipedrive') private readonly pipedriveModel: Model<Pipedrive>){}

    async getAllProducts()
    {
        const query = {api_token: String(this.token)}
        const queryString = stringify(query)
        const res = await axios.get(`${this.host}/products?${queryString}`);
        

        return res.data;
    }

    async getProductById (id: string)
    {
        const query = {api_token: String(this.token)}
        const queryString = stringify(query)
        const res = await axios.get(`${this.host}/products?${queryString}`); 
        console.log(this.host, queryString)
        return res.data;
    }

    async addProduct (body: any)
    {
        const query = {api_token: String(this.token)}
        const queryString = stringify(query);
        const res = await axios.post(`${this.host}/products?${queryString}`, body); 
        console.log(JSON.stringify(res.data, null, 4));
        await this.pipedriveModel.create(res.data);
        
        return res.data;
    }

    async deleteProducts(id: string)
    {
        const query = {api_token: String(this.token)}
        const queryString = stringify(query)
        const res = await axios.delete(`${this.host}/products?${id},${queryString}`);
        return res.data;
    }

    
}
