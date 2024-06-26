import { BooksDto } from "../../dto/booksDto";
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { saveBook, listAllBooks, listBookById, removeBookById, changeBookById } from '../../services/books';

export const createBook = async (req: Request, res: Response) => {

    try {
        const bookId = await saveBook(req.body as BooksDto);
        res.status(httpStatus.CREATED).send(bookId);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

export const listBooks = async (req: Request, res: Response) => {
    try {
        const books = await listAllBooks();
        res.status(httpStatus.OK).send(books);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await listBookById(req.params.id);
        if (!book) {
            res.status(httpStatus.NOT_FOUND).send();
            return;
        }
        res.status(httpStatus.OK).send(book);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        await removeBookById(req.params.id);
        res.status(httpStatus.NO_CONTENT).send("book is deleted!");
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

export const updateBookById = async (req: Request, res: Response) => {
    try {
        await changeBookById(req.params.id, req.body as BooksDto);
        res.status(httpStatus.OK).send("Books is updated!");
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}