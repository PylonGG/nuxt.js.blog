<template>
    <div class="navbar">
        <div class="col-1-3 left">
            <nuxt-link to="/" class="logo-container">
                <Logo width="30px" height="30px"></Logo>
                <span>Blog</span>
            </nuxt-link>
        </div>
        <div class="col-1-3 center">
            <nuxt-link to="/">
                <span>All</span>
            </nuxt-link>
            <nuxt-link to="/engineering">
                <span>Engineering</span>
            </nuxt-link>
            <nuxt-link to="/community">
                <span>Community</span>
            </nuxt-link>
            <nuxt-link to="/press">
                <span>Press</span>
            </nuxt-link>
        </div>
        <div class="col-1-3 right">
            <a target="_blank" href="https://instagram.com/pylongg">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                        fill="currentColor"
                    />
                    <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="currentColor"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
            <a target="_blank" href="https://twitter.com/PyIonGG">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
            <a href="#">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                        fill="currentColor"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Logo from '@/components/Logo.vue'

export default Vue.extend({
    components: {
        Logo
    }
})
</script>

<style lang="scss" scoped>
@import '@/design';

.navbar {
    z-index: 999;
    height: 50px;
    background: $background-darker;
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    @include box-shadow;
    width: 1024px;
    margin: 0 auto;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;

    .logo-container {
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
            margin-left: 10px;
            font-size: 1.2rem;
            font-weight: 400;
            color: $white;
        }
    }

    a:not(.logo-container) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        margin: 0 10px;
        font-size: 1rem;
        color: $white;
        text-decoration: none;
        transition: 0.1s ease-in-out;

        &:hover,
        &:focus {
            color: $primary;
        }

        &.nuxt-link-exact-active {
            color: $primary;
        }
    }

    .col-1-3 {
        width: 33.3%;

        &.left {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .logo-container {
                height: 100%;
                padding: 0 10px;
                background: $primary;
                margin-right: 15px;

                &:hover {
                    background: darken($color: $primary, $amount: 4%);
                }

                &:active {
                    background: darken($color: $primary, $amount: 6.5%);
                }
            }
        }

        &.center {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 10px;
            position: relative;

            a {
                padding: 0 6px;
                margin: 0;
            }
        }
    }
}
</style>
