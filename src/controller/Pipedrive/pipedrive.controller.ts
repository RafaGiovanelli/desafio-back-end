import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';
import { Pipedrive } from './schemas/pipedrive';

@Controller('pipedrive')
export class PipedriveController 
{
    constructor(private pipedriveService: PipedriveService){}

    // @Get() 
    // async getAll() : Promise<Pipedrive[]>
    // { 
    //     return this.pipedriveService.getAll();
    // }

    @Get()
    async getAllProducts() : Promise<Pipedrive>
    {
        return this.pipedriveService.getAllProducts();
    }
    
    // @Get(':id') 
    // async getById(@Param('id') id: string) : Promise<Pipedrive>
    // { 
    //     return this.pipedriveService.getById(id);
    // }

    @Get(':id') 
    async getProductById(@Param('id') id: string)// : Promise<Pipedrive>
    { 
        return this.pipedriveService. getProductById(id);
    }

    // @Post()
    // async create(@Body() pipedrive: Pipedrive) : Promise<Pipedrive>
    // {
    //     return this.pipedriveService.create(pipedrive);
    // }

    @Post("products/create")
    async addProduct(@Body() pipedrive: any) //@Query() query: any) Query string para complementar a rota.
    {
        return this.pipedriveService.addProduct(pipedrive);
    }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() pipedrive: Pipedrive) : Promise<Pipedrive>
    // {
    //     return this.pipedriveService.update(id, pipedrive);
    // }

    @Delete(':id')
    async deleteProducts(@Param('id') id: string)
    {
        return this.pipedriveService.deleteProducts(id);
    }

    // @Delete(':id')
    // async delete(@Param('id') id: string)
    // {
    //     return this.pipedriveService.delete(id);
    // }

    
}
