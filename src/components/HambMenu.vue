<template>
  <div class="menu">
    <input type="checkbox" 
           class="menu__checkbox"
           id="menu-toggle">
    <label for="menu-toggle" class="menu__button">
      <span class="menu__icon">&nbsp;</span>
    </label>
    <div class="menu__background"></div>
    <nav class="menu__nav">
      <ul>
        <li><router-link to="#" class="menu__link">About Natous</router-link></li>
        <li><router-link to="#" class="menu__link">Your benefits</router-link></li>
        <li><router-link to="#" class="menu__link">Popular tours</router-link></li>
        <li><router-link to="#" class="menu__link">Stories</router-link></li>
        <li><router-link to="#" class="menu__link">Book now</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HambMenu"
}
</script>

<style lang="scss">
@import "../styles/main";

  .menu {
    &__checkbox {
      display: none;
    }

    &__button {
      background-color: $white;
      height: 7rem;
      width: 7rem;
      position: fixed;
      top: 6rem;
      right: 6rem;
      border-radius: 50%;
      z-index: 2000;
      box-shadow: 0 1rem 3rem rgba($black, .1);
      text-align: center;
      cursor: pointer;

      @include respond(tab-port) {
        top: 3rem;
        right: 3rem;
      }
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      z-index: 1000;
      background-image: radial-gradient($color-primary-light, $color-primary-dark);
      transition: transform .7s cubic-bezier(0.86, 0, 0.07, 1);

      @include respond(tab-port) {
        top: 3.5rem;
        right: 3.5rem;
      }
    }

    &__nav {
      height: 100vh;
      width: 0;
      opacity: 0;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1500;
      vertical-align: middle;
      transition: all .7s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      ul {
        @include absCenter;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        li {
          margin: .5rem;
          list-style: none;
        }
       }
      }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        text-align: center;
        font-size: 3rem;
        font-weight: 300;
        color: $white;
        text-transform: uppercase;
        padding: 1rem 2rem;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $white 50%);
        background-size: 230%;
        transition: all .4s;

        @include respond(phone) {
          font-size: 2.5rem;
          padding: 1rem 1rem;
        }

        &:hover,
        &:active {
          background-position: 100%;
          color: $color-primary;
          transform: translateX(1rem);
        }
      }
    }

    //FUNCTIONALITY

    &__checkbox:checked ~ &__background {
      transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
      opacity: 1;
      width: 100%;
    }

    //ICON

    &__icon {
      position: relative;
      margin-top: 3.5rem;

      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        background-color: $grey-dark-1;
        display: inline-block;
    }
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        transition: all .2s;
      }

      &::before { top: -.8rem }
      &::after { top: .8rem }
    }

    &__button:hover &__icon::before {
      top: -1rem;
    }

    &__button:hover &__icon::after {
      top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
      background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
      top: 0;
      transform: rotate(-135deg);
    }
  }
</style>