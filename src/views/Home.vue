<template>
  <div class="md:py-10 py-52 text-white">
    <div class="flex justify-center mx-auto animate__animated animate__fadeIn">
      <img
        src="profile_pic.jpg"
        class="md:w-1/4 md:h-1/2 w-2/5 h-7/8 rounded-full"
        alt="Daffa's Profile Picture"
      />
    </div>

    <!-- Section name and tagline -->
    <div
      class="flex justify-center pt-5 pb-2 animate__animated animate__fadeIn"
    >
      <h1 class="md:text-5xl font-medium">Muhammad Daffa Razan</h1>
    </div>

    <div class="flex justify-center animate__animated animate__fadeIn">
      <h1 class="md:text-xl text-sm font-medium">
        Flutter Mobile Engineer
      </h1>
    </div>
    <!-- End Section name and tagline -->

    <div id="arrow">
      <a href="#introduction">
        <img
          src="down-arrow.svg"
          class="
            flex
            mx-auto
            md:py-16
            pt-24
            pb-52
            md:w-1/12
            md:h-1/12
            w-2/12
            h-2/12
            animate-bounce
          "
          alt="arrowdown"
      /></a>
    </div>

    <!-- Section about -->
    <div id="introduction" class="md:py-10 pt-16">
      <h1 class="text-green-500 md:text-5xl text-xl pb-10" data-aos="fade-up">
        Intro
      </h1>
      <h1
        class="md:text-xl text-sm aos-init aos-animate mb-5"
        data-aos="fade-up"
      >
        Hello everyone! I'm
        <span class="text-green-500">Muhammad Daffa Razan</span>, a passionate Mobile Developer with 3 years of hands-on experience crafting engaging and efficient Flutter apps. Over the past 4+ years in mobile development, I've honed my skills, focusing primarily on Flutter. I've built apps using Clean Architecture, making use of BLoC, Provider, and GetX to ensure clean, scalable code and top-notch performance.
      </h1>
      <h1
        class="md:text-xl text-sm aos-init aos-animate mb-5"
        data-aos="fade-up"
      >
      I’ve successfully launched apps on both the Playstore and App Store, reaching users around the globe. Alongside mobile development, I have an advanced certificate in Kotlin and enjoy diving into iOS development during my spare time. My expertise also extends to web development, where I've worked with frameworks like Laravel, CodeIgniter, React, and Vue.
      </h1>
      <h1
        class="md:text-xl text-sm aos-init aos-animate mb-5"
        data-aos="fade-up"
      >
      I'm always excited to connect with like-minded professionals, so feel free to reach out—whether it’s to collaborate or explore opportunities together!
      </h1>
    </div>
    <!-- End Section about -->

    <!-- Download CV Section -->

    <div class="mb-12" data-aos="fade-up">
      <a
        href="https://docs.google.com/document/d/10QG-N5_X_YgFflXU3A970p7OFIrb85j7XfnXuVh7_yw/edit?usp=sharing"
        target="_blank"
        class="
          md:w-2/12
          w-1/4
          md:text-xl
          text-sm
          md:py-2
          md:px-4
          py-1
          px-2
          font-semibold
          flex
          justify-center
          rounded-full
          bg-green-500
          hover:bg-green-700
          text-white
          transform
          transition
          duration-500
          hover:scale-125
        "
        type="submit"
      >
        See CV
      </a>
    </div>

    <!-- Section expertise -->
    <div class="">
      <h1
        class="text-green-500 md:text-5xl text-xl md:pb-10 pb-5"
        data-aos="fade-up"
      >
        Expertise
      </h1>

      <div id="webexpertise">
        <h1
          class="text-green-500 md:text-3xl text-md md:pb-5 pb-5"
          data-aos="fade-up"
        >
          Web Dev
        </h1>
        <div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left">
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/html.svg"
            alt="html logo"
          />
          <img class="md:w-2/5 w-6/12" src="expertise/css.svg" alt="css logo" />
          <img class="md:w-2/5 w-6/12" src="expertise/js.svg" alt="js logo" />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/bootstrap.svg"
            alt="bootstrap logo"
          />
        </div>

        <div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left">
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/laravel.svg"
            alt="laravel logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/ci.svg"
            alt="code igniter logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/django.svg"
            alt="django logo"
          />
          <img class="md:w-2/5 w-6/12" src="expertise/vue.svg" alt="vue logo" />
        </div>

        <div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left">
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/nextjs.svg"
            alt="next js logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/tailwind.svg"
            alt="tailwind css logo"
          />
        </div>
      </div>

      <div id="mobile_expertise">
        <h1
          class="text-green-500 md:text-3xl text-md md:pb-5 pb-5"
          data-aos="fade-up"
        >
          Mobile Dev
        </h1>
        <div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left">
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/kotlin.png"
            alt="kotlin logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/flutter.png"
            alt="bootstrap logo"
          />
        </div>
      </div>

      <div id="designexpertise">
        <h1
          class="text-green-500 md:text-3xl text-md md:pb-5 pb-5"
          data-aos="fade-up"
        >
          Design
        </h1>
        <div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left">
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/ai.svg"
            alt="adobe illustrator logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/ps.svg"
            alt="adobe photoshop logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/xd.svg"
            alt="adobe xd logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/figma.svg"
            alt="figma logo"
          />
        </div>
      </div>

      <div id="languageexpertise">
        <h1
          class="text-green-500 md:text-3xl text-md md:pb-5 pb-5"
          data-aos="fade-up"
        >
          Programming Language
        </h1>
        <div
          class="grid grid-cols-4 gap-5 md:py-10 pt-5 pb-2"
          data-aos="flip-left"
        >
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/python.svg"
            alt="python logo"
          />
          <img
            class="md:w-2/5 w-6/12"
            src="expertise/java.svg"
            alt="java logo"
          />
        </div>
      </div>
    </div>
    <!-- End Section expertise -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
