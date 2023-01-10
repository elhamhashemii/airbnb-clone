<template>
    <div class="my-10 text-center text-gray-500 flex flex-row justify-between items-center">
        <div class="w-11/12">
            <AppIconsSlider></AppIconsSlider>
        </div>
        <div v-if="screen > 1024" class="w-1/10">
            <AppFilterBtn></AppFilterBtn>
        </div>
    </div>
    <div class="my-5 flex flex-wrap justify-between items-center">
        <AppHomeCard v-for="item in 20" class="w-2/10"></AppHomeCard>
    </div>
</template>

<script setup>
import { ref } from "vue"
import AppIconsSlider from '@/components/slider/AppIconsSlider.vue';
import AppFilterBtn from '@/components/btn/AppFilterBtn.vue'
import AppHomeCard from '@/components/cards/AppHomeCard.vue';

const screen = ref(window.screen.width)

window.addEventListener('resize', (e) => {
    screen.value = e.target.innerWidth
})

</script>