const Lugar = require("../models/Lugar");

const getAll = async (req, res) => {
  try {
    const lugares = await Lugar.find();
    if (lugares.length === 0)
      return res.status(404).send({ message: "There are no saved places!" });
    return res.send({ lugares });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const lugar = await Lugar.findById(id);
    if (!lugar) {
      res.status(404).json({ message: "Place not found" });
      return;
    }
    return res.send({ lugar });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, estado, descricao, imagem } = req.body;

  if (!nome || !estado || !descricao || !imagem) {
    res.status(400).send({
      message: "You did not enter all the data for registration!",
    });
    return;
  }

  const novoLugar = await new Lugar({
    nome,
    estado,
    descricao,
    imagem,
  });

  try {
    await novoLugar.save();
    return res
      .status(201)
      .send({ message: "Place saved successfully", novoLugar });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, estado, descricao, imagem } = req.body;

  if (!nome || !estado || !descricao || !imagem) {
    res.status(400).send({
      message: "You did not enter all the data for registration!",
    });
    return;
  }

  res.lugar.nome = nome;
  res.lugar.estado = estado;
  res.lugar.descricao = descricao;
  res.lugar.imagem = imagem;

  try {
    await res.lugar.save();
    res.send({ message: "Successfully changed place!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.lugar.remove();
    return res.send({ message: "Place deleted successfully!" });
  } catch (err) {
    return res.status(500).send({ erro: err.message });
  }
};

const filterByName = async (req, res) => {
  const nome = req.query.nome;
  if (!nome) {
    res.status(400).send({ erro: "Parameter not informed!" });
    return;
  }
  try {
    const lugares = await Lugar.find({ nome: { $regex: `${nome}`, $options: "i" } });
    return res.send({ lugares });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, estado, descricao } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !estado ? (estado = "") : (estado = estado);
  !descricao ? (descricao = "") : (descricao = descricao);

  try {
    const lugares = await Lugar.find({
      nome: { $regex: `${nome}`, $options: "i" },
      estado: { $regex: `${estado}`, $options: "i" },
      descricao: { $regex: `${descricao}`, $options: "i" },
    });

    if (lugares.length === 0)
      return res.status(404).send({ erro: "Place not found!" });

    return res.send({ lugares });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterAll,
};
