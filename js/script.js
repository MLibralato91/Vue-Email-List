const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo: 'esperimento API Email',
      rndEmail: [],
      basePath: 'https://flynn.boolean.careers/exercises/api/',
      complete: false,
    }
  },
  methods: {
    getData() {
      this.rndEmail = [];
      for (let i = 0; i < 10; i++) {
        axios.get(this.basePath + 'random/mail').then((res) => {
          this.rndEmail.push(res.data.response);
          console.log(this.rndEmail);
        })
      }

    },
    
  },
  mounted() {
    this.getData();
  },
}).mount('#app');

