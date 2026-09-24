import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/user.js';
import Todo from './models/todo.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

app.post('/register', async (req, res) => {
    try {
        console.log('Request received');
        console.log('Request body:', req.body);

        const { name, email, password } = req.body;
        const fakeuser = await User.findOne({ email });
        if (fakeuser) {
            return res.json({
                message: 'fake'
            });
        }

        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        console.log('User before saving:', newUser);

        const savedUser = await newUser.save();

        console.log('User saved successfully:', savedUser);

        res.status(200).json({
            message: 'User registered successfully',
            user: savedUser
        });

    } catch (err) {
        console.log('ERROR:', err);

        res.status(500).json({
            message: 'Error registering user',
            error: err.message
        });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newuser = await User.findOne({ email });
        if (!newuser) {
            return res.json({ message: 'fake' });
        }

        if (newuser.password !== password) {
            return res.json({ message: 'fake' });
        }

        return res.json({
            message: newuser.name,
            status: 'success'
        });
    }
    catch (err) {
        console.log('ERROR:', err);

        res.status(500).json({
            message: 'Error registering user',
            error: err.message
        });
    }
});

app.post('/addTodo', async (req, res) => {
    const { todoid, todo, date, status, userName } = req.body;
    const Task = new Todo({
        todoid: todoid,
        todo: todo,
        date: date,
        status: status,
        userName: userName
    });
    const temp = await Todo.findOne({ todoid: todoid, userName: userName });
    if (temp) {
        await Todo.updateOne({ todoid: todoid, userName: userName }, { todo: todo, date: date, status: status });
        return res.json({
            message: 'updated todo successfully'
        });
    }
    else {
        await Task.save();
    }
    res.json({
        message: 'added todo successfully'
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
app.get('/gettodo/:userName', async (req, res) => {
    try {
        const user = req.params.userName.trim();
        const alltodos = await Todo.find({ userName: user });
        res.json({
            message: alltodos
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching todos" });
    }
});
app.get('/todo/:todoid/:userName', async (req, res) => {
    try {
        const { todoid, userName } = req.params;
        const todo = await Todo.findOne({ todoid: todoid, userName: userName });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching todo" });
    }
});
app.delete('/deleteTodo/:todoid/:userName', async (req, res) => {
    try {
        const { todoid, userName } = req.params;
        await Todo.deleteOne({ todoid: todoid, userName: userName });
        res.json({
            message: "Todo deleted successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting todo" });
    }
});
app.put('/updatestatus/:todoid/:userName', async (req, res) => {
    try {
        const { todoid, userName } = req.params;
        const temp = await Todo.findOne({ todoid: todoid, userName: userName });
        if (temp.status == 'done') {
            await Todo.updateOne({ todoid: todoid, userName: userName }, { status: "notdone" });
            return res.json({
                message: "Todo updated successfully"
            });
        }
        else {
            await Todo.updateOne({ todoid: todoid, userName: userName }, { status: "done" });
            return res.json({
                message: "Todo updated successfully"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error updating todo" });
    }
});