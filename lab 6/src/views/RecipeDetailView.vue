<template>
  <div v-if="recipe" class="detail">
    <button class="back-btn" @click="goBack">← Назад</button>
    
    <img :src="recipe.image" :alt="recipe.title" class="detail-image">
    
    <h1>{{ recipe.title }}</h1>
    
    <div class="detail-meta">
      <span class="badge">⏱ {{ recipe.time }} хв</span>
      <span class="badge">🍽 {{ recipe.servings }} порції</span>
      <span class="badge">📁 {{ recipe.category }}</span>
    </div>
    
    <p class="description">{{ recipe.description }}</p>
    
    <div class="ingredients">
      <h3>🥘 Інгредієнти:</h3>
      <ul>
        <li v-for="(ing, idx) in recipe.ingredients" :key="idx">{{ ing }}</li>
      </ul>
    </div>
    
    <button @click="toggleFavorite" class="fav-btn" :class="{ active: isFav }">
      {{ isFav ? '❤️ Видалити з обраного' : '🤍 Додати в обране' }}
    </button>
  </div>
  
  <div v-else class="error">
    <h2>❌ Рецепт не знайдено</h2>
    <p>Можливо, рецепт було видалено або ID невірний.</p>
    <router-link to="/recipes" class="btn">Повернутися до списку</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { mockRecipes } from '@/data/mockRecipes'
import type { Recipe } from '@/types'

const route = useRoute()
const router = useRouter()
const favoritesStore = useFavoritesStore()

const recipe = ref<Recipe | null>(null)
const isFav = ref(false)

onMounted(() => {
  const id = Number(route.params.id)
  const found = mockRecipes.find(r => r.id === id)
  if (found) {
    recipe.value = found
    isFav.value = favoritesStore.isFavorite(found.id)
  } else {
    recipe.value = null
  }
})

function toggleFavorite() {
  if (!recipe.value) return
  if (isFav.value) {
    favoritesStore.removeFavorite(recipe.value.id)
    isFav.value = false
  } else {
    favoritesStore.addFavorite(recipe.value)
    isFav.value = true
  }
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1rem;
  color: #b45f2b;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;
}

.back-btn:hover {
  background: #f0e0d0;
}

.detail-image {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;
}

.detail h1 {
  color: #b45f2b;
  margin-bottom: 16px;
}

.detail-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.badge {
  background: #e0b354;
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 0.9rem;
  color: #2c3e2f;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}

.ingredients {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.ingredients h3 {
  color: #b45f2b;
  margin-bottom: 12px;
}

.ingredients ul {
  margin-left: 20px;
}

.ingredients li {
  margin: 8px 0;
  color: #555;
}

.fav-btn {
  background: #b45f2b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  width: 100%;
  max-width: 300px;
  display: block;
  margin: 0 auto;
}

.fav-btn:hover {
  background: #8b4513;
}

.fav-btn.active {
  background: #2c3e2f;
}

.error {
  text-align: center;
  padding: 50px;
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