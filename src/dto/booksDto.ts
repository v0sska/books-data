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
    status: string;
    authors: string[];
}