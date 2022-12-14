<template>
  <div class="home">
    <HambMenu/>

    <Header/>

    <main class="main">

      <section class="section-about">
        <div class="center-text mrg-btm-big">
          <h2 class="heading-secondary">Exciting tours for adventurous people</h2>
        </div>
        <div class="section-about__content flex-between mrg-0-auto">
          <div class="section-about__text">
            <BaseArticle :article="aboutArticle"/>
            <router-link to="/"
                         class="btn-text">
              Learn more &rarr;
            </router-link>
          </div>
          <div class="section-about__gallery">
            <div class="gallery">
              <img src="../assets/starter/nat-1-large.jpg"
                   alt="img-1"
                   class="gallery__photo gallery__photo--p1">
              <img src="../assets/starter/nat-2-large.jpg"
                   alt="img-2"
                   class="gallery__photo gallery__photo--p2">
              <img src="../assets/starter/nat-3-large.jpg"
                   alt="img-3"
                   class="gallery__photo gallery__photo--p3">
            </div>
          </div>
        </div>
      </section>

      <section class="section-features">
        <FeatureBox :feature-content="featureContent"
                    class="section-features__content mrg-0-auto"/>
      </section>

      <section class="section-tours center-text" id="section-tours">
        <div class="center-text mrg-btm-big">
          <h2 class="heading-secondary ">Most popular tours</h2>
        </div>
        <ToursCards :tours-cards="toursCards"/>
        <div class="section-tours__btn center-text mrg-top-huge">
          <router-link to="#" class="btn btn--green">Discover all tours</router-link>
        </div>
      </section>

      <PopUp/>

      <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="../assets/starter/video.mp4" type="video/mp4">
            <source src="../assets/starter/video.webm" type="video/webm">
            Your browser is not supported!
<!--            this video is downloaded from coverr-->
          </video>
        </div>
        <div class="center-text mrg-btm-big">
          <h2 class="heading-secondary">We make people genuinely happy</h2>
        </div>
        <StoriesCards :stories-cards="storiesCards"/>
        <div class="center-text">
          <router-link to="#" class="btn-text">Read all stories &rarr;</router-link>
        </div>
      </section>

      <section class="section-book center-text">
        <BookForm/>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>

  import Header from "@/components/Header";
  import BaseArticle from "@/components/BaseArticle";
  import FeatureBox from "@/components/FeatureBox";
  import ToursCards from "@/components/ToursCards";
  import StoriesCards from "@/components/StoriesCards";
  import BookForm from "@/components/BookForm";
  import Footer from "@/components/Footer";
  import HambMenu from "@/components/HambMenu";
  import PopUp from "@/components/PopUp";
  export default {
    name: 'HomeView',

    components: {
      PopUp,
      HambMenu,
      StoriesCards,
      ToursCards,
      FeatureBox,
      Header,
      BaseArticle,
      BookForm,
      Footer,
    },

    computed: {

      aboutArticle () {
        return this.$store.state.aboutArticle
      },

      featureContent () {
        return this.$store.state.featureContent
      },

      toursCards () {
        return this.$store.state.toursCards
      },

      storiesCards () {
        return this.$store.state.storiesCards
      }
    }
}
</script>

<style lang="scss">
  @import "../styles/main";
  .home {

    .section-about {
      background-color: $grey-light-1;
      padding: 25rem 0;
      margin-top: -20vh;

      @include respond(tab-port){
        padding: 20rem 3rem;
      }

      .section-about__content {
        max-width: 70vw;

        @include respond(tab-port) {
          flex-wrap: wrap;
        }

        .section-about__gallery {
          width: 47%;

          @include respond(tab-port) {
            display: none;
          }

          .gallery {
            position: relative;

            &__photo {
              width: 55%;
              box-shadow: 0 1.5rem 4rem rgba($black, .4);
              position: absolute;
              z-index: 10;
              transition: all .2s ease;
              outline-offset: 2rem;

              &--p1 {
                left: 0;
                top: -2rem;
              }

              &--p2 {
                right: 0;
                top: 2rem;
              }

              &--p3 {
                left: 20%;
                top: 10rem;
              }

              &:hover {
                outline: 1rem solid $color-primary;
                transform: scale(1.07) translateY(-.5rem);
                box-shadow: 0 2.5rem 4rem rgba($black, .5);
                z-index: 20;
              }
            }

            &:hover .gallery__photo:not(:hover) {
              transform: scale(.9);
            }
          }
        }

        .section-about__text {
          width: 47%;

          @include respond(tab-port) {
            width: 70vw;
          }

          .heading-tertiary {
            margin-bottom: 1.5rem;
          }
        }
      }
    }

    .section-features {
      padding: 18rem 0;
      background-image: linear-gradient(to right bottom, rgba($color-primary-light,.8), rgba($color-primary-dark,.8)),
                        url("../assets/starter/nat-4.jpg");
      background-size: cover;
      margin-top: -10rem;
      transform: skewY(-7deg);

      @include respond(tab-port) {
        padding: 13rem 0 10rem;
      }

      &__content {
        max-width: 70vw;
        transform: skewY(7deg);
      }
    }

    .section-tours {
      background-color: $grey-light-1;
      padding: 25rem 0 15rem;
      margin-top: -10rem;

      @include respond(tab-port) {
        padding: 20rem 0 8rem;
      }

      &__btn {
        @include respond(tab-port) {
          margin-top: 3rem;
        }
      }
    }

    .section-stories {
      position: relative;
      padding: 15rem 0;

      @include respond(phone) {
        padding: 8rem 0;
      }
    }

    .section-book {
      padding: 10%;
      background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
      justify-content: center;

      .book-container {
        text-align: left;
      }
    }
  }
</style>
