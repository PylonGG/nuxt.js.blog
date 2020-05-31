<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <Card
                    v-for="post in posts"
                    :key="post.path"
                    :post="post"
                ></Card>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
// import Box from '@/components/Box.vue'

export default {
    components: {
        Card
        // Box
    },
    async asyncData({ $content }) {
        const posts = await $content().fetch()

        return {
            posts
        }
    }
}
</script>

<style>
.container {
    width: 1024px;
    margin: 0 auto;
}
</style>
