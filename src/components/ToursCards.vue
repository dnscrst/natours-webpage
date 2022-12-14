<template>
  <div class="cards flex-between mrg-0-auto">

    <div v-for="card in toursCards"
         :key="card.title"
         class="card"
         :class="card.class">

      <div class="card__side--front">

        <div class="card__header"></div>
        <h4 class="card__heading ">
          <span class="card__heading-span"> {{card.title}}</span>
        </h4>

        <ul class="card__list mrg-0-auto">
          <li>{{ card.days }} day tour</li>
          <li>Up to {{ card.people }} people</li>
          <li>{{ card.guides }} tour guides</li>
          <li>Sleep in {{ card.sleep }}</li>
          <li>Difficulty: {{ card.difficulty }}</li>
        </ul>

      </div>

      <div class="card__side--back">
        <div class="card__price center-text">
          <p class="card__price--only">ONLY</p>
          <p class="card__price--value">${{card.price}}</p>
        </div>
        <router-link to="#popup" class="btn btn--white">Book now!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ToursCards",
    props: {
      toursCards: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .cards {
     max-width: 70vw;

    .card {
       width: 30%;
       height: 50rem;
       position: relative;
       transition: all .8s;
       perspective: 150rem;

      &__side--front,
      &__side--back {
           position: absolute;
           top: 0;
           left: 0;
           transition: all .8s ease;
           height: 100%;
           width: 100%;
           backface-visibility: hidden;
           border-radius: 3px;
           overflow: hidden;
           box-shadow: 0 1.5rem 4rem rgba($black, .15);
         }

      &:hover .card__side--front {
           transform: rotateY(-180deg);
         }

      &:hover .card__side--back {
           transform: rotateY(0deg);
         }

      //FRONT SIDE STYLING

      &__side--front {
        background-color: white;
      }

      &__header {
        background-blend-mode: screen;
        background-size: cover;
        height: 23rem;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        position: relative;
      }

      &__heading {
        width: 75%;
        font-size: 2.8rem;
        font-weight: 300;
        text-align: right;
        text-transform: uppercase;
        color: $white;
        position: absolute;
        top: 12rem;
        right: 2rem;

        .card__heading-span {
          padding: 1rem 1.5rem;
          box-decoration-break: clone;
        }
      }

      &__list {
        list-style: none;
        width: 80%;

        li {
          text-align: center;
          font-size: 1.5rem;
          padding: 1rem;

          &:not(:last-child) {
            border-bottom: 1px solid $grey-light-2;
          }
        }
      }

      //BACK SIDE STYLING

      &__side--back {
        transform: rotateY(180deg);
        padding: 4rem 3rem;
      }

      &__price {
        color: $white;
        margin: 7rem 0 8rem ;

        &--only {
          font-size: 1.4rem;
        }

        &--value {
          font-size: 6rem;
          font-weight: 100;
        }
      }
    }

    //COLOR CLASSES STYLING

    .orange {
      .card__side--front {
        .card__header {
          background-image: linear-gradient(to right bottom, $orange-light, $orange-dark),
                            url("../assets/starter/nat-5.jpg");
        }
      }

      .card__side--back,
      .card__heading-span {
        background-image: linear-gradient(to right bottom, rgba($orange-light, .85), rgba($orange-dark, .85));
      }
    }

    .green {
      .card__side--front {
        .card__header {
          background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark),
                            url("../assets/starter/nat-6.jpg");
        }
      }

      .card__side--back,
      .card__heading-span {
        background-image: linear-gradient(to right bottom, rgba($color-primary-light, .85), rgba($color-primary-dark, .85));
      }
    }

    .blue {
      .card__side--front {
        .card__header {
          background-image: linear-gradient(to right bottom, $blue-light, $blue-dark),
                            url("../assets/starter/nat-7.jpg");
        }
      }

      .card__side--back,
      .card__heading-span {
        background-image: linear-gradient(to right bottom, rgba($blue-light, .85), rgba($blue-dark, .85));
      }
    }
  }
  @media only screen and (max-width: 56.25em)
         //only screen and (hover: none)
  {
    .cards {
      flex-wrap: wrap;
      flex-direction: row;

      .card {
        height: auto;
        width: 80%;
        margin: 0 auto 5rem;
        border-radius: 3px;
        background-color: white;
        box-shadow: 0 1.5rem 4rem rgba($black, .15);

        @include respond(phone) {
          width: 100%;
        }

        &__side--front,
        &__side--back {
          position: relative;
          height: auto;
          box-shadow: none;
        }

        &:hover .card__side--front {
          transform: rotateY(0deg);
        }

        &__side--back {
          transform: rotateY(0);
          padding: 3rem 0;
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        &__price {
          margin: 1rem 0 2rem;

          &--value {
            font-size: 6rem;
          }
        }
      }
    }
  }

</style>