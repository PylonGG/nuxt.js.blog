<template>
    <div class="blog-list">
        <Navbar></Navbar>
        <div class="container main">
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <nuxt></nuxt>
                </div>
                <div class="sidebar col-md-4">
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Newsletter,
        Navbar
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

        @media screen and (max-width: 64em) {
            display: none;
        }
    }
}
</style>
