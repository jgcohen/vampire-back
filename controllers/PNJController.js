import PNJModel from "../models/PNJModels.js";

export const getPNJS = async (req, res) => {
  const pnjs = await PNJModel.find({});
  res.send(pnjs);
};

export const getPNJ = async (req, res) => {
  const pnj = await PNJModel.find({ _id: req.params.id });
  if (!pnj) {
    res.status(404).send("No pnj found");
  }
  res.send(pnj);
};

export const addPNJ = async (req, res) => {
  const pnj = new PNJModel(req.body);
  await pnj.save();
  res.send(pnj);
};

export const updatePNJ = async (req, res) => {
  const pnj = await PNJModel.findByIdAndUpdate(req.params.id, req.body);
  if (!pnj) {
    res.status(404).send("No pnj found");
  }
  await pnj.save();
  res.send(pnj);
};

export const deletePNJ = async (req, res) => {
  const pnj = await PNJModel.findByIdAndDelete(req.params.id);
  if (!pnj) {
    res.status(404).send("No pnj found");
  }
  res.status(200).send();
};
