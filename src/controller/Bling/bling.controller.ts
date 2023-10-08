import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlingService } from './bling.service';
import { Bling } from './schemas/bling';

@Controller('bling')
export class BlingController 
{
    constructor(private blingService: BlingService){}

    @Get() 
    async getAll() : Promise<Bling[]>
    { 
        return this.blingService.getAll();
    }
    
    @Get(':id') 
    async getById(@Param('id') id: string) : Promise<Bling>
    { 
        return this.blingService.getById(id);
    }

    @Post()
    async create(@Body() bling: Bling) : Promise<Bling>
    {
        return this.blingService.create(bling);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() bling: Bling) : Promise<Bling>
    {
        return this.blingService.update(id, bling);
    }

    @Delete(':id')
    async delete(@Param('id') id: string)
    {
        this.blingService.delete(id);
    }
}
