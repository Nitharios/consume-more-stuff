'use strict';

 var Sequelize = require('sequelize');
 var env       = process.env.NODE_ENV || 'development';
 var config    = require('../config/config.json')[env];
 var sequelize = new Sequelize(config.database, config.username, config.password, config);
 const faker = require('faker');
 const db = require('../models');
 const Condition = db.Condition;
 const Category = db.Category;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Condition.findAll({ distinct: 'condition' })
      .then(conditions => {
        const items = generateFakeItems(50, conditions);
        return queryInterface.bulkInsert('items', items, {});
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};

function generateFakeItems(count, conditions) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const newItem = {
      name: faker.commerce.product(),
      description: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
      imageUrl: faker.image.imageUrl(),
      manufacturer: faker.commerce.department(),
      model: faker.commerce.productName(),
      price: faker.commerce.price(),
      dimensions: faker.lorem.word(),
      notes: faker.lorem.words(),
      createdAt: faker.date.recent(90),
      updatedAt: new Date(),
      condition_id: Math.ceil(Math.random() * conditions.length)
    };
    items.push(newItem);
  }
  return items;
}

