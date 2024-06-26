import Books, {IBooks} from "../../models/books";

export const addBook = async (book: IBooks): Promise<string | undefined> => {
    const newBook = new Books(book);
    try {
        await newBook.save();
        return newBook._id;
    } catch (err) {
        console.error('Error adding book:', err);
    }
}

export const getAllBooks = async (): Promise<IBooks[]> => {
    try {
        return await Books.find();
    } catch (err) {
        console.error('Error getting all books:', err);
        return [];
    }
}

export const getBookById = async (id: string): Promise<IBooks | null> => {
    try {
        return await Books.findById(id);
    } catch (err) {
        console.error('Error getting book by id:', err);
        return null;
    }
}

export const deleteBookById = async (id: string): Promise<void> => {
    try {
        await Books.findByIdAndDelete(id);
    } catch (err) {
        console.error('Error deleting book by id:', err);
    }
}

export const updateBookById = async (id: string, book: IBooks): Promise<void> => {
    try {
        await Books.findByIdAndUpdate(id, book);
    } catch (err) {
        console.error('Error updating book by id:', err);
    }
}
