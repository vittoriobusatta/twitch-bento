<template>
    <div class="col-span-4 flex flex-row gap-4">
        <div class="flex-2 grid grid-rows-3 gap-4">
            <div class="banner flex flex-row gap-4">
                <div class="banner-item bg-cover bg-top h-64 w-full rounded-10 flex flex-col items-center justify-center gap-6"
                    style="background-image: url('/assets/twitch-turbo.jpg');">
                    <img class="max-h-16 w-1/2" src="/icons/twitch-turbo.svg" alt="Prime Gaming" />
                    <button class="bg-main text-white px-4 py-2 rounded-10 text-sm">
                        S'abonner à partir de 11,99€ /mois
                    </button>
                </div>
                <div class="banner-item bg-cover bg-center h-64 w-full rounded-10 flex flex-col items-center justify-center"
                    style="background-image: url('/assets/prime-gaming.jpg');">
                    <img class="max-h-24 w-1/2" src="/icons/prime-gaming.svg" alt="Prime Gaming" />
                </div>
            </div>

            <div class="categories">
                <button v-for="category in categories" :key="category.id">{{ category.name }}</button>
            </div>

            <div class="shors">
                <h2>En ce moment sur Twitch</h2>
                <div v-for="short in shorts" :key="short.id" class="short-item">
                    <img :src="short.thumbnail" alt="Short Thumbnail" />
                    <div class="short-info">
                        <h3>{{ short.streamer }}</h3>
                        <p>{{ short.time }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 grid grid-rows-3 gap-4">
            <div v-for="stream in popularStreams" :key="stream.id" class="stream-item">
                <img :src="stream.thumbnail" alt="Stream Thumbnail" />
                <div class="stream-info">
                    <h3>{{ stream.title }}</h3>
                    <p>{{ stream.viewers }} spectateurs</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                { id: 1, name: 'Jeux' },
                { id: 2, name: 'IRL' },
                { id: 3, name: 'Esports' },
            ],
            popularStreams: [
                { id: 1, title: 'Fortnite', viewers: 22.3, thumbnail: 'fortnite.jpg' },

            ],
            shorts: [
                { id: 1, streamer: 'Kamet0', time: '1:30', thumbnail: 'kamet0.jpg' },
                { id: 2, streamer: 'Domingo', time: '0:45', thumbnail: 'domingo.jpg' },
            ]
        };
    }
};
</script>

<style scoped>
/* Styles du contenu principal */
</style>