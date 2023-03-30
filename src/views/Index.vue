<template>
<div class="custom-container text-center">
    <div class="my-10 text-center text-gray-500 flex flex-row justify-between items-center">
        <div class="w-11/12">
            <AppIconsSlider></AppIconsSlider>
        </div>
        <div v-if="screen > 1024" class="w-1/10">
            <AppFilterBtn></AppFilterBtn>
        </div>
    </div>
    <div class="my-5 flex flex-wrap justify-start items-center">
        <AppImageSlider v-for="item in data" class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12" :images="item" @click="routeToSingle"></AppImageSlider>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue"
import AppIconsSlider from '@/components/slider/AppIconsSlider.vue';
import AppFilterBtn from '@/components/btn/AppFilterBtn.vue'
import AppImageSlider from '@/components/slider/AppImageSlider.vue';
import { imagesData } from "@/data/images"
import { useRouter } from "vue-router";

const screen = ref(window.screen.width)

window.addEventListener('resize', (e) => {
    screen.value = e.target.innerWidth
})

const sliderImages = imagesData;

const images = ref([])

const router = useRouter()

const routeToSingle = () => {
    router.push({name: 'Room'})
}

// Data is an array of arrays
const data = ref([])

function generateNewInstances () {
    for (let i = 0; i < 21; i++) {
    images.value = sliderImages.sort((a,b) => 0.5 - Math.random()).slice(0,4)
    data.value.push(images.value)
    }
}

generateNewInstances()

const api = require('axios');

const apiData = ref()


api
    .get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features")
    .then((res) => {
        apiData.value = res.data.records
    });

</script>