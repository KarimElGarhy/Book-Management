import { Author } from "../../../models/author.model.js"
import { Book } from "../../../models/book.model.js"
import { PaginationParameters } from "mongoose-paginate-v2"

const getBookInfo = async (req, res) => {
  const books = await Book.find()
  return res
    .status(200)
    .json({ message: "Find Books", Data: books, success: true })
}
const saveBookInfo = async (req, res) => {
  try {
    const newBook = await Book.create(req.body)

    const author = await Author.findById(req.body.author)
    author.books.push(newBook._id)
    await author.save()
    return res
      .status(201)
      .json({ message: "Book saved", data: newBook, success: true })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error saving book", error: error.message })
  }
}
const getBookInfoById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ message: "Book not found" })
    return res
      .status(200)
      .json({ message: "Book found", data: book, success: true })
  } catch (error) {
    return res.status(500).json({ message: "Error finding book", error: error })
  }
}

const updateBookInfo = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updatedBook) return res.status(404).json({ message: "Book not found" })
    return res
      .status(200)
      .json({ message: "Book updated", data: updatedBook, success: true })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating book", error: error.message })
  }
}

const deleteBookInfo = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id)
    if (!deletedBook) return res.status(404).json({ message: "Book not found" })
    return res
      .status(200)
      .json({ message: "Book deleted", data: deletedBook, success: true })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting book", error: error.message })
  }
}
export {
  getBookInfo,
  saveBookInfo,
  getBookInfoById,
  updateBookInfo,
  deleteBookInfo,
}
