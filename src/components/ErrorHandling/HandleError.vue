<template>
    <div class="text-center py-10 bg-red-100 text-red-700 p-4 border rounded">
        <p class="font-bold mb-2">Oops! Looks like there was an error:</p>
        <p>{{ message }}</p>
        <button @click="callback()" class="mt-2 text-sm underline">Try Again</button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    message: string;
    callback: () => void;
}>(); 
</script>