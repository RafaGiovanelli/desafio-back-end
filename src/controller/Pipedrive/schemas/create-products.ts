export class CreateProduct
{
    name: string;
    code: string;
    unit: string;
    tax: number;
    active_flag: boolean;
    selectable: boolean;
    visible_to: string;
    owner_id: string;
    prices:[
        {
            currency: string, 
            price: Array<any>
        }
    ];
}