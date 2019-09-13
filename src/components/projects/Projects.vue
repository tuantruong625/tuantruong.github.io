<template>
  <div class="container" id="projects">
    <h2 class="header-text projects-header">projects.</h2>
    <div class="project">
      <div class="project__card">
        <img class="project__image" src="@/assets/modeler-screen.png" alt="web">
      </div>
      <div class="project__detail">
        <span class="project__detail--header">BPMN Modeler</span>
        <p class="project__detail--paragraph">
          Open source project that models BPMN diagrams. Built as a package
          that is used in a larger application. This project is built using
          Vue, JointJs, and for the testing framework Cypress is used.
        </p>
        <div class="project__detail--links">
          <a href="https://github.com/ProcessMaker/modeler/" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'github' ]" />
            Source Code
          </a>
          <a href="https://www.behance.net/gallery/85420169/BPMN-Modeling" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'behance-square' ]" />
            Designs
          </a>
        </div>
      </div>
    </div>

    <div class="project">
      <div class="project__card">
        <img class="project__image" src="@/assets/gym-buddy-screen.png" alt="web">
      </div>
      <div class="project__detail">
        <span class="project__detail--header">Gym Buddy</span>
        <p class="project__detail--paragraph">
          Personal project, fitness application built using Vue and Firebase.
          Design created with Figma.
        </p>
        <div class="project__detail--links">
          <a href="https://github.com/tuantruong625/gym-buddy" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'github' ]" />
            Source Code
          </a>
          <a href="https://www.behance.net/gallery/85419805/Gym-Buddy" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'behance-square' ]" />
            Designs
          </a>
        </div>
      </div>
    </div>

    <div class="project">
      <div class="project__card">
        <img class="project__image" src="@/assets/forgoodness-cakes-screen.png" alt="web">
      </div>
      <div class="project__detail">
        <span class="project__detail--header">For Goodness Cakes</span>
        <p class="project__detail--paragraph">
          High fidelity mockup of a bakery shop built using Figma with mobile and desktop views.
        </p>
        <div class="project__detail--links">
          <a href="https://www.behance.net/gallery/85419339/For-Goodness-Cakes" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'behance-square' ]" />
            Designs
          </a>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project__card">
        <img class="project__image" src="@/assets/nord-ui-screen.png" alt="web">
      </div>
      <div class="project__detail">
        <span class="project__detail--header">UI Component Kit</span>
        <p class="project__detail--paragraph">
          High fidelity mockup of component kit that includes navigation bars, buttons,
          form controls, alerts, and cards. Built using Figma.
        </p>
        <div class="project__detail--links">
          <a href="https://www.behance.net/gallery/85419729/Nord-UI-Kit" class="project__detail--link">
            <font-awesome-icon class="project__detail--icon" :icon="[ 'fab', 'behance-square' ]" />
            Designs
          </a>
        </div>
      </div>
    </div>
    <h2 class="header-text contact-header" id="contact">contact.</h2>
  </div>
</template>

<script>
export default {
};
</script>

<style src="./projects.scss" lang="scss">
</style>
