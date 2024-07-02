import { mongoose, Schema } from "mongoose"

//schema
const authorModel = new Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    books: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  }
)
//model
export const Author = mongoose.model("Author", authorModel)
