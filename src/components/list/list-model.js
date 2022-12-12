import mongoose from 'mongoose'

const { Schema } = mongoose

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tasks: [{
    type : Schema.Types.ObjectId,
    ref: 'task',
    select : false
  }]
}, {
  timestamps: true
})

const List = mongoose.model('List', listSchema)

export default List