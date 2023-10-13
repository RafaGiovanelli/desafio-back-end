import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';
import { CreateProduct } from './schemas/create-products';

@Controller('pipedrive')
export class PipedriveController 
{
    constructor(private pipedriveService: PipedriveService){}

    @Get('products/')
    getAllProducts()
    {
        return this.pipedriveService.getAllProducts();
    }

    @Get('products/:id') 
    getProductById(@Param('id') id: string)// : Promise<PipedriveDocument>
    { 
        return this.pipedriveService. getProductById(id);
    }
    
    @Post("products/create")
    createProducts(@Body() pipedrive: CreateProduct) //@Query() query: any) Query string para complementar a rota.
    {
        return this.pipedriveService.createProducts(pipedrive);
    }

    @Put("products/:id")
    updateProducts(@Body() body: any, @Param("id") id: string)
    {
        return this.pipedriveService.updateProducts(body, id);
    }

    @Delete('products/:id')
    deleteProducts(@Param('id') id: string)
    {
        return this.pipedriveService.deleteProducts(id);
    }
    
}
