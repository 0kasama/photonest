'use strict';
const crypto = require("crypto");

const generateSlug = () => {
  return crypto.randomBytes(20).toString("hex");
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "images",
      [
        {
          userId: 1,
          title: "Image 1",
          description: "Seeder",
          slug: generateSlug(),
          url: "http://localhost:5000/api/image/test.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "Image 2",
          description: "Seeder",
          slug: generateSlug(),
          url: "http://localhost:5000/api/image/test.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("images", null, {});
  },
};
