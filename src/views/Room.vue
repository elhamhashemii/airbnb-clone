<template>
    <div class="custom-container">
        <div class="text-left text-4xl font-semibold mt-12">Defiance, Missouri</div>
        <div class="mt-4 text-left text-black text-sm font-bold">
            <font-awesome-icon icon="star"></font-awesome-icon>
            <span class="mx-1">4.6</span>
            <span class="mx-3">-</span>
            <span class="border-black border-b cursor-pointer">23 Reviews</span>
            <span class="mx-3">-</span>
            <span class="border-black border-b cursor-pointer">41 miles to Gateway Arch National Park Jan 8 – 13</span>
        </div>
        <div class="mt-4">
            <RoomImages />
        </div>
        <div class="flex flex-row">
            <div class="mt-2 mb-4 pb-4 text-left sm:w-full md:w-2/3 border-b border-grey-900 flex flex-row">
                <div class="sm:w-full md:w-5/6">
                    <div class="text-xl font-semibold">Entire chalet hosted by Pims</div>
                    <div class="text-md my-2 font-medium">12 guests. 5 bedrooms. 7beds. 6.5 baths</div>
                </div>
                <div class="sm:d-none md:w-1/6">Logo in here</div>
            </div>
            <div class="sm:w-full md:w-1/3">
                Google
            </div>
        </div>
        <div class="text-left mt-lg">
            <div class="flex flex-row">
                <font-awesome-icon icon="key" class="w-1/12"></font-awesome-icon>
                <div class="w-11/12">VOl</div>
            </div>
        </div>

    </div>
</template>


<script setup>
import RoomImages from '@/components/single/RoomImages.vue';
</script>