exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([{
          recipeId: 1,
          ingredientsId: 1,
          amount: 2
        },
        {
          recipeId: 1,
          ingredientsId: 2,
          amount: 6
        },
        {
          recipeId: 2,
          ingredientsId: 3,
          amount: 2
        },
        {
          recipeId: 2,
          ingredientsId: 4,
          amount: 2
        }
      ]);
    });
};