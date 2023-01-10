<template>
    <Swiper :slidesPerView="width > 1000 ? 15: width > 900 ? 8: width > 450 ? 6: 4" class="icon-swiper" loop>
        <SwiperSlide class="flex flex-col justify-between items-stretch cursor-pointer" v-for="icon in icons" :key="icon.name">
            <div class="text-2xl">
                <font-awesome-icon :icon="icon.icon" />
            </div>
            <div class="text-xs mt-2">
                {{ icon.name }}
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css';


const width = ref(window.screen.width)
console.log(width.value);

const screen = function () {
    window.addEventListener('resize', (e) => {
        width.value = e.target.innerWidth
    })
}

screen()

const icons = [
    {id :0 ,icon: 'house-chimney', name: "Parks"},
    {id :1 ,icon: 'mountain-city', name: "Mountains"},
    {id :2 ,icon: 'house-fire', name: "OMG!"},
    {id :3 ,icon: 'house-flood-water', name: "Islands"},
    {id :4 ,icon: 'igloo', name: "Domes"},
    {id :5 ,icon: 'house-laptop', name: "Cabins"},
    {id :6 ,icon: 'building', name: "Mansions"},
    {id :7 ,icon: 'house-tsunami', name: "Beachfront"},
    {id :8 ,icon: 'fire', name: "Camping"},
    {id :9 ,icon: 'mountain-city', name: "Iconic cities"},
    {id :10 ,icon: 'mountain-sun', name: "Caves"},
]
</script>