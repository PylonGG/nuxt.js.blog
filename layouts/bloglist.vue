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
@import '@/design';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

html {
    background: $background;
    color: $white;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    font-size: 100%;
    overflow-x: hidden;
}

body {
    line-height: 1.65;
    font-weight: 400;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: $white;
}

.main {
    padding-top: 75px;
}

a {
    color: $primary;
    text-decoration: none;
    transition: 0.15s ease-out;

    &:hover {
        color: $primary-hover;
    }

    &:active {
        color: $primary-active;
    }
}

p {
    margin-bottom: 1.15rem;
}

h1,
h2,
h3,
h4,
h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    line-height: 1.15;

    &.nmt {
        margin-top: 0;
    }
}

h1 {
    margin-top: 0;
    font-size: 2.488em;
}

h2 {
    font-size: 2.074em;
}

h3 {
    font-size: 1.728em;
}

h4 {
    font-size: 1.44em;
}

h5 {
    font-size: 1.2em;
}

small,
.text_small {
    font-size: 0.833em;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

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
