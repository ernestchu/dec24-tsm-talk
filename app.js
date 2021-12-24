const app = Vue.createApp({
  el: '#app',
  data () {
    return {
      audios: [
        '0.3hz',
        '0.15hz',
        'music',
        'linear',
        'constant'
      ],

    }
  }
})

app.mount('#app')
