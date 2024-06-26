import { Schema, model} from "mongoose";
import { Status } from "../enums/status";

export interface IBooks{
    _id?: string;
    title: string;
    pageCount?: number;
    publishedDate: {
        date: Date;
    };
    thumbnailUrl?: string;
    shortDescription?: string;
    longDescription: string;
    status: Status;
    authors: string[];
}

const booksSchema = new Schema<IBooks>({
    title: {type: String, required: true},
    pageCount: Number,
    publishedDate: {
        date: { type: Date, required: true }
    },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: {type: String, required: true},
    status: { 
        type: String, 
        required: true,
        enum: Object.values(Status)},
    authors: {type: [String], required: true}
});

const Books = model<IBooks>('Books', booksSchema);

export default Books;