import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    todoid: String,
    todo: String,
    date: String,
    status: String,
    userName: String
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;