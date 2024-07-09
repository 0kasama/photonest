const imageService = require("../services/imageService");

const findAll = async (req, res, next) => {
  try {
    const images = await imageService.findAll();

    res.status(200).json({ message: "Get all images", images });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
    };
    const image = await imageService.findOne(params);

    res.status(200).json({ message: "Get image by id", image });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const data = {
      userId: req.loggedUser.id,
      title: req.body.title,
      description: req.body.description,
    };

    const image = await imageService.create(req.file, data);

    res.status(201).json({ message: "Successfully created", image });
  } catch (err) {
    console.error(err);
    next(err);
  }
};


const update = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      data: req.body,
    };
    const image = await imageService.update(params);

    res.status(201).json({ message: "Update success", image });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const params = {
      userId: req.loggedUser.id,
      id: req.params.id,
    };

    const image = await imageService.destroy(params);

    res.status(200).json({ message: "Deleted", image });
  } catch (err) {
    console.error(err)
    next(err);
  }
};

module.exports = { findAll, findOne, create, update, destroy };
