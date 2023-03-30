<template>
    <div class="custom-container bg-white border-b border-gray py-3">
        <div class="custom-container flex flex-row justify-between items-center">
            <div class="flex justify-center items-center">
                <img :src="logo" alt="airbnb-logo" class="w-10">
                <span class="text-primary font-bold text-2xl">airbnb</span>
            </div>
            <div class="ml-24">
                <HeroSelectCard />
            </div>
            <div>
                <UserAccountCard />
    
            </div>
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