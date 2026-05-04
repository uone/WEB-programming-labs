<template>
  <div class="recipe-card" @click="$emit('click')">
    <img :src="recipe.image" :alt="recipe.title">
    <div class="card-content">
      <h3>{{ recipe.title }}</h3>
      <div class="meta">
        <span>⏱ {{ recipe.time }} хв</span>
        <span>🍽 {{ recipe.servings }} порц.</span>
        <span>📁 {{ recipe.category }}</span>
      </div>
      <p>{{ recipe.description.substring(0, 80) }}...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '@/types'

defineProps<{
  recipe: Recipe
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped>
.recipe-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.recipe-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.recipe-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-content h3 {
  color: #b45f2b;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  margin: 10px 0;
  color: #6b3e1c;
}

.meta span {
  background: #fef5e8;
  padding: 4px 8px;
  border-radius: 20px;
}

p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
}
</style>