const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://estatedbms:estatedbms@cluster0.ohlpm.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('Connected successfully'))