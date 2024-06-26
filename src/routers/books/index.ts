import { Router } from "express";
import { createBook,  getBookById, listBooks, deleteBook, updateBookById } from "../../controllers/books";

const bookRouter = Router();

bookRouter.post('', createBook);
bookRouter.get('', listBooks);
bookRouter.get('/:id', getBookById);
bookRouter.put('/:id', updateBookById);
bookRouter.delete('/:id', deleteBook);

export default bookRouter;