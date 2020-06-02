<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-12">
                <Card
                    v-for="post in posts"
                    :key="post.path"
                    :post="post"
                ></Card>
                <a
                    href="/introducing-pylon"
                    class="card"
                    style='background-image: url("/welcome.jpg");'
                    data-v-f883d62a=""
                    ><div class="card-info" data-v-f883d62a="">
                        <h3 data-v-f883d62a="">
                            Welcome to Pylon, a gaming and technology based
                            discussion platform
                        </h3>
                        <p data-v-f883d62a="">
                            By Brett Kubiak on 05/31/2020 in Press
                        </p>
                    </div></a
                >
                <a
                    href="/introducing-pylon"
                    class="card"
                    style='background-image: url("/welcome.jpg");'
                    data-v-f883d62a=""
                    ><div class="card-info" data-v-f883d62a="">
                        <h3 data-v-f883d62a="">
                            Welcome to Pylon, a gaming and technology based
                            discussion platform
                        </h3>
                        <p data-v-f883d62a="">
                            By Brett Kubiak on 05/31/2020 in Press
                        </p>
                    </div></a
                >
                <a
                    href="/introducing-pylon"
                    class="card"
                    style='background-image: url("/welcome.jpg");'
                    data-v-f883d62a=""
                    ><div class="card-info" data-v-f883d62a="">
                        <h3 data-v-f883d62a="">
                            Welcome to Pylon, a gaming and technology based
                            discussion platform
                        </h3>
                        <p data-v-f883d62a="">
                            By Brett Kubiak on 05/31/2020 in Press
                        </p>
                    </div></a
                >
                <a
                    href="/introducing-pylon"
                    class="card"
                    style='background-image: url("/welcome.jpg");'
                    data-v-f883d62a=""
                    ><div class="card-info" data-v-f883d62a="">
                        <h3 data-v-f883d62a="">
                            Welcome to Pylon, a gaming and technology based
                            discussion platform
                        </h3>
                        <p data-v-f883d62a="">
                            By Brett Kubiak on 05/31/2020 in Press
                        </p>
                    </div></a
                >
                <a
                    href="/introducing-pylon"
                    class="card"
                    style='background-image: url("/welcome.jpg");'
                    data-v-f883d62a=""
                    ><div class="card-info" data-v-f883d62a="">
                        <h3 data-v-f883d62a="">
                            Welcome to Pylon, a gaming and technology based
                            discussion platform
                        </h3>
                        <p data-v-f883d62a="">
                            By Brett Kubiak on 05/31/2020 in Press
                        </p>
                    </div></a
                >
            </div>
            <div class="sidebar col-md-4 hidden-sm">
                <Newsletter></Newsletter>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
    components: {
        Card,
        Newsletter
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
        ],
        noscript: [{ innerHTML: 'Body No Scripts', body: true }]
    }
}
</script>

<style lang="scss">
.container {
    width: 1024px;
    margin: 0 auto;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        border-radius: 0;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
    }

    .sidebar {
        position: relative;
        width: inherit;
    }
}
</style>
