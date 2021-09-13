const mongoose = require("mongoose");
const Lugar = require("../models/Lugar");

const validaID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id Inválido" });
    return;
  }

  try {
    const lugar = await Lugar.findById(id);
    if(!lugar){
        return res.status(404).send({msgMiddleware: "Lugar não localizado."})
    }
    res.lugar = lugar
  } catch (err) {
    return res.status(500).send({error: err})
  }

  next();
};

module.exports = { validaID };
