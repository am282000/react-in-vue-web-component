<template>
  <div>
    <h1>ECAL SCHEDULAR (VUE)</h1>
    <my-web-component
      message="I am prop from VUE to REACT"
      :random="randomMsg"
      @myEvent="logger"
    ></my-web-component>
  </div>
</template>

<script>
// In a Vue 2 component
export default {
  name: "App",
  components: {},
  data() {
    return {
      randomMsg:
        "Hooray !! We can embed this new Resource Schedule from React to Vue like this.",
    };
  },
  methods: {
    logger(event) {
      //Event from React
      console.log("Event from React: ", event.detail.count);
    },
  },
};
</script>
