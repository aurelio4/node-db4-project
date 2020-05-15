exports.up = function (knex) {
  return knex.schema
    .createTable('recipe', table => {
      table.increments('id')
      table.string('name', 255)
    })
    .createTable('recipe_ingredients', table => {
      table.integer('recipeId')
      table.integer('ingredientsId')
      table.integer('amount')
    })
    .createTable('ingredients', table => {
      table.increments('id')
      table.string('name', 255)
    })
    .createTable('recipe_prep', table => {
      table.integer('recipeId')
      table.integer('step_number')
      table.string('step', 255)
    })
};

exports.down = function (knex) {
  return knex.schema
    .droppTableIfExists('recipe_prep')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipe')
};