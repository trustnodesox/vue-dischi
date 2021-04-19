Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    dischi: [],
    filter: ''

  },
  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      for (var i = 0; i < response.data.response.length; i++) {
        this.dischi.push(response.data.response[i])
      }
      for (var i = 0; i < this.dischi.length; i++) {
        console.log(this.dischi[i].poster)
      };

      console.log(response.data.response)


    });
  }
})
