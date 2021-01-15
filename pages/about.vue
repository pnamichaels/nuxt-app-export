<template>
  <section class="home">
    <h1 class="home__heading">About Nuxtjs Directory Structure</h1>
    <div class="directories">
      <div class="directory__container" v-for="directory in directories" :key="directory.id" @click.prevent="storeDirectoryInfo(directory)">
        <p class="directory__name">
          <nuxt-link :to="{ name: 'id', params: { id: directory.id, dir: directory } }">{{ directory.name }}</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "about-nuxt",
  data() {
    return {
      directories: [
        {
          id: 0,
          name: "The Assets Directory",
          info: "By default, Nuxt uses vue-loader, file-loader and url-loader webpack loaders for strong assets serving. You can also use the static directory for static assets. This folder is for un-compiled files such as images, font files, SASS, LESS or JavaScript files"
        },
        {
          id: 1,
          name: "The Components Directory",
          info: "This is where global Vue.js page elements are stored"
        },
        {
          id: 2,
          name: "The Layouts Directory",
          info: "The layouts Directory includes you application layouts. Layouts are used to change the look and feel of your page or application (for example by inluding a sidebar). Layouts are a huge help when you want to change the look and feel of your Nuxt.js app.",
        },
        {
          id: 3,
          name: "The Middleware Direcory",
          info: "The middleware directory contains application middleware. Middleware lets you define functions that can be run before rendering either a page or a group of pages (layouts)."
        },
        {
          id: 4,
          name: "The Pages Directory",
          info: "The pages directory contains your applications views and routes. The framework reads all the .vue files in this directory and creates the application router."
        },
        {
          id: 5,
          name: "The Plugins Directory",
          info: "The plugins directory contains your JavaScript plugins that you want to run before instantiating the root Vue.js Application"
        },
        {
          id: 6,
          name: "The Static Directory",
          info: "The static directory is directly mapped to the server root (/static/robots.txt is accessible under https://localhost:3000/robots.txt) and contains files that likely wont be chaged (e.g. the favicon). If you dont want to use Webpack assets from the assets directory, you can create and use the static directory"
        },
        {
          id: 7,
          name: "The Store Directory",
          info: "the store directory contains your Vuex Store Files. the Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store. Using a store to manage the state is important for every big application. Thats why Nuxt.js implements Vuex in its core."
        }
      ]
    };
  },
  methods: {
    storeDirectoryInfo(dir) {
      this.$store.commit("saveInfo", {
        directory: dir
      });
    }
  }
};
</script>
<style>
</style>