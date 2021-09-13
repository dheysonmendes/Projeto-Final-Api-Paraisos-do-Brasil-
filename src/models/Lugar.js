const mongoose = require('mongoose');

const lugarSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Lugar", lugarSchema)