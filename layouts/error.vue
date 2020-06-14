<template>
    <div class="error-page">
        <Logo width="150px" height="150px"></Logo>
        <div class="info">
            <h1>Error {{ error.statusCode }}</h1>
            <p>"We must construct additional pylons..."</p>
            <nuxt-link to="/"
                >Return to saftey
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                    /></svg
            ></nuxt-link>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
    components: {
        Logo
    },
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head: {
        title: `Error | Pylon Blog`,
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

.error-page {
    padding-top: 90px !important;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 692px) {
        flex-direction: column;
    }

    .logo {
        margin-right: 15px;

        @media only screen and (max-width: 692px) {
            margin-right: 0;
            margin-bottom: 30px;
        }
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
        color: $white;
        margin-bottom: 6px;
    }

    p {
        color: $text-muted;
        font-style: italic;
    }

    a {
        display: flex;
        align-items: center;
        color: $primary;
        text-decoration: none;

        svg {
            margin-left: 5px;
        }

        &:hover {
            color: $primary-hover;
        }

        &:active {
            color: $primary-active;
        }
    }
}
</style>
