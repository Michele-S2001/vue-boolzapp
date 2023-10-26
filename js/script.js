// boolzap

const { createApp } = Vue;

createApp({

  data() {
    return {
      message: 'hello word'
    }
  },

  methods: {
    //funzioni
  },

  mounted() {
    console.log('>> vue working <<');
  }
}).mount('#app')