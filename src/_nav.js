export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user',
      children: [
        {
          name: 'Users',
          url: '/user/list',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Client',
      url: '/client',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Clients',
          url: '/client/list',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
}
