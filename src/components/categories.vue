<template>
  <div class="flex flex-row justify-between gap-4 flex-1">
    <div class="flex justify-between flex-col items-center gap-4 flex-1 max-w-14">
      <button class="bg-main h-full w-full text-white px-4 py-2 rounded-lg">{{ "<" }}</button>
          <button class="bg-main h-full w-full text-white px-4 py-2 rounded-lg">{{ ">" }}</button>
    </div>
    <div class="w-full flex flex-col flex-2 gap-4">
      <div class="flex justify-center gap-4 w-full">
        <button v-for="category in categories" :key="category.name"
          class="bg-850 text-white py-3 px-4 text-sm flex-1 rounded-10">
          {{ category.name }}
        </button>
      </div>
      <div class="flex justify-center gap-4 w-full h-full">
        <div v-for="game in games" :key="game.name" :style="{ backgroundImage: `url(${game.image})` }"
          class="flex-1 h-full max-h-full bg-cover bg-center rounded-10">
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
        { name: "JEUX" },
        { name: "IRL" },
        { name: "ESPORTS" },
        { name: "MUSIQUE" },
        { name: "CRÉATIF" },
        { name: "ALTERNATIF" },
      ],
      games: [
        { name: "Valorant", image: "/assets/categories/valorant.jpg" },
        { name: "Gta V", image: "/assets/categories/gta-v.jpg" },
        { name: "Fortnite", image: "/assets/categories/fortnite.jpg", },
        { name: "Rocket League", image: "/assets/categories/rocket-league.jpg", },
        { name: "Events", image: "/assets/categories/events.jpg", },
      ],
    };
  },
};
</script>