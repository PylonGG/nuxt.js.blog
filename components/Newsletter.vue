<template>
    <div class="py_newsletter" :class="{ nav: nav }">
        <h4>Stay up to date</h4>
        <p>
            Enter your email to be notified of new posts and for a chance to
            join our exclusive closed beta.
        </p>
        <div class="input-box">
            <input
                v-model="email"
                placeholder="Enter your email"
                type="email"
            />
            <button aria-label="Submit Email" @click="submitEmail()">
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
                    />
                </svg>
            </button>
        </div>
        <p v-if="message" :class="message.type" class="message">
            {{ message.text }}
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Newsletter',
    components: {},
    props: {
        nav: {
            type: Boolean,
            default: false
        }
    },
    data: () => {
        return {
            email: '',
            message: {}
        }
    },
    methods: {
        submitEmail() {
            this.message = {}

            if (this.email !== '') {
                if (!this.isEmail(this.email)) {
                    this.message = {
                        type: 'error',
                        text: 'Not a valid email address.'
                    }
                    return
                }

                axios
                    .post('https://beta-api.pylon.gg/collectemail', {
                        email: this.email
                    })
                    .then((response) => {
                        this.message = {
                            type: 'success',
                            text: 'Successfully signed up!'
                        }
                    })
                    .catch(() => {
                        this.message = {
                            type: 'error',
                            text: 'Something went wrong, try again!'
                        }
                    })
            } else {
                this.message = {
                    type: 'error',
                    text: 'The email field is required.'
                }
            }
        },
        isEmail(email) {
            const re = /\S+@\S+\.\S+/
            return re.test(String(email).toLowerCase())
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.py_newsletter {
    position: fixed;
    max-width: 330.66px;

    &.nav {
        position: relative;

        .py_box {
            background: transparent;
        }

        input {
            background: $background;
        }
    }

    h4 {
        margin: 0;
    }

    p {
        margin-top: 6px;
        color: $text-muted;
    }

    .message {
        text-align: center;
    }

    .error {
        color: $red;
    }

    .success {
        color: $green;
    }

    ::-webkit-input-placeholder,
    ::-moz-placeholder,
    :-ms-input-placeholder,
    :-moz-placeholder {
        color: $background-darker;
        opacity: 0.5;
    }

    .input-box {
        display: flex;
        height: 100%;
        border-radius: 6px;

        input {
            border: 0;
            background: $white;
            font-size: 1em;
            color: $background-darker;
            padding: 10px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            -webkit-appearance: none;
            width: 100%;
        }

        button {
            -webkit-appearance: none;
            border: 0;
            background: $primary;
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
            color: $white;
            cursor: pointer;
            transition: 0.15s ease-out;

            &:hover {
                background: $primary-hover;
            }

            &:active {
                background: $primary-active;
            }
        }
    }
}
</style>
