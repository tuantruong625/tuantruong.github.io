<template>
  <div class="hero">
    <h1 class="hero__heading">
      Hi there, My name is Tuan Truong.
      <a href="#"
        class="hero__typewrite"
        data-period="2000"
        data-type='["I love designing" , "and crushing code."]'>
        <span class="wrap"></span>
      </a>
    </h1>
    <a
      href="#projects"
      class="btn btn---white btn--animated">
      Check out my work 👇
    </a>
    <div class="social social--animated" id="about">
      <a href="https://www.linkedin.com/in/tuanntruong/"><font-awesome-icon class="social__links" :icon="[ 'fab', 'linkedin' ]" /></a>
      <a href="https://github.com/tuantruong625"><font-awesome-icon class="social__links" :icon="[ 'fab', 'github' ]" /></a>
      <a href="https://www.behance.net/tuanntruong/"><font-awesome-icon class="social__links" :icon="[ 'fab', 'behance-square' ]" /></a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      toRotate: null,
      el: null,
      loopNum: 0,
      period: parseInt(this.period, 10) || 5000,
      text: '',
      isDeleting: false,
    };
  },
  methods: {
    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      const that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 900;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    textType(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 5000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    },
  },
  mounted() {
    const elements = document.getElementsByClassName('hero__typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        this.textType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.hero__typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);
  },
};
</script>

<style src="./hero.scss" lang="scss">
</style>
