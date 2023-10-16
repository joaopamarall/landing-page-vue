<template>
    <div class="carrousel">
        <base-card></base-card>
        <div class="slides" v-for="(item, index) in items" :key="index">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {},
                {}
            ]
        }
    }
}
</script>

<style></style>