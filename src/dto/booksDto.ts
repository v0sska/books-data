import { Status } from "../enums/status";

export interface BooksDto {
    _id: string;
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