<template>
  <div>
    <button v-on:click="refresh">Refresh</button>
    <p>
      {{user}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        user: {}
      }
    },
    mounted () {
      this.getUserList()
    },
    methods: {
      getUserList () {
        let that = this
        this.axios.get('/users/me').then(function (response) {
          that.user = response.data
        }).catch(function (e) {
          console.log(e)
        })
      },
      refresh () {
        this.getUserList()
      }
    }
  }
</script>
