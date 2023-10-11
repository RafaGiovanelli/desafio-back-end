import * as mongoose from 'mongoose';

export const PipedriveSchema = new mongoose.Schema
    (
        {
            name: String,
            code: String,
            unit: String,
            tax: Number,
            active_flag: Boolean,
            selectable: Boolean,
            visible_to: String,
            owner_id: String,
            prices:
                [
                    {
                        currency: String, price: Number
                    }
                ]
        }
    );