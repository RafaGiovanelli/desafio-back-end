import * as mongoose from 'mongoose';

export const PipedriveSchema = new mongoose.Schema
(
    {
        description: String,
        completed: Boolean
    }
);