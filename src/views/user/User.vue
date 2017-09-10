<template>
  <div class="animated fadeIn">
    <table class="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <th scope="row">{{user.id}}</th>
        <td>{{user.title}}</td>
        <td>{{user.createDate}}</td>
        <td>@mdo</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        users: []
      }
    },
    mounted () {
      this.getUserList()
    },
    methods: {
      getUserList () {
        let that = this
        this.axios.get('/users/me').then(function (response) {
          that.users = response.data.content
        }).catch(function (e) {
          console.log(e)
        })
      }
    }
  }
</script>
