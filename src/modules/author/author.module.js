import { Router } from "express"
import {
  deleteAuthorInfo,
  getAllAuthor,
  getAuthorById,
  saveAuthorInfo,
  updateAuthorInfo,
} from "./author.controller.js"

export const authorRouter = Router()

authorRouter.get("/", getAllAuthor)
authorRouter.get("/:id", getAuthorById)
authorRouter.put("/:id", updateAuthorInfo)
authorRouter.delete("/:id", deleteAuthorInfo)
authorRouter.post("/", saveAuthorInfo)
