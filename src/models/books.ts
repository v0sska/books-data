import { Schema, model } from "mongoose";

export interface IBooks{
    title: string;
    pageCount?: number;
    publishedDate: {
        date: Date;
    };
    thumbnailUrl?: string;
    shortDescription?: string;
    longDescription: string;
    status: string;
    authors: string[];
}

const booksShema = new Schema<IBooks>({
    title: {type: String, required: true},
    pageCount: Number,
    publishedDate: {
        date: { type: Date, required: true }
    },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: {type: String, required: true},
    status: {type: String, required: true},
    authors: {type: [String], required: true}
});

const Books = model<IBooks>('Books', booksShema);

export default Books;