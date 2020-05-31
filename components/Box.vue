<template>
    <div class="py_box"><slot></slot></div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name: 'Box',
    props: {}
})
</script>

<style lang="scss" scoped>
@import '@/design';

.py_box {
    background: lighten($color: $background, $amount: 7.5%);
    padding: 28px;
    border-radius: 6px;
    @include box-shadow;
}
</style>
