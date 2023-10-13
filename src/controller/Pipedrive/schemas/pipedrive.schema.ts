import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PipedriveDocument = Pipedrive & Document;

@Schema()
export class Pipedrive {

    @Prop()
    name: string;

    @Prop()
    code: string;

    @Prop()
    unit: string;

    @Prop()
    tax: number;

    @Prop()
    active_flag: boolean;

    @Prop()
    selectable: boolean;
    
    @Prop()
    visible_to: string;

    @Prop()
    owner_id: string;

    @Prop()
    prices:[
        {
            currency: string, 
            price: Array<any>
        }
    ];
// () Função
// [] Array
// {} Objeto
}

export const PipedriveSchema = SchemaFactory.createForClass(Pipedrive);