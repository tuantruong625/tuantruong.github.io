<template>
  <div id="app">
    <nav class="nav">
      <span class="nav__logo">
        truong.
      </span>
      <div class="nav__menu">
        <span @click="toggleNav =! toggleNav">
          -----
        </span>
      </div>
      <div v-show="toggleNav" class="nav__links">
        <a href="#about" class="nav__link">
          <span>
            about
          </span>
        </a>
        <a href="#skills" class="nav__link">
          <span>
            skills
          </span>
        </a>
        <a href="#projects" class="nav__link">
          <span>
            projects
          </span>
        </a>
        <a href="#contact" class="nav__link">
          <span>
            <button class="nav__button">contact</button>
          </span>
        </a>
      </div>
    </nav>

    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/hero/Hero.vue';
import About from '@/components/about/About.vue';
import Skills from '@/components/skills/Skills.vue';
import Project from '@/components/projects/Projects.vue';
import Contact from '@/components/contact/Contact.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    Hero,
    About,
    Skills,
    Project,
    Contact,
    Footer,
  },
  data() {
    return {
      toggleNav: true,
      windowWidth: null,
    };
  },
  watch: {
    windowWidth(windowWidth) {
      if (windowWidth > 700) {
        this.toggleNav = true;
      } else {
        this.toggleNav = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.getWindowWidth);
    this.getWindowWidth();
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
  },
};
</script>

<style lang="scss">
#app {
  margin: auto;
}

.nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background: #121b30;
  color: #e9ecef;
  width: 100%;
  position: fixed;
  padding: 1rem 0;
  z-index: 5;

  &__button {
    padding: 0.5rem;
    border: 3px solid #3B4252;
    border-radius: 5px;
    width: 6rem;
    background: #121b30;
    color: #e9ecef;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  &__logo {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    margin-left: 1rem;
  }
}

.nav__links {

  & a {
    color:#e9ecef;
    text-decoration: none;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav__link {
  margin-left: 2rem;
}

.nav__menu {
  display: none;
  cursor: pointer;
}

@media(max-width: 700px) {
  .nav__links {
    position: absolute;
    z-index: 5;
    top: 3rem;
    right: 0;
    flex-direction: column;
    text-align: right;
    background: #121b30;
    width: 100%;
    padding: 0 2rem 0.5rem 2rem;
    cursor: pointer;
  }

  .nav__link {
    padding: 1rem 0 1rem 1rem;
  }

  .nav__menu {
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
  }
  .nav {
    &__button {
      margin-right: 0;
    }
  }

}
</style>
