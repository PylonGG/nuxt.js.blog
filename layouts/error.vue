<template>
    <div class="error-page">
        <Logo width="200px" height="200px"></Logo>
        <div class="info">
            <h1>Error {{ error.statusCode }}</h1>
            <p>We must construct additional pylons...</p>
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
    }
}
</script>

<style lang="scss">
@import '@/design';

.error-page {
    padding-top: 50px !important;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        margin-right: 20px;
    }

    h1 {
        font-size: 72px;
        font-weight: 600;
        color: $primary;
        margin-bottom: 6px;
    }

    p {
        font-size: 32px;
        color: $text-muted;
        margin: 0;
    }
}
</style>
