import { 
    addBook,
    getAllBooks,
    getBookById,
    deleteBookById,
    updateBookById
 } from "../../repositories/books";

 import { IBooks } from "../../models/books";
 import { BooksDto } from "../../dto/booksDto";


    export const saveBook = async (bookToSave: BooksDto): Promise<string | undefined> => {
        if(!checkRequirmentFields(bookToSave)) {
            throw new Error('Missing required fields');
        }
        const bookModelSave = mapBookDtoToBook(bookToSave);
        await addBook(bookModelSave);
        return bookModelSave._id;
    };

    export const listAllBooks = async (): Promise<BooksDto[]> => {
        const books = await getAllBooks();
        return books.map(book => mapBookToBookDto(book));
    }

    export const listBookById = async (id: string): Promise<BooksDto | null> => {
        const book = await getBookById(id);
        if (!book) {
            return null;
        }
        return mapBookToBookDto(book);
    }

    export const removeBookById = async (id: string): Promise<void> => {
        await deleteBookById(id);
    }

    export const changeBookById = async (id: string, bookToUpdate: BooksDto): Promise<void> => {
        if(!checkRequirmentFields(bookToUpdate)) {
            throw new Error('Missing required fields');
        }
        const bookModelToUpdate = mapBookDtoToBook(bookToUpdate);
        await updateBookById(id, bookModelToUpdate);
    }

 const mapBookDtoToBook = (bookDto: BooksDto): IBooks => {
        return {
            title: bookDto.title,
            pageCount: bookDto.pageCount,
            publishedDate: {
                date: bookDto.publishedDate.date
            },
            thumbnailUrl: bookDto.thumbnailUrl,
            shortDescription: bookDto.shortDescription,
            longDescription: bookDto.longDescription,
            status: bookDto.status,
            authors: bookDto.authors
        };
 };

 const mapBookToBookDto = (book: IBooks): BooksDto => {
    return {
        _id: book._id || '',
        title: book.title,
        pageCount: book.pageCount,
        publishedDate: {
            date: book.publishedDate.date
        },
        thumbnailUrl: book.thumbnailUrl,
        shortDescription: book.shortDescription,
        longDescription: book.longDescription,
        status: book.status,
        authors: book.authors
    };
 };

 const checkRequirmentFields = (book: BooksDto): boolean => {
    return book.title !== '' && book.publishedDate.date !== null && book.longDescription !== '' && book.status !== '' && book.authors.length > 0;
 }