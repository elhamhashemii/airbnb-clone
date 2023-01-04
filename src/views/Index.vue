<template>
    <div class="my-10 text-gray-500 flex flex-row justify-between items-center">
        <div class="w-11/12">
            <AppIconsSlider></AppIconsSlider>
        </div>
        <div class="w-1/10">
            <AppFilterBtn></AppFilterBtn>
        </div>
    </div>
    <div class="my-5 flex flex-wrap justify-between items-center">
        <AppHomeCard v-for="item in 20" class="w-2/10"></AppHomeCard>
    </div>
</template>

<script setup>
import AppIconsSlider from '@/components/slider/AppIconsSlider.vue';
import AppFilterBtn from '@/components/btn/AppFilterBtn.vue'
import AppHomeCard from '@/components/cards/AppHomeCard.vue';
</script>