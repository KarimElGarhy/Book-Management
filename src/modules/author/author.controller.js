import { Author } from "../../../models/author.model.js"

const getAllAuthor = async (req, res) => {
  try {
    const authors = await Author.find()
    res
      .status(201)
      .json({ message: "Find Authors", Data: authors, success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}
const saveAuthorInfo = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res
      .status(201)
      .json({ message: "Successfully Saved", Data: author, success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id)
    if (!author)
      return res
        .status(404)
        .json({ message: "Author not found", success: false })
    res
      .status(200)
      .json({ message: "Find Author", Data: author, success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}

const updateAuthorInfo = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!author)
      return res
        .status(404)
        .json({ message: "Author not found", success: false })
    res
      .status(200)
      .json({ message: "Update Author", Data: author, success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}

const deleteAuthorInfo = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id)
    if (!author)
      return res
        .status(404)
        .json({ message: "Author not found", success: false })
    res.status(200).json({ message: "Delete Author", success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export {
  getAllAuthor,
  saveAuthorInfo,
  getAuthorById,
  updateAuthorInfo,
  deleteAuthorInfo,
}
