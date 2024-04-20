<script setup>
import { onMounted, ref } from 'vue'
import CharacterService from '@/services/CharacterService'

const isLoading = ref(false)
const error = ref(null)
const characters = ref([])

async function fetchCharacters() {
  isLoading.value = true
  try {
    const response = await CharacterService.getCharacters()
    const data = response.data?.results
    if (!Array.isArray(data)) {
      throw new Error('Incorrect data')
    }
    characters.value = data
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message
    } else {
      error.value = 'An unexpected error occurred'
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCharacters()
})
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else-if="!!error">
    {{ error }}
  </div>
  <div v-else>
    {{ characters }}
  </div>
</template>
