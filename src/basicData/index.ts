import { addBook } from "../repositories/books";
import { IBooks } from "../models/books";
import { Status } from "../enums/status";

const books: IBooks[] = [
    {
        title: "The Great Gatsby",
        pageCount: 218,
        publishedDate: {
            date: new Date("1925-04-10")
        },
        thumbnailUrl: "http://example.com/gatsby.jpg",
        shortDescription: "A novel by F. Scott Fitzgerald.",
        longDescription: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.",
        status: Status.PUBLISHED,
        authors: ["F. Scott Fitzgerald"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 281,
        publishedDate: {
            date: new Date("1960-07-11")
        },
        thumbnailUrl: "http://example.com/mockingbird.jpg",
        shortDescription: "A novel by Harper Lee.",
        longDescription: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature.",
        status: Status.PUBLISHED,
        authors: ["Harper Lee"]
    },
    {
        title: "1984",
        pageCount: 328,
        publishedDate: {
            date: new Date("1949-06-08")
        },
        thumbnailUrl: "http://example.com/1984.jpg",
        shortDescription: "A novel by George Orwell.",
        longDescription: "1984, dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        status: Status.PUBLISHED,
        authors: ["George Orwell"]
    }
];



export const fillBookData = async () => {
    for (const book of books) {
        await addBook(book);
    }
}