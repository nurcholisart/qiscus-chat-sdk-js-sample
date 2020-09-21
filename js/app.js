define([
  'jquery',
  'service/qiscus',
  'service/route',
  'service/emitter',
  'service/content',
  'pages/login',
  'pages/chat-list',
  'pages/chat',
  'pages/users',
  'pages/create-group',
  'pages/profile',
  'pages/room-info',
], function (
  $,
  qiscus,
  route,
  emitter,
  $content,
  LoginPage,
  ChatListPage,
  ChatPage,
  UserPage,
  CreateGroupPage,
  Profile,
  RoomInfoPage
) {
  window.route = route
  window.qiscus = qiscus
  var routes = [
    LoginPage,
    ChatListPage,
    ChatPage,
    UserPage,
    CreateGroupPage,
    Profile,
    RoomInfoPage
  ]

  emitter.on('qiscus::login-success', function () {
    route.replace('/chat')
    localStorage.setItem('authdata', JSON.stringify(qiscus.userData))
  })

  emitter.on('route::change', function (location) {
    var content = routes.find(function (page) {
      return page.path === location.pathname
    })
    $content.html(content(location.state))
  })

  $('#toggle-widget-btn').ready(function (event) {
    if (!qiscus.isLogin) {
      route.replace('/login')
    } else {
      route.replace('/chat')
    }
  });

  $('.widget-container').on('click', 'button.close-btn', function (event) {
    event.preventDefault();
    $('.widget-container').slideUp("fast");
  })

  $('.toggle-widget-btn').on('click', function (event) {
    if ($('#qiscus-widget').is(':hidden')) {
      $('.widget-container').slideDown("fast");

      if (!qiscus.isLogin) {
        $content.html(LoginPage);
      } else {
        $content.html(ChatListPage);
      }
    } else {
      $('.widget-container').slideUp("fast");
    }
  })

  // if (localStorage['authdata'] != null) {
  //   var authdata = JSON.parse(localStorage['authdata'])
  //   qiscus.setUserWithIdentityToken({ user: authdata })
  // }
})
