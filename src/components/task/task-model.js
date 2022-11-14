import mongoose from "mongoose";

const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        required: true
    },
    taskDate: {
        type: Date,
        required: true
    }
})

const Task = mongoose.model('task',taskSchema)


const findAll = async () => {
    const tasks = await Task.find()
    console.log('FIND ALL ==============', tasks)
}

const findById = async () => {
    const task = await Task.findById('63721a7b043bdbd1e536f8c2')
    console.log('FIND BY ID =========',task);
}

const updateById = async () => {

    const task = await Task.findByIdAndUpdate('63721a7b043bdbd1e536f8c2', {name: "Premier élément"})
    console.log('UPADATE BY ID ===========')

findAll()
}

const deleteById = async () => {
    const task = await Task.findByIdAndDelete('63721a7b043bdbd1e536f8c2')
}

findAll()
findById()
//updateById()
//deleteById()

export default Task