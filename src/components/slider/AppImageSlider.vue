<template>
    <div class="px-3">
        <div>
            <Swiper class="image-container rounded-xl" :pagination="true" :modules="modules" >
        <SwiperSlide v-for="img in props.images" :key="img.id">
            <div v-if="loading" class="w-full h-full bg-gray-200"></div>
            <img v-else :src="img.src" class="w-full h-full" :alt="img.id">
        </SwiperSlide>
    </Swiper>
        </div>
        <div class="text-start my-5 content">
            <div class="flex flex-row justify-between items-center">
                <div class="text-black text-sm font-bold">Defiance, Missouri</div>
                <div class="text-black text-sm font-bold">
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <span class="mx-1">4.6</span>
                </div>
            </div>
            <div class="text-gray-400 my-2 text-xs">41 miles to Gateway Arch National Park Jan 8 – 13</div>
            <div class="text-sm"><span class="font-bold text-black">€</span> 171 night</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";import 'swiper/css';
import "swiper/css/pagination";
const modules = [Pagination];

const loading = ref(true)

setTimeout(() => {
    loading.value = false
}, 1500);

const props = defineProps(['images'])


</script>


<style lang="scss" scoped>
.image-container {
    // width: 16rem;
    height: 16rem;
}
</style>