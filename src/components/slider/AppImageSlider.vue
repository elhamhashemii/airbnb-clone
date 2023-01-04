<template>
    <!-- Image Slider -->
    <Swiper class="image-container rounded-xl" :pagination="true" :modules="modules" >
        <SwiperSlide v-for="img in images" :key="img.id">
            <div v-if="loading" class="w-full h-full bg-gray-200"></div>
            <img v-else :src="img.src" class="w-full h-full" alt="">
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";import 'swiper/css';
import "swiper/css/pagination";
const modules = [Pagination];

// const loading = ref(true)

// setTimeout(() => {
//     loading.value = false
// }, 2500);

const images = [
    {id: 0, src: require('@/assets/images/1.webp')},
    {id: 1, src: require('@/assets/images/2.webp')},
    {id: 2, src: require('@/assets/images/3.webp')},
    {id: 3, src: require('@/assets/images/4.webp')},
]
</script>


<style lang="scss" scoped>
.image-container {
    width: 20rem;
    height: 20rem;
}
</style>