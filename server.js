// require("./modules/http")
require("./modules/path")
// require("./modules/fs")

// const { Person } = require('./class/Person');
const dotenv = require('dotenv')
const express = require('express');
const UserModel = require('./src/models/User')

dotenv.config();

const SERVER = express();
SERVER.use(express.json());
SERVER.use(express.urlencoded({ extended: false }));

SERVER.set('view engine', 'ejs');
SERVER.set('views', 'src/views');
// SERVER.use(express.static('public'));
// SERVER.use(express.static('files'));
const port = 8080;

const connectToDatabase = require('./src/database/connect')
connectToDatabase();



SERVER.use((req,res, next)=> {
    console.log('middleware');
    next()
});

SERVER.get('/users', async (req, res) => {

    try {
        const users = await UserModel.find({}).exec();

        res.contentType('text/html');
        res.status(200).render('index', {users});   
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

SERVER.get('/users/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).exec();
        
        res.contentType('application/json');
        res.status(200).json(user);    
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

SERVER.post('/users', async (req, res) => {

    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user);    
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

SERVER.patch('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(user);   
    } catch (error) {
        res.status(500).send(error.message);
    } 
})

SERVER.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findByIdAndRemove(id);
        res.status(200).json(user);   
    } catch (error) {
        res.status(500).send(error.message);
    }
})

SERVER.listen(port, () => {
    console.log(`Server running at ${port}`)
})