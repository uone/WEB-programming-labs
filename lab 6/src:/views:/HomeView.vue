<template>
  <div class="home">
    <h1>🍳 Ласкаво просимо до кулінарного блогу!</h1>
    <p>Найсмачніші рецепти української та світової кухні</p>
    
    <div class="categories">
      <span v-for="cat in categories" :key="cat">{{ cat }}</span>
    </div>
    
    <div class="stats">
      <div class="stat-card">
        <h3>{{ totalRecipes }}</h3>
        <p>рецептів</p>
      </div>
      <div class="stat-card">
        <h3>{{ favoritesCount }}</h3>
        <p>в обраному</p>
      </div>
    </div>
    
    <router-link to="/recipes" class="btn">
      Переглянути всі рецепти →
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { mockRecipes } from '@/data/mockRecipes'

const favoritesStore = useFavoritesStore()
const totalRecipes = mockRecipes.length
const favoritesCount = computed(() => favoritesStore.favoritesCount)

const categories = ['супи', 'основні страви', 'десерти', 'салати', 'напої']
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
}

.home h1 {
  color: #b45f2b;
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.categories {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}

.categories span {
  background: #e0b354;
  padding: 8px 20px;
  border-radius: 40px;
  color: #2c3e2f;
  font-weight: bold;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 40px 0;
}

.stat-card {
  background: white;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.stat-card h3 {
  font-size: 2rem;
  color: #b45f2b;
  margin: 0;
}

.stat-card p {
  margin: 5px 0 0;
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
  transition: background 0.2s;
}

.btn:hover {
  background: #8b4513;
}
</style>