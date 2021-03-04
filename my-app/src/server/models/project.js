import mongoose from 'mongoose'

const Schema = mongoose.Schema

let projectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    creator: String,
    type: String,
    status: String,
    progress: Number,
    beginDate: Date,
    finishDate: Date,
    added_at: Date,
    updated_at: Date,
    create_by: String
})

export let Project = mongoose.model("Project", projectSchema )