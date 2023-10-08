import * as mongoose from 'mongoose';

export const BlingSchema = new mongoose.Schema
(
    {
        description: String,
        completed: Boolean
    }
);