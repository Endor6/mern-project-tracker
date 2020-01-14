// Import Modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Import files
require('dotenv').config();

// Define Global Variables
const app = express();
const port = process.env.PORT || 5000;

// Configuration
app.use(cors());
app.use(express.json());

const localUri = process.env.ATLAS_URI;
const herokuUri = process.env.MONGODB_URI;
mongoose.connect(herokuUri || localUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');

app.use('/projects', projectsRouter);
app.use('/users', usersRouter);

// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});

