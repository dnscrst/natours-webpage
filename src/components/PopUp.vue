<template>
  <div class="popup" id="popup">
    <div class="popup__content">
      <div class="popup__left">
        <img src="../assets/starter/nat-8.jpg" alt="Tour photo" class="popup__img">
        <img src="../assets/starter/nat-9.jpg" alt="Tour photo" class="popup__img">
      </div>

      <div class="popup__right">
        <a href="#section-tours" class="popup__close">&times;</a>
        <h2 class="heading-secondary mrg-btm-med">Start booking now</h2>
        <h3 class="heading-tertiary mrg-btm-sml">Important &ndash; Please read these terms before booking</h3>
        <p class="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet. Sed risus pretium quam vulputate dignissim suspendisse. Tristique senectus et netus et malesuada. Tristique risus nec feugiat in fermentum posuere urna nec. Hac habitasse platea dictumst quisque sagittis purus sit. Mauris commodo quis imperdiet massa. Velit laoreet id donec ultrices. Libero volutpat sed cras ornare arcu dui vivamus arcu. Nibh cras pulvinar mattis nunc sed. Ut venenatis tellus in metus.
        </p>
        <a href="#" class="btn btn--green">Book now</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp"
}
</script>

<style lang="scss">

@import "../styles/main";

  .popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($black, .8);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all .4s;

    @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba($black, .3);
    }

    &__content {
      @include absCenter;
      width: 75%;
      background-color: $white;
      box-shadow: 0 2rem 4rem rgba($black, .2);
      border-radius: 3px;
      display: table;
      overflow: hidden;
      opacity: 0;
      transform: translate(-50% -50%) scale(.5);
    }

    &__left{
      width: 33.333333%;
      display: table-cell;
    }

    &__right {
      width: 66.666667%;
      display: table-cell;
      vertical-align: middle;
      padding: 3rem 5rem;
    }

    &__img {
      display: block;
      width: 100%;
    }

    &__text {
      font-size: 1.4rem;
      margin-bottom: 4rem;
      column-count: 2;
      column-gap: 4rem;
      column-rule: 1px solid $grey-light-2;
      hyphens: auto;
    }

    &:target {
      opacity: 1;
      visibility: visible;
    }

    &:target &__content {
      opacity: 1;
      transform: translate(-50% -50%) scale(1);
    }

    &__close {
      &:link,
      &:visited {
        color: $grey-2;
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        font-size: 3rem;
        text-decoration: none;
        display: inline-block;
      }

      :hover {
        color: $color-primary;
      }
    }
  }

</style>