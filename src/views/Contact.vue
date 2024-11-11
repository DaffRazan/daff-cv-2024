<template>
  <div class="h-screen">
    <h1
      class="
        pt-10
        flex
        justify-center
        font-bold
        md:text-5xl
        text-xl text-yellow-400
      "
    >
      get in touch with me &#128516;
    </h1>

    <div
      class="grid md:grid-cols-4 grid-cols-2 md:mt-20 mt-5"
      data-aos="flip-left"
    >
      <a href="https://github.com/DaffRazan" target="_blank"
        ><img
          class="
            py-5
            md:w-1/3
            w-1/4
            mx-auto
            transform
            transition
            duration-500
            hover:scale-125
          "
          src="contact/github.svg"
          alt=""
      /></a>
      <a href="mailto:daffarazan17@gmail.com" target="_blank">
        <img
          class="
            py-5
            md:w-1/3
            w-1/4
            mx-auto
            transform
            transition
            duration-500
            hover:scale-125
          "
          src="contact/gmail.svg"
          alt=""
      /></a>
      <a href="https://www.linkedin.com/in/daffarazan/" target="_blank">
        <img
          class="
            py-5
            md:w-1/3
            w-1/4
            mx-auto
            transform
            transition
            duration-500
            hover:scale-125
          "
          src="contact/linkedin.svg"
          alt=""
      /></a>
      <a href="https://www.instagram.com/daffrazan/" target="_blank">
        <img
          class="
            py-5
            md:w-1/3
            w-1/4
            mx-auto
            transform
            transition
            duration-500
            hover:scale-125
          "
          src="contact/instagram.svg"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>