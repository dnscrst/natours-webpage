<template>
  <div class="feature-boxes flex-between">
    <div v-for="item in featureContent"
         :key="item.title"
         class="feature-box center-text">
      <img :src=item.src
            alt="feature-icon"
            class="feature-box__icon">
      <h3 class="heading-tertiary mrg-btm-sml ">{{item.title}}</h3>
      <p class="feature-box__text">{{ item.body }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "FeatureBox",
  props: {
    featureContent: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .feature-boxes {
    
    @include respond(tab-land) {
      flex-wrap: wrap;
      flex-direction: row;
    }

    .feature-box {
      max-width: 22%;
      height: 310px;
      background-color: rgba($white, .8);
      font-size: 1.5rem;
      padding: 2.5rem;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba($black, .15);
      transition: transform .3s;

      @include respond(tab-land) {
        max-width: 45%;
        height: auto;
        margin: 0 auto 6rem;

        &__text {
          margin-bottom: 2.5rem;
        }
      }

      @include respond(phone) {
        max-width: 90%;
        height: auto;
        padding-bottom: 5rem;
        margin-bottom: 3rem;
      }

      &__icon {
        width: 6rem;
        margin: 1.5rem 0 2.5rem;
      }

      &:hover {
        transform: translateY(-1.5rem) scale(1.03);
      }
    }
  }

</style>