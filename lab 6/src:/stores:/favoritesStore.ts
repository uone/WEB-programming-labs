import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types'

export const useFavoritesStore = defineStore('favorites', () => {
  // стан: масив обраних рецептів
  const favorites = ref<Recipe[]>([])

  // computed: кількість обраних
  const favoritesCount = computed(() => favorites.value.length)

  // computed: фільтр за категорією
  const getFavoritesByCategory = (category: string) => {
    return favorites.value.filter(r => r.category === category)
  }

  // дія: додати до обраного
  function addFavorite(recipe: Recipe) {
    if (!favorites.value.some(r => r.id === recipe.id)) {
      favorites.value.push(recipe)
    }
  }

  // дія: видалити з обраного
  function removeFavorite(recipeId: number) {
    favorites.value = favorites.value.filter(r => r.id !== recipeId)
  }

  // дія: перевірити, чи в обраному
  function isFavorite(recipeId: number): boolean {
    return favorites.value.some(r => r.id === recipeId)
  }

  // дія: очистити всі
  function clearFavorites() {
    favorites.value = []
  }

  return {
    favorites,
    favoritesCount,
    getFavoritesByCategory,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites
  }
})