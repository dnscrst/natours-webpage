<template>
  <div class="base-article">
    <div v-for="item in article" :key="item.title">
      <h3 class="heading-tertiary">{{ item.title }}</h3>
      <p class="paragraph">{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseArticle",
    props: {
      article: {
        type: Array,
        require: true
      }
    }
  }
</script>
