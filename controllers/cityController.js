import CityModel from "../models/cityModel.js";

export const getCities = async (req, res) => {
  const cities = await CityModel.find({});
  res.send(cities); 
};

export const getCity = async (req, res) => {
  const city = await CityModel.find({ _id: req.params.id });
  if (!city) {
    res.status(404).send("No city found");
  }
  res.send(city);
};

export const addCity = async (req, res) => {
  const city = new CityModel(req.body);
  await city.save();
  res.send(city);
};

export const updateCity = async (req, res) => {
  const city = await CityModel.findByIdAndUpdate(req.params.id, req.body);
  if (!city) {
    res.status(404).send("No city found");
  }
  await city.save();
  res.send(city);
};

export const deleteCity = async (req, res) => {
  const city = await CityModel.findByIdAndDelete(req.params.id);
  if (!city) {
    res.status(404).send("No city found");
  }
  res.status(200).send();
};
