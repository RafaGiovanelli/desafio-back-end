import { Document } from "mongoose";

export class Pipedrive extends Document {
    name: String;
    code: String;
    unit: String;
    tax: Number;
    active_flag: true;
    selectable: true;
    visible_to: String;
    owner_id: String;
    prices:
        [
            {
                currency: String, price: number
            }
        ]
};
