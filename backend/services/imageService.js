const { images, users } = require('../models');
const crypto = require('crypto');

const generateSlug = async () => {
  let slug;
  let isUnique = false;

  while (!isUnique) {
    slug = crypto.randomBytes(20).toString('hex');
    const existingImage = await images.findOne({ where: { slug } });
    if (!existingImage) {
      isUnique = true;
    }
  }
  return slug;
};

const findAll = async () => {
  const image = await images.findAll({
    order: [['createdAt', 'DESC']],
  });
  return image;
};

const findOne = async (params) => {
  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
  const filterOption = {
    where: {},
  };

  if (isNumeric(params.id) === false) {
    filterOption.where.slug = params.id;
  } else {
    filterOption.where.id = +params.id;
  }

  filterOption.include = [
    {
      model: users,
      attributes: ['name'],
    },
  ];

  const image = await images.findOne(filterOption);

  return image;
};

const create = async (file, params) => {
  if (!file) {
    throw {
      name: 'MissingFile',
    };
  }

  const url = `${process.env.BASE_URL}/api/image/${file.filename}`;

  const slug = await generateSlug();

  const image = await images.create({
    userId: params.userId,
    title: params.title,
    description: params.description,
    url: url,
    slug: slug,
  });

  return image;
};

const update = async (params) => {
  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
  const filterOption = {};
  if (isNumeric(params.id)) {
    filterOption.where = { id: +params.id };
  } else {
    filterOption.where = { slug: params.id };
  }

  const image = await images.findOne(filterOption);

  if (!image) {
    throw {
      name: 'ErrorNotFound',
    };
  }

  await image.update(params.data);

  return image;
};

const destroy = async (params) => {
  const { id, userId } = params;

  const image = await images.findOne({
    where: {
      id: +id,
      userId: userId,
    },
  });

  if (!image) {
    throw {
      name: 'ErrorNotFound',
    };
  }

  await image.destroy();

  return image;
};

module.exports = { findAll, findOne, create, update, destroy };
