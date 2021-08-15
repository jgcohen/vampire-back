import CharacterModel from "../models/characterModel.js";

export const getCharacters = async (req, res) => {
  const characters = await CharacterModel.find({});
  res.send(characters);
};

export const getCharacter = async (req, res) => {
  const character = await CharacterModel.find({ _id: req.params.id });
  if (!character) {
    res.status(404).send("No character found");
  }
  res.send(character);
};

export const addCharacter = async (req, res) => {
  const character = new CharacterModel(req.body);
  await character.save();
  res.send(character);
};

export const updateCharacter = async (req, res) => {
  const character = await CharacterModel.findByIdAndUpdate(req.params.id, req.body);
  if (!character) {
    res.status(404).send("No character found");
  }
  await character.save();
  res.send(character);
};

export const deleteCharacter = async (req, res) => {
  const character = await CharacterModel.findByIdAndDelete(req.params.id);
  if (!character) {
    res.status(404).send("No character found");
  }
  res.status(200).send();
};
