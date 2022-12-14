<template>
  <div class="book-container">
    <div class="book">
      <h2 class="heading-secondary">start booking now!</h2>
      <form action="#" class="form">
        <div class="form__group">
          <input type="text"
                 id="name"
                 class="form__input"
                 placeholder="Full name"
                 required>
          <label for="name" class="form__label">Full name</label>
        </div>

        <div class="form__group">
          <input type="email"
                 id="email"
                 class="form__input"
                 placeholder="Email address"
                 required>
          <label for="email" class="form__label">Email address</label>
        </div>

        <div class="form__group">
          <div class="form__radio-group">
            <input type="radio"
                   class="form__radio-input"
                   id="small"
                   name="size">
            <label for="small" class="form__radio-label">
              <span class="form__radio-button"></span>
              Small tour group</label>
          </div>

          <div class="form__radio-group">
            <input type="radio"
                   class="form__radio-input"
                   id="large"
                   name="size">
            <label for="large" class="form__radio-label">
              <span class="form__radio-button"></span>
              Large tour group</label>
          </div>
        </div>

        <div class="form__group">
          <button class="btn btn--green">next step &rarr;</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseForm"
}
</script>

<style lang="scss">
  @import "../styles/main";

  .book-container {

    .book {
      background-image: linear-gradient( 105deg,
          rgba($white, 0.9) 0%,
          rgba($white, 0.9) 50%,
          transparent 50%),
      url("../assets/starter/nat-10.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba($black, .2);
      width: 100%;

      @include respond(tab-land) {
        background-image: linear-gradient( 105deg,
            rgba($white, 0.9) 0%,
            rgba($white, 0.9) 70%,
            transparent 70%),
        url("../assets/starter/nat-10.jpg");
      }

      @include respond(tab-port) {
        background-image: linear-gradient( 105deg,
            rgba($white, 0.9) 0%,
            rgba($white, 0.9) 100%),
        url("../assets/starter/nat-10.jpg");
      }

      h2 {
        margin: 5rem 0 0 6rem;

        @include respond(tab-port) {
          margin-left: 4rem;
        }
      }

      .form {
        width: 50%;

        @include respond(tab-land) {
          width: 70%;
        }

        @include respond(tab-port) {
          width: 100%;
          padding: 4rem;
        }

        &__group:not(:last-child) {
          margin-bottom: 2rem;
        }

        .btn {
          margin-top: 2rem;
        }
      }
    }
  }

</style>