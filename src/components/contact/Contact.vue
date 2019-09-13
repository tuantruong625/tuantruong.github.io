<template>
  <div class="container contact">
    <img class="contact__image" src="@/assets/undraw_envelope_n8lc.png" alt="web">
    <form class="contact__form" method="POST" action="https://formspree.io/tuan.truong.dsgn@gmail.com">
      <div class="contact__form-group">
        <label for="name" class="contact__form-label">
          Name
        </label>
        <input v-model="name" type="text" name="name" class="contact__form-input">
      </div>

      <div class="contact__form-group">
        <label for="email" class="contact__form-label">
          Email
        </label>
        <input v-model="email" type="text" name="email" class="contact__form-input">
      </div>

      <div class="contact__form-group">
        <label for="message" class="contact__form-label">
          Message
        </label>
        <textarea
          id=""
          v-model="message"
          name="message"

          rows="5"
          class="contact__form-text-area"
        />
      </div>

      <button class="contact__form-submit" type="submit">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
};
</script>

<style>
.contact {
  display: grid;
  grid-gap: 20px;
  margin-top: 1rem;
  grid-template-areas:
  'contact contact';
  justify-items: center;
  align-items: center;
}

.contact__image {
  width: 25rem;
  height: auto;
}

.contact__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.contact__form-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
}

.contact__form-label {
  color: #3B4252;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
}

.contact__form-input {
  width: 15rem;
  border-radius: 10px;
  outline: none;
  padding: 1rem;
}

.contact__form-text-area {
  border-radius: 10px;

}

.contact__form-submit {
  margin: 0 auto;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background: #3B4252;
  color: #fff;
}

@media (max-width: 700px) {
  .contact {
    grid-template-areas:
      'contact';
  }

  .contact__image {
    width: 20rem;
    height: auto;
  }
}

textarea {
  resize: none;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
}

@media (max-width: 500px) {
  .contact {
    grid-template-areas:
      'contact';
  }

  .contact__image {
    width: 15rem;
    height: auto;
  }

}

.contact-header {
  margin-left: 1rem;
  margin-bottom: 0;
}

</style>
