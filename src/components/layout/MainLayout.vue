<template>
    <div class="text-center">
        <AppHeader class="hidden md:block" />   
        <AppMobileHeader class="md:hidden" />
    </div>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";
import AppMobileHeader from "./header/AppMobileHeader.vue";
export default {
    components: {
        AppHeader,
        AppMobileHeader
    }
}
</script>