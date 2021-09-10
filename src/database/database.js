const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopolagy: true
    })
}

modulo.exports = connectToDb;