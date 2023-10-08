import { Document } from "mongoose";

export class Bling extends Document
{
    description: string;
    completed: boolean;
}
