<template>
    <nuxt-link
        v-if="post"
        :to="post.path || '/'"
        class="card"
        :style="'background-image: url(' + post.image + ');'"
    >
        <div class="card-info">
            <h3>{{ post.title }}</h3>
            <p>By {{ post.author }} on {{ date }} in {{ post.category }}</p>
        </div>
    </nuxt-link>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name: 'Card',
    props: {
        post: {
            type: Object,
            default: null
        }
    },
    computed: {
        date() {
            return dayjs(this.post.date).format('MMM D, YYYY')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.card {
    display: block;
    height: 300px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    @include box-shadow;
    cursor: pointer;
    background-size: 100%;
    background-position: center;
    transition: 0.1s ease-out;
    text-decoration: none;
    color: $white;
    margin-bottom: 15px;

    @media only screen and (max-width: 692px) {
        height: 200px;

        h3 {
            font-size: 1.2em;
            width: 90% !important;
        }

        p {
            font-size: 0.8em;
        }

        &::before {
            filter: blur(9px);
        }
    }

    &:hover,
    &:focus {
        background-size: 103%;

        .card-info {
            color: $primary;
        }
    }

    .card-info {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
        z-index: 10;
        height: 100%;
        width: 100%;
        padding: 15px;
        transition: 0.1s ease-out;

        h3 {
            margin: 0;
            text-shadow: 1px 1px rgba(18, 19, 36, 0.6);
            width: 80%;
            margin-bottom: 4px;
        }

        p {
            margin: 0;
            color: $text-muted;
        }
    }

    &::before {
        position: absolute;
        content: '';
        background-image: linear-gradient(
            0deg,
            rgba(18, 19, 36, 0.8) 10%,
            rgba(18, 19, 36, 0.75) 25%,
            rgba(18, 19, 36, 0.65) 50%,
            rgba(18, 19, 36, 0.55) 75%,
            rgba(18, 19, 36, 0.4)
        );
        top: -20px;
        bottom: -20px;
        left: -20px;
        right: -20px;
        z-index: 0;
    }
}
</style>
