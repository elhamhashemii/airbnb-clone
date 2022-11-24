<template>
    <div class="bg-white flex-row justify-between items-center border-t border-b border-gray mt-5 py-5 w-full">
        <div class="flex justify-center items-center w-2/12">
            <img :src="logo" alt="airbnb-logo">
            <span class="text-primary font-bold text-2xl">airbnb</span>
        </div>
        <div class="w-3/12">
            <HeroSelectCard />
        </div>
        <div class="w-2/12">
            <UserAccountCard />

        </div>
    </div>
</template>

<script>
import HeroSelectCard from "../../cards/HeroSelectCard.vue"
import UserAccountCard from "../../cards/UserAccountCard.vue"
export default {
    components: {
        HeroSelectCard,
        UserAccountCard
    },
    setup() {
        return {
            logo: require("../../../assets/icons/logo.svg")
        }
    }
} 
</script>