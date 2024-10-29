<template>
    <div class="flex-1 grid grid-rows-3 gap-4 h-full rounded-10">
        <div v-for="stream in popularStreams" :key="stream.id"
            class="h-full rounded-10 bg-cover bg-center flex flex-row justify-end"
            :style="{ backgroundImage: `url(${stream.thumbnail})` }">
            <div class="flex flex-col justify-end bg-900 p-3 max-w-96 border-1 border-stroke rounded-e-10">
                <div :style="{ backgroundImage: `url(${stream.avatar})` }"
                    class="avatar bg-cover bg-center rounded-full w-12 h-12 mb-2">
                </div>
                <h3 class="text-500">{{ stream.name }}</h3>
                <h4 class="text-sm text-500">{{ stream.category }}</h4>
                <p class="text-sm">{{ stream.viewers }} spectateurs</p>
                <!-- <p>{{ stream.description }}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popularStreams: [
                {
                    id: 1,
                    name: 'jolavanille',
                    category: 'Discussion',
                    language: 'Français',
                    thumbnail: '/assets/streams/jolavanille-live.jpg',
                    avatar: '/assets/avatars/jolavanille-avatar.png',
                    viewers: '4,3k',
                    description: 'Wsh moi c\'est jordane je suis là pour vous faire rire donc si tu as envie de kiffé abonne toi !! :)',
                },
                {
                    id: 2,
                    name: 'Domingo',
                    category: 'Discussion',
                    language: 'Français',
                    thumbnail: '/assets/streams/popcorn.jpg',
                    avatar: '/assets/avatars/domingo-avatar.png',
                    viewers: '45,7k',
                    description: 'Domingo streame Football Manager 2024, Discussion et Talk-shows et podcasts.',
                },
                {
                    id: 3,
                    name: 'MaximeBiaggi',
                    category: 'Discussion',
                    language: 'Français',
                    thumbnail: '/assets/streams/zen.jpg',
                    avatar: '/assets/avatars/maximebiaggi-avatar.png',
                    viewers: '26,4k',
                    description: 'Un homme simple avant tout... féru de lecture.. très cultivé très beau etc',
                },

            ],
        };
    }
};
</script>
