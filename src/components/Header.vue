<template>
  <header class="header">
    <span class="header__logo">
      <img src="../assets/starter/logo-white.png" alt="logo">
    </span>
    <div class="header__text-box">
      <div class="heading-primary">
        <h1 class="heading-primary--main"> OUTDOORS</h1>
        <span class="heading-primary--sub"> is where life happens</span>
      </div>
      <a href="#" class="btn btn--white btn-animated">Discover our tours</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .header {
    height: 95vh;
    position: relative;
    background-image: linear-gradient(to right bottom, rgba($color-primary-light,.8), rgba($color-primary-dark,.8)),
                      url("../assets/starter/hero-small.jpg");
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    
    @media only screen and (min-resolution: 192dpi) and (min-width: 600px),
           //this works for safari
           only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 600px) {
      background-image: linear-gradient(to right bottom, rgba($color-primary-light,.8), rgba($color-primary-dark,.8)),
                        url("../assets/starter/hero.jpg");
    }

    @include respond(tab-port) {
      clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    }

    &__logo {
      position: absolute;
      top: 4rem;
      left: 4rem;

      img {
        height: 3.5rem;
      }
    }

    &__text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .btn-animated {
        animation: moveInBottom .5s ease-out 0.75s;
        animation-fill-mode: backwards;
      }
    }
  }
</style>