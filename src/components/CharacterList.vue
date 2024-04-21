<script setup>
import CharacterCard from '@/components/CharacterCard.vue'

const props = defineProps({
    list: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="character-list-container">
        <character-card v-for="item in props.list" 
                        :key="item.id" 
                        :item="item"/>
    </div>
</template>

<style>
.character-list-container {
    display: grid;
    gap: 30px 0;
    width: 100%;
    max-width: 300px;
    margin: 15px auto 60px auto;
}

@media (min-width: 480px) {
    .character-list-container {
        max-width: 300px;
    }
}

@media (min-width: 768px) {
    .character-list-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        max-width: 630px;
        gap: 30px;
    }
}

@media (min-width: 1000px) {
    .character-list-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        max-width: 630px;
        gap: 30px;
    }
}
</style>