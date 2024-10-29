<template>
    <div class="flex flex-row justify-between gap-4 flex-1 w-full">
        <div class="shors flex-2 flex flex-row gap-4 w-full">
            <div v-for="short in shorts" :key="short.id" class="flex-1">
                <div :style="{ backgroundImage: `url('/assets/shorts/${short.thumbnail}')` }"
                    class="short-thumbnail bg-cover bg-center rounded-10 h-full flex flex-col justify-end">
                    <div class="bg-overlay bg-opacity-50 p-2 rounded-b-10">
                        <h3>{{ short.streamer }}</h3>
                        <p class="text-0 text-sm truncate max-w-full">{{ short.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between flex-col items-center gap-4 flex-1 max-w-14">
            <button class="bg-main h-full w-full text-white px-4 py-2 rounded-lg">{{ "<" }}</button>
                    <button class="bg-main h-full w-full text-white px-4 py-2 rounded-lg">{{ ">" }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shorts: [
                { id: 1, streamer: 'Duke', time: '1:30', thumbnail: 'shorts1.jpg', title: 'VERY SHORT STREAM DONT MISS IT...' },
                { id: 2, streamer: 'Domingo', time: '0:45', thumbnail: 'shorts2.jpg', title: 'Domingo - GTA V' },
                { id: 3, streamer: 'Gotaga', time: '1:00', thumbnail: 'shorts3.jpg', title: 'Gotaga - Fortnite' },
                { id: 4, streamer: 'MisterMV', time: '0:30', thumbnail: 'shorts4.jpg', title: 'Rocket League' },
            ]
        };
    }
};
</script>