<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  maxPagesShown: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits(['update:currentPage'])

const setCurrentPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}

const PaginationRange = computed(() => {
  let startPage, endPage
  if (props.totalPages <= props.maxPagesShown) {
    startPage = 1
    endPage = props.totalPages
  }
  else {
    let maxPagesShownBeforeCurrent = Math.floor(props.maxPagesShown / 2)
    let maxPagesShownAfterCurrent = Math.ceil(props.maxPagesShown / 2) - 1
    if (props.currentPage <= maxPagesShownBeforeCurrent) {
      startPage = 1
      endPage = props.maxPagesShown
    }
    else if (props.currentPage + maxPagesShownAfterCurrent >= props.totalPages) {
      startPage = props.totalPages - props.maxPagesShown + 1
      endPage = props.totalPages
    }
    else {
      startPage = props.currentPage - maxPagesShownBeforeCurrent
      endPage = props.currentPage + maxPagesShownAfterCurrent
    }
  }
  const range = Array.from(Array(endPage + 1 - startPage).keys())
    .map((i) => startPage + i)
  return range
})

const ShowFirstEllipsis = computed(() => {
  return props.currentPage > 3
})

const ShowLastEllipsis = computed(() => {
  return props.currentPage < props.totalPages - 2
})

const ShowFirstPageItem = computed(() => {
  return PaginationRange.value[0] >= 2
})

const ShowLastPageItem = computed(() => {
  return PaginationRange.value[PaginationRange.value.length - 1] < props.totalPages
}) 
</script>

<template>
  <div class="pagination-container">
    <div class="pagination-block">
      <div v-if="ShowFirstPageItem"
           @click="setCurrentPage(1)" 
           :class="currentPage === 1 ? 'current' : ''">
        1
      </div>
      <div v-if="ShowFirstEllipsis"
           @click="setCurrentPage(currentPage - props.maxPagesShown)">
        ...
      </div>
      <template v-for="PageNumber in PaginationRange"
                :key="PageNumber">
        <div @click="setCurrentPage(PageNumber)" 
             :class="currentPage === PageNumber ? 'current' : ''">
          {{ PageNumber }}
        </div>
      </template>
      <div v-if="ShowLastEllipsis"
           @click="setCurrentPage(currentPage + props.maxPagesShown)">
        ...
      </div>
      <div v-if="ShowLastPageItem"
            @click="setCurrentPage(totalPages)" 
            :class="currentPage === totalPages ? 'current' : ''">
        {{ totalPages }}
      </div>
    </div>
  </div>
</template>

<style>
.pagination-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #000;
}

.pagination-block {
  display: flex;
}

.pagination-block>div {
  cursor: pointer;
  color: white;
  font-size: 14px;
  padding: 0 6px;
  line-height: 60px;
  user-select: none;
}

.pagination-block>.current {
  font-size: 18px;
  font-weight: bold;
}
</style>