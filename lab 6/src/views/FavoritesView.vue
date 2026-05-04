<template>
  <div class="favorites">
    <h2>❤️ Обрані рецепти</h2>
    
    <div v-if="favoritesStore.favoritesCount === 0" class="empty">
      <p>😢 Поки немає обраних рецептів.</p>
      <p>Додайте їх зі сторінки рецептів!</p>
      <router-link to="/recipes" class="btn">Перейти до рецептів</router-link>
    </div>
    
    <div v-else>
      <div class="stats">
        <p>Всього обраних: {{ favoritesStore.favoritesCount }}</p>
        <button @click="favoritesStore.clearFavorites()" class="clear-btn">
          🗑️ Очистити всі
        </button>
      </div>
      
      <div class="recipe-list">
        <RecipeCard
          v-for="recipe in favoritesStore.favorites"
          :key="recipe.id"
          :recipe="recipe"
          @click="goToDetail(recipe.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '@/stores/favoritesStore'
import RecipeCard from '@/components/RecipeCard.vue'

const router = useRouter()
const favoritesStore = useFavoritesStore()

function goToDetail(id: number) {
  router.push({ name: 'recipe-detail', params: { id } })
}
</script>

<style scoped>
.favorites {
  padding: 20px;
}

.favorites h2 {
  color: #b45f2b;
  margin-bottom: 24px;
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 12px 16px;
  background: white;
  border-radius: 40px;
}

.clear-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.2s;
}

.clear-btn:hover {
  background: #c82333;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.empty {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 24px;
}

.empty p {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #6b3e1c;
}

.btn {
  display: inline-block;
  background: #b45f2b;
  color: white;
  padding: 12px 24px;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 20px;
}
</style>