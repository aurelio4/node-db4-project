exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([{
          name: 'Pound(s) of Ground Beef'
        },
        {
          name: 'Slice(s) of American Cheese'
        },
        {
          name: 'Pound(s) of Penne Pasta'
        },
        {
          name: 'Quart(s) of Tomato Sauce'
        }
      ]);
    });
};