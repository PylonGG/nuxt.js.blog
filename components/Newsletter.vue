<template>
    <div class="py_newsletter">
        <Box>
            <h4>Stay up to date</h4>
            <p>
                Enter your email to be notified of new posts and for a chance to
                join our exclusive closed beta.
            </p>
            <div class="input-box">
                <input placeholder="Enter your email" type="email" />
                <button>
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
        </Box>
    </div>
</template>

<script>
import Box from '@/components/Box.vue'

export default {
    name: 'Newsletter',
    components: {
        Box
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.py_newsletter {
    position: fixed;
    max-width: 346.66px;

    h4 {
        margin: 0;
    }

    p {
        margin-top: 6px;
        color: $text-muted;
    }

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: $text-muted;
    }
    ::-moz-placeholder {
        /* Firefox 19+ */
        color: $text-muted;
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
        color: $text-muted;
    }
    :-moz-placeholder {
        /* Firefox 18- */
        color: $text-muted;
    }

    .input-box {
        display: flex;
        height: 100%;
        border-radius: 6px;

        input {
            border: 0;
            background: $background-dark;
            font-size: 1em;
            color: $white;
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
