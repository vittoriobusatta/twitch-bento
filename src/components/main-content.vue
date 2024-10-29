<!-- main-content.vue -->
<template>
    <div class="col-span-4 flex flex-row gap-4 h-full w-full">
        <div class="flex-2 flex flex-col gap-4 h-full w-full">
            <Banners />
            <Categories />
            <Shorts />
        </div>
        <Streams />
    </div>
</template>

<script setup>
import Categories from './categories.vue';
import Banners from './banners.vue';
import Shorts from './shorts.vue';
import Streams from './streams.vue';
</script>
