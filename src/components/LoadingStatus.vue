<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Loading...'
    }
})
</script>

<template>
    <div class="status-block">
        <div class="loading-block">
            {{ props.text }}
        </div>
    </div>
</template>

<style>
.loading-block {
    font-size: 20px;
}
</style>