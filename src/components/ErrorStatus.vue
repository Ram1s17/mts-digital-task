<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Error text'
    }
})
</script>

<template>
    <div class="status-block">
        <div class="error-block">
            {{ props.text }}
        </div>
    </div>
</template>

<style>
.error-block {
    font-size: 20px;
    color: #E60000;
}
</style>