const url = "https://rickandmortyapi.com/api/";
const vm = new Vue({
    el: '#app',
    data: {
        results: [],
        info: [],
    },
    methods:{
        openResource: function (url) {
            axios.get(url).then(response => {
                this.results = response.data.results
            })
        }
    },
    mounted() {
        axios.get(url).then(response => {
            this.results = response.data
        })
    }
});