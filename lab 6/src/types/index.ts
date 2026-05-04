export interface Recipe {
  id: number
  title: string
  category: string      // супи, основні страви, десерти, салати, напої
  time: number          // час приготування у хвилинах
  servings: number      // кількість порцій
  description: string   // опис рецепту
  image: string         // URL зображення
  ingredients: string[] // список інгредієнтів
}