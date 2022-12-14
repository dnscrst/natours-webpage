<template>
  <div class="stories-cards">
    <div v-for="story in storiesCards"
         :key="story.name"
         class="story">
      <figure class="story__shape">
        <img :src=story.img alt="profile-image">
        <figcaption class="center-text">{{story.name}}</figcaption>
      </figure>
      <div class="story__text">
        <h3 class="heading-tertiary mrg-btm-sml">{{story.title}}</h3>
        <p>{{story.body}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "StoriesCards",
  props: ['storiesCards']
}
</script>

<style lang="scss">
  @import "../styles/main";

  .stories-cards {

    .story {
      width: 55%;
      box-shadow: 0 3rem 6rem rgba($black, .1);
      background-color: rgba($white, .6);
      border-radius: 3px;
      padding: 6rem 6rem 6rem 9rem;
      margin: 0 auto 6rem;
      font-size: $default-font-size;
      transform: skewX(-12deg);

      @include respond(tab-port) {
        width: 80%;
        padding: 4rem 4rem 4rem 7rem;
      }

      @include respond(phone) {
        transform: skewX(0);
        padding: 3rem 3rem 3rem 5rem;
      }

      &__shape {
        width: 15rem;
        height: 15rem;
        float: left;
        shape-outside: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem) skewX(12deg);
        position: relative;

        @include respond(phone) {
          transform: translateX(-3rem) skewX(0);
        }

        img {
          height: 100%;
          transform: translateX(-4rem) scale(1.4);
          transition: all .4s;
        }

        figcaption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 20%);
          color: $white;
          text-transform: uppercase;
          font-size: 1.7rem;
          opacity: 0;
          transition: all .4s;
          backface-visibility: hidden;
        }
      }

      &__text {
        transform: skewX(12deg);

        @include respond(phone) {
          transform: skewX(0);
        }
      }
      &:hover  {
        img {
          transform: translateX(-4rem) scale(1);
          filter: blur(3px) brightness(80%);
        }

        figcaption {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
      }
    }

  }

</style>