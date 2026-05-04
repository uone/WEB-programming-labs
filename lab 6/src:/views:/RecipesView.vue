<template>
  <div class="recipes-view">
    <h2>📖 Всі рецепти</h2>
    
    <div class="filters">
      <input 
        type="text" 
        v-model="search" 
        placeholder="Пошук за назвою..."
        class="search-input"
      >
      <select v-model="categoryFilter" class="category-select">
        <option value="">Всі категорії</option>
        <option value="супи">Супи</option>
        <option value="основні страви">Основні страви</option>
        <option value="десерти">Десерти</option>
        <option value="салати">Салати</option>
        <option value="напої">Напої</option>
      </select>
    </div>
    
    <div v-if="filteredRecipes.length === 0" class="no-results">
      😕 На жаль, рецептів за вашим запитом не знайдено
    </div>
    
    <div v-else class="recipe-list">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :recipe="recipe"
        @click="goToDetail(recipe.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import RecipeCard from '@/components/RecipeCard.vue'
import { mockRecipes } from '@/data/mockRecipes'

const router = useRouter()
const search = ref('')
const categoryFilter = ref('')

const filteredRecipes = computed(() => {
  let result = mockRecipes
  if (search.value) {
    result = result.filter(r => 
      r.title.toLowerCase().includes(search.value.toLowerCase())
    )
  }
  if (categoryFilter.value) {
    result = result.filter(r => r.category === categoryFilter.value)
  }
  return result
})

function goToDetail(id: number) {
  router.push({ name: 'recipe-detail', params: { id } })
}
</script>

<style scoped>
.recipes-view {
  padding: 20px;
}

.recipes-view h2 {
  color: #b45f2b;
  margin-bottom: 24px;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  min-width: 200px;
  padding: 12px 20px;
  border-radius: 40px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.category-select {
  padding: 12px 20px;
  border-radius: 40px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background: white;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.no-results {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  background: white;
  border-radius: 24px;
}
</style>