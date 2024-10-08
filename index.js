// Import packages
const express = require('express');
const session = require('express-session');
const MySQLStore = require('connect-mysql2')(session);
const path = require('path');
require('dotenv').config();


const db = require('./config/db');
const authRoutes = require('./routes/auth');

// Initialize server
const app = express()

// setup middleware(something sitting between two interfaces)
app.use(express.json());

// setup session
app.use(
    session({
        key: 'user_sid',
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        //store: new MySQLStore({}, db)
    })
);

//routes
app.get('/', (req, res) => {
    res.sendFile()
})
app.use('/auth', authRoutes)

//start server
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


