<template>
    <div class="random-lunch">
        <a v-for="cafe of cafes" v-bind:key="cafe.id"> {{ cafe.name }}</a>
    </div>
</template>

<script>
export default {
    props: {
        cafes: {
      type: Object,
      required: true,
    },
    }
}
</script>