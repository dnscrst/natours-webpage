<template>
  <footer class="footer">
    <div class="footer__logo-box center-text">
      <picture class="footer__logo">
        <source srcset="../assets/starter/logo-green-small-1x.png 1x, ../assets/starter/logo-green-small-2x.png 2x"
                media="(max-width: 37.5em)">
        <img srcset="../assets/starter/logo-green-1x.png 1x, ../assets/starter/logo-green-2x.png 2x"
             alt="full logo">
      </picture>
    </div>
    <div class="footer__content flex-between center-text mrg-0-auto">
          <nav class="footer__navigation flex-between">
            <router-link to="/" class="footer__link">Company</router-link>
            <router-link to="/" class="footer__link">Contact us</router-link>
            <router-link to="#" class="footer__link">Careers</router-link>
            <router-link to="#" class="footer__link">Privacy policy</router-link>
            <router-link to="#" class="footer__link">Terms</router-link>
          </nav>

        <p class="footer__copyright">
          Built by Denisa Cirstea within Advanced CSS and Sass online course. Copyright &copy; Denisa Cirstea, credit to Jonas Schmedtmann.
        </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
@import "../styles/main";

 .footer {
   background-color: $grey-dark-1;
   padding: 10rem 0;
   font-size: 1.4rem;
   color: $grey-light-1;

   @include respond(tab-port) {
     padding: 6rem 0;
     font-size: 1.2rem;
   }

   &__logo-box {
     margin-bottom: 8rem;

     @include respond(phone) {
       margin-bottom: 6rem;
     }
   }

   &__logo {
     width: 10rem;
     height: auto;
   }

   &__content {
      width: 70vw;

     @include respond(phone) {
       width: 75vw;
       flex-wrap: wrap;
     }
   }
   &__navigation {
     width: 45%;
     list-style: none;
     border-top: 1px solid $grey;
     padding-top: 2rem;

     @include respond(phone) {
       width: 100%;
       margin-bottom: 5rem;
     }
   }

   &__link {
     &:link,
     &:visited {
       color: inherit;
       background-color: $grey-dark-1;
       text-decoration: none;
       text-transform: uppercase;
       height: 50%;
     }

     &:hover,
     &:active {
       color: $color-primary;
       box-shadow: 0 1rem 2rem rgba($black, .4);
     }
   }

   &__copyright {
     width: 45%;
     border-top: 1px solid $grey;
     padding-top: 2rem;

     @include respond(phone) {
       width: 100%;
     }
   }
 }

</style>