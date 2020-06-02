<template>
    <div class="py_box"><slot></slot></div>
</template>

<script>
export default {
    name: 'Box',
    props: {}
}
</script>

<style lang="scss" scoped>
@import '@/design';

.py_box {
    background: $background;
    padding: 15px;
    border-radius: 6px;
    // @include box-shadow;
}
</style>
