<template>
    <div
        class="logo"
        :class="{ background: background, nav: nav }"
        :width="width"
        :height="height"
    >
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            :width="width"
            :height="height"
        >
            <g>
                <polygon
                    class="bottom"
                    points="55.1,340.9 601.3,563.1 370.9,783.2"
                />
                <polygon
                    class="right"
                    points="357.2,371.7 538.8,218.3 747.5,313.1 635.3,484.8"
                />
                <polygon
                    class="left"
                    points="52.5,247.7 268.8,335.7 541.5,104.7 357.8,16.8"
                />
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        width: {
            type: String,
            default: '100'
        },
        height: {
            type: String,
            default: '100'
        },
        nav: Boolean,
        background: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import '@/design';

.logo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        * {
            fill: $white;
        }
    }

    &.background {
        background-color: $primary;
        border-radius: 50%;
        padding: 18.5px 20px;

        svg {
        }
    }

    &.nav {
        background-color: $primary;
        border-radius: 50%;
        padding: 2.5px 5px;

        svg {
            padding-top: 3px;
        }
    }
}
</style>
