<template>
    <div class="blog-posts">
        <Card v-for="post in posts" :key="post.path" :post="post"></Card>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    layout: 'bloglist',
    components: {
        Card
    },
    async asyncData({ $content }) {
        const posts = await $content().fetch()

        return {
            posts
        }
    },
    head: {
        title: 'Pylon Blog',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Official Pylon blog. Pylon is a gaming and technology based discussion platform. Read the latest development information for Pylon.'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'Pylon, Pylon.gg, Gaming, Gaming Social Media, Technology Blog, Gaming Blog, Development Blog, Nuxt.js, SCSS'
            }
        ]
    }
}
</script>
