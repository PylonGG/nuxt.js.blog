<template>
    <div class="blog-posts">
        <Card v-for="post in posts" :key="post.path" :post="post"></Card>
        <div v-if="posts.length === 0" class="oops">
            <h2>It appears there is nothing here yet</h2>
            <p>
                Have an idea for a post? Let us know
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/PylonGG/nuxt.js.blog/issues/new"
                    >here</a
                >
            </p>
        </div>
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
        const posts = await $content()
            .where({ category: 'Community' })
            .fetch()

        return {
            posts
        }
    },
    head: {
        title: 'Community | Pylon Blog',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Official Pylon blog. Pylon is a gaming and technology based discussion platform. Read the latest development information for Pylon.'
            }
        ]
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.oops {
    h2 {
        margin-top: 0;
    }

    p {
        color: $text-muted;
    }
}
</style>
