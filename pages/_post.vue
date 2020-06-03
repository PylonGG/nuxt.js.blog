<template>
    <div class="post">
        <div class="post-header">
            <h1>{{ post.title }}</h1>
            <div class="header-bottom">
                <div class="author">
                    <div class="author-image">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                fill="currentColor"
                            />
                            <path
                                d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div class="author-info">
                        <div class="author-name">{{ post.author }}</div>
                        <div class="date">{{ date }}</div>
                    </div>
                    <div class="post-category">
                        {{ post.category }}
                    </div>
                </div>
                <div class="social-links">
                    <div class="social-links-title">Share on</div>
                    <a
                        target="_blank"
                        :href="
                            'https://twitter.com/intent/tweet?text=' +
                                post.title +
                                '&url=https://blog.pylon.gg/' +
                                post.slug +
                                ''
                        "
                    >
                        <svg
                            role="img"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                        >
                            <title>Share on Twitter</title>
                            <path
                                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        :href="
                            'https://www.linkedin.com/sharing/share-offsite/?url=https://blog.pylon.gg/' +
                                post.slug
                        "
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                        >
                            <title>Share on LinkedIn</title>
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        :href="
                            'https://www.facebook.com/sharer/sharer.php?u=https://blog.pylon.gg/' +
                                post.slug
                        "
                        ><svg
                            role="img"
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                        >
                            <title>Share on Facebook</title>
                            <path
                                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                            ></path></svg
                    ></a>
                </div>
            </div>
            <img class="post-image" :src="post.image" :alt="post.title" />
        </div>
        <nuxt-content :document="post" />
        <div class="mobile-social-links">
            <div class="social-links-title">Share on</div>
            <div class="mobile-social-links-container">
                <a
                    target="_blank"
                    :href="
                        'https://twitter.com/intent/tweet?text=' +
                            post.title +
                            '&url=https://blog.pylon.gg/' +
                            post.slug +
                            ''
                    "
                >
                    <svg
                        role="img"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                    >
                        <title>Share on Twitter</title>
                        <path
                            d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                        ></path>
                    </svg>
                </a>
                <a
                    target="_blank"
                    :href="
                        'https://www.linkedin.com/sharing/share-offsite/?url=https://blog.pylon.gg/' +
                            post.slug
                    "
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                    >
                        <title>Share on LinkedIn</title>
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        ></path>
                    </svg>
                </a>
                <a
                    target="_blank"
                    :href="
                        'https://www.facebook.com/sharer/sharer.php?u=https://blog.pylon.gg/' +
                            post.slug
                    "
                    ><svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                    >
                        <title>Share on Facebook</title>
                        <path
                            d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                        ></path></svg
                ></a>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    components: {},
    async asyncData({ $content, params }) {
        const post = await $content(params.post).fetch()

        return {
            post
        }
    },
    computed: {
        date() {
            return moment(this.post.createdAt).format('MMM Do, YYYY')
        }
    },
    head() {
        return {
            title: this.post.title + ' | Pylon Blog',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.description
                },
                {
                    hid: 'author',
                    name: 'author',
                    content: this.post.author
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.post.keywords
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.post.title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.post.description
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://blog.pylon.gg' + this.post.image
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://blog.pylon.gg/' + this.post.slug
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.post.title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.post.description
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://blog.pylon.gg' + this.post.image
                },
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '@/design';

.post {
    width: 680px;
    margin: 0 auto;
    padding-bottom: 30px;
    position: relative;

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 600;
    }

    @media only screen and (max-width: 692px) {
        padding-bottom: 60px;
        width: 100% !important;
        margin: 0;
        padding-left: 15px;
        padding-right: 15px;
    }

    .mobile-social-links {
        position: fixed;
        display: none;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: $background;

        @media only screen and (max-width: 692px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .social-links-title {
            display: flex;
            align-items: center;
            justify-content: center;
            color: $text-muted;
            margin-right: 5px;
        }

        .mobile-social-links-container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 30px;
                margin: 0 10px;

                .icon {
                    fill: $text-muted;
                }
            }
        }
    }

    @media only screen and (max-width: 820px) {
        width: 680px;
    }

    hr {
        margin: 1.15rem 0;
        border-color: $text-muted;
        border-width: 2px;
        border-style: solid;
        border-radius: 2px;
    }

    pre {
        background: $background-dark;
        border-radius: 6px;
        margin-bottom: 1.15rem;

        code {
            color: $white;
            text-shadow: none;
            font-size: 0.8rem;

            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string {
                color: #9a6e3a;
                background: none;
            }
        }
    }

    p {
        img {
            border-radius: 6px;
            @include box-shadow;
            align-self: center;
            width: 100%;
            background: $background-dark;
        }
    }

    table {
        width: 100%;
        border-spacing: 0px;
        border-radius: 6px;
        border-collapse: collapse;
        @include box-shadow;

        th,
        td {
            padding: 10px;
        }

        th {
            background: $primary;
            border-bottom: 2px solid $primary-hover;

            &:first-child {
                -moz-border-radius: 6px 0 0 0;
                -webkit-border-radius: 6px 0 0 0;
                border-radius: 6px 0 0 0;
            }

            &:last-child {
                -moz-border-radius: 0 6px 0 0;
                -webkit-border-radius: 0 6px 0 0;
                border-radius: 0 6px 0 0;
            }
        }

        td {
            color: $text-muted;
        }

        tr {
            td {
                background: lighten($background-darker, 1.5%);
            }

            &:nth-child(even) {
                td {
                    background: $background-darker;
                }
            }

            &:not(:last-child) {
                border-bottom: 1px solid
                    lighten($color: $background-darker, $amount: 4%);
            }

            td:not(:last-child) {
                border-right: 1px solid
                    lighten($color: $background-darker, $amount: 2.5%);
            }

            &:last-child {
                td:first-child {
                    -moz-border-radius: 0 0 0 6px;
                    -webkit-border-radius: 0 0 0 6px;
                    border-radius: 0 0 0 6px;
                }

                td:last-child {
                    -moz-border-radius: 0 0 6px 0;
                    -webkit-border-radius: 0 0 6px 0;
                    border-radius: 0 0 6px 0;
                }
            }
        }
    }

    blockquote {
        border-left: 4px solid $white;
        border-radius: 4px;
        padding-left: 20px;
        color: $text-muted;
    }

    .post-header {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 30px;

        @media only screen and (max-width: 820px) {
            margin-bottom: 20px;
        }

        h1 {
            font-weight: 600;
            text-align: center;
            margin-bottom: 30px;
            width: 120%;
            align-self: center;

            @media only screen and (max-width: 820px) {
                width: 100%;
                margin-bottom: 20px;
            }

            @media only screen and (max-width: 692px) {
                text-align: left;
            }
        }

        .post-image {
            width: 120%;
            border-radius: 12px;
            @include box-shadow;
            align-self: center;
            background: $background-dark;

            @media only screen and (max-width: 820px) {
                width: 100%;
            }
        }

        .header-bottom {
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;

            @media only screen and (max-width: 820px) {
                justify-content: center;
                margin-bottom: 20px;
            }

            @media only screen and (max-width: 692px) {
                justify-content: left;
            }

            .author {
                display: flex;
                height: 100%;
                align-items: center;

                .author-image {
                    background: $primary;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 12px;
                }

                .author-info {
                    display: flex;
                    flex-direction: column;

                    .author-name {
                        color: $white;
                    }

                    .date {
                        color: $text-muted;
                        font-size: 0.8em;
                        margin-top: -4px;
                    }
                }

                .post-category {
                    background: $background-darker;
                    color: $white;
                    border-radius: 6px;
                    padding: 5px 10px;
                    margin-left: 12px;
                    font-size: 0.8em;
                }
            }

            .social-links {
                height: 100%;
                display: flex;
                align-items: center;

                @media only screen and (max-width: 820px) {
                    display: none;
                }

                .icon {
                    transition: 0.15s ease-out;
                    fill: $text-muted;
                }

                a {
                    height: 36px;
                    width: 36px;
                    margin-left: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        .icon {
                            fill: $white;
                        }
                    }
                }
            }
        }
    }
}
</style>
