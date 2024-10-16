const recipes = [
    { recipe_name: 'Chicken Alfredo' },
    { recipe_name: 'Quesadilla' },
    { recipe_name: 'Pizza' }
]

const ingredients = [
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pasta', ingredient_unit: 'grams' },
    { ingredient_name: 'Tortilla', ingredient_unit: 'units' },
    { ingredient_name: 'Cheese', ingredient_unit: 'grams' },
    { ingredient_name: 'Crust', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pepporoni', ingredient_unit: 'slices' },
]

const step_ingredients = [
    // Chicken Alfredo
    { step_id: 1, ingredient_id: 1, quantity: 4 },
    { step_id: 2, ingredient_id: 2, quantity: 100 },
    // Quesadilla
    { step_id: 5, ingredient_id: 3, quantity: 2 },
    { step_id: 5, ingredient_id: 4, quantity: 20 },
    // Pizza
    { step_id: 8, ingredient_id: 5, quantity: 3 },
    { step_id: 8, ingredient_id: 6, quantity: 10 },
]

const steps = [
    // Chicken Alfredo
    { step_text: 'Make chicken', step_number: 1, recipe_id: 1 },
    { step_text: 'Make pasta', step_number: 2, recipe_id: 1 },
    { step_text: 'Combine', step_number: 3, recipe_id: 1 },
    // Quesadilla
    { step_text: 'Heat pan', step_number: 1, recipe_id: 2 },
    { step_text: 'Add cheese to tortillas', step_number: 2, recipe_id: 2 },
    { step_text: 'Place quesadilla in pan', step_number: 3, recipe_id: 2 },
    // Pizza
    { step_text: 'Heat oven', step_number: 1, recipe_id: 3 },
    { step_text: 'Make pizza', step_number: 2, recipe_id: 3 },
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}