<template>
    <aside class="bg-900 h-full col-span-1 p-4 flex-1 rounded-10">
        <div class="followed-channels">
            <h2>Chaînes Suivies</h2>
            <ul>
                <li v-for="channel in followedChannels" :key="channel.id">
                    <img :src="channel.avatar" alt="Avatar" />
                    <span>{{ channel.name }}</span>
                    <span>{{ channel.viewers }}k</span>
                </li>
            </ul>
        </div>
        <div class="recommended-channels">
            <h2>Chaînes Recommandées</h2>
            <ul>
                <li v-for="channel in recommendedChannels" :key="channel.id">
                    <img :src="channel.avatar" alt="Avatar" />
                    <span>{{ channel.name }}</span>
                    <span>{{ channel.viewers }}k</span>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            followedChannels: [
                { id: 1, name: 'Kamet0', viewers: 16, avatar: 'kamet0.jpg' },
            ],
            recommendedChannels: [
                { id: 1, name: 'Domingo', viewers: 5.9, avatar: 'domingo.jpg' },
            ]
        };
    }
};
</script>

<style scoped>
/* Styles de la sidebar */
</style>