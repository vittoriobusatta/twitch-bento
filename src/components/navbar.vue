<script>
export default {
    name: 'Navbar',
}
</script>

<template>
    <nav class="text-white px-8 py-4">
        <div class="w-full grid grid-cols-5 gap-4">
            <div class="bg-900 w-full col-span-1 flex justify-between items-center p-4 rounded-10">
                <img src="/twitch-logo.svg">
                <button>Suivis</button>
                <button>Parcourir</button>
                <img src="/icons/more.svg">
            </div>
            <div class="bg-850 col-span-3 w-full flex justify-between items-center h-full p-4 rounded-10">
                <button>Rechercher</button>
                <img src="/icons/search.svg">
            </div>
            <div class="bg-900 col-span-1 w-full flex justify-between items-center h-full rounded-10 gap-4">
                <div class="flex flex-1 justify-between items-center p-4">
                    <img src="/icons/box.svg">
                    <img src="/icons/prime.svg">
                    <img src="/icons/chat.svg">
                    <img src="/icons/bits.svg">
                </div>
                <img class="h-full w-12 rounded-10" src="/profile.jpg">
            </div>
        </div>
    </nav>
</template>



<style scoped></style>