import { Router } from "express"
import {
  deleteBookInfo,
  getBookInfo,
  getBookInfoById,
  saveBookInfo,
  updateBookInfo,
} from "./book.controller.js"

const bookRouter = Router()

bookRouter.get("/", getBookInfo)
bookRouter.post("/", saveBookInfo)
bookRouter.get("/:id", getBookInfoById)
bookRouter.put("/:id", updateBookInfo)
bookRouter.delete("/:id", deleteBookInfo)

export default bookRouter
