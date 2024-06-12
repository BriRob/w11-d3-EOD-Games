'use strict';
const { User } = require("../models")
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
   await User.bulkCreate([
    {
      username: "Raven",
      password: "psychicChic",
      age: 38
    },
    {
      username: "Chelsea",
      password: "notapassword",
      age: 37
    },
    {
      username: "Eddie",
      password: "whatisapassword",
      age: 39
    }
   ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */

   await queryInterface.bulkDelete('Users', null, {});

  }
};
