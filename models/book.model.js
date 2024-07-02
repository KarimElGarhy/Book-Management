import { mongoose, Schema } from "mongoose"
//schema
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

//model
export const Book = mongoose.model("Book", bookSchema)
