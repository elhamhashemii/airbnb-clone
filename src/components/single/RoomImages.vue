<template>
    <div class="flex flex-row mb-10" style="height: 750px">
        <img :src="imagesData[0].src" class="sm:w-full sm:rounded-xl md:w-5/6">
        <span class="md:ml-5 sm:w-full md:w-1/2">
            <img :src="imagesData[12].src" style="height: 360px;" class="rounded-lg">
            <img :src="imagesData[11].src" class="mt-5 rounded-lg" style="height: 370px;">
        </span>
    </div>
</template>


<script setup>
import { imagesData } from "@/data/images"

// const images = [imagesData[0], imagesData[1], imagesData[2]]

</script>