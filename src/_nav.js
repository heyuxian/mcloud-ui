export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'User',
      url: '/users',
      icon: 'icon-user',
      children: [
        {
          name: 'Users',
          url: '/users/me/blog',
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
