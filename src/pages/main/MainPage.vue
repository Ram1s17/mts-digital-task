<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterService from '@/services/CharacterService'
import LoadingStatus from '@/components/LoadingStatus.vue'
import ErrorStatus from '@/components/ErrorStatus.vue'
import CharacterList from '@/components/CharacterList.vue'
import PaginationBlock from '@/components/PaginationBlock.vue'

const isLoading = ref(false)
const error = ref(null)
const characters = ref([])
const currentPage = ref(0)
const totalPages = ref(0)

async function fetchCharacters(page) {
  isLoading.value = true
  try {
    const response = await CharacterService.getCharacters({ page })
    const data = response.data
    if (!Array.isArray(data.results)) {
      throw new Error('Incorrect data')
    }
    characters.value = data.results
    totalPages.value = data.info.pages
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

watch(currentPage, (newValue) => {
  fetchCharacters(newValue)
})

onMounted(() => {
  const page = parseInt(useRoute().query.page)
  if (Number.isNaN(page)) {
    useRouter().push('/')
  }
  currentPage.value = page || 1
})
</script>

<template>
  <loading-status v-if="isLoading"/>
  <error-status v-else-if="!!error"
                :text="error"/>
  <character-list v-else
                  :list="characters"/>
  <pagination-block v-model:currentPage="currentPage" 
                    :totalPages="totalPages"/>
</template>
