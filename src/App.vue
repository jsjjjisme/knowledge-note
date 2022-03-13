<template>
    <section class="main">
        {{name}}This where it begins;
        <CheckCircleOutlined />
        <a-button type="primary" @click="clickMe">HI!</a-button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { CheckCircleOutlined } from "@ant-design/icons-vue"

export default defineComponent({
    name: "app",
    components: { CheckCircleOutlined},
    setup() {
        const name = "[knowledge-notes]"
        const clickMe = () => alert('HELLO WORLD!!!')
        return {
            name,
            clickMe
        }
    },
})
</script>

<style>
</style>