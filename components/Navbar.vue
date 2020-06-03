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
                    role="img"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path
                        d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                    ></path>
                </svg>
            </a>
            <!-- <a href="#">
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
            </a> -->
        </div>
        <div class="mobile-dropdown-button">
            <button @click="show = !show">
                <svg
                    v-if="!show"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                        fill="currentColor"
                    />
                    <path
                        d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                        fill="currentColor"
                    />
                    <path
                        d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                        fill="currentColor"
                    />
                </svg>
                <svg
                    v-if="show"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
        <transition name="expand">
            <div v-if="show" class="mobile-navbar">
                <div class="mobile-nav-links">
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
                <div class="mobile-nav-bottom">
                    <Newsletter nav></Newsletter>
                    <div class="mobile-social-links">
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
                                role="img"
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                            >
                                <path
                                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
    components: {
        Logo,
        Newsletter
    },
    data: () => {
        return {
            show: false
        }
    },
    watch: {
        $route(to, from) {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.expand-enter-active,
.expand-leave-active {
    transition: all 0.5s;
}
.expand-enter,
.expand-leave-to {
    transform: translate(100%, 0);
}

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

    .mobile-navbar {
        position: absolute;
        top: 50px;
        width: 100%;
        height: calc(100vh - 50px);
        background: $background-darker;
        display: none;
        z-index: 99;

        .mobile-nav-links {
            width: 100%;
        }

        .py_newsletter {
            margin-bottom: 10px;
        }

        .mobile-social-links {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        @media only screen and (max-width: 692px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            a:not(.logo-container) {
                display: flex;
                height: 72px;
                padding: 0 20px;
                margin: 0 10px;
                font-size: 1.4rem;
                color: $white;
                text-decoration: none;
                transition: 0.1s ease-in-out;

                svg {
                    width: 24px;
                    height: 24px;
                }

                &:hover,
                &:focus {
                    color: $primary;
                }

                &.nuxt-link-exact-active {
                    color: $primary;
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        width: 100%;
        border-radius: 0;
        justify-content: space-between;
    }

    @media only screen and (max-width: 692px) {
        overflow: visible;
    }

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

    .left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 15%;

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

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;

        @media only screen and (max-width: 820px) {
            display: none;
        }
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        position: relative;
        width: 15%;

        @media only screen and (max-width: 820px) {
            display: none;
        }

        a {
            padding: 0 6px;
            margin: 0;
        }
    }

    .mobile-dropdown-button {
        display: none;

        button {
            border: 0;
            background: transparent;
            height: 100%;
            width: 50px;
            color: $text-muted;
        }

        @media only screen and (max-width: 820px) {
            display: block;
        }
    }
}
</style>
