<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const getColorByStatus = (status) => {
    if (status === 'Alive') {
        return {
            color: '#00BD4C'
        }
    }
    else if (status === 'Dead') {
        return {
            color: '#E60000'
        }
    }
    return {
        color: '#7B7B7B'
    }
}
</script>

<template>
    <div class="character-card">
        <div class="main-info-block">
            <div>{{ props.item.name }}</div>
            <div :style="getColorByStatus(props.item.status)">
                {{ capitalizeFirstLetter(props.item.status) }}
            </div>
        </div>
        <div class="sub-info-block">
            <div>{{ props.item.gender }}</div>
            <div>{{ props.item.origin.name }}</div>
        </div>
        <div>
            <img :src="props.item.image">
        </div>
    </div>
</template>

<style>
.character-card {
    width: 300px;
}

.main-info-block, .sub-info-block {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}

.main-info-block > div {
    font-weight: 700;
}

.sub-info-block > div {
    font-weight: 400;
    color: #8D8D8D;
}
</style>