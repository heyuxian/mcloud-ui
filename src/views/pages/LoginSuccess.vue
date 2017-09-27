<template>
  <div class="app flex-row align-items-center">
    登陆成功
  </div>
</template>

<script>
  import store from '../../store/store'
  import * as types from '../../store/types'
  export default {
    name: 'LoginSuccess'
  }
  let token = getQueryString('token')
  if (token !== null) {
    store.commit(types.LOGIN, {token: token})
    window.location.href = 'http://localhost/#/users/me'
  } else {
    window.location.href = 'http://localhost:8899/uaa/oauth/login?redirectUrl=http://localhost/#/login/success'
  }

  function getQueryString (name) {
    let reg = new RegExp('(\\?|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.href.substr(1).match(reg)
    if (r !== null) return r[2]
    return null
  }
</script>
