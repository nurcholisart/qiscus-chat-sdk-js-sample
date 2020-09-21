define([
  'jquery', 'service/route', 'service/content', 'service/qiscus',
  'service/html'
], function ($, route, $content, qiscus, html) {

  function LoginPage(state) {
    $('#login-screen').ready(function (event){
      var userId = 'seller1@mailinator.com'
      var username = 'seller'
      var userKey = '12345678'

      qiscus.setUser(userId, userKey, username)
    });

    return html`
      <div class="LoginPage">
        <img id="login-screen" src="https://multichannel.qiscus.com/img/loader.gif" class="logo" alt="qiscus-logo" style="margin: auto;" />
      </div>
    `
  }
  
  LoginPage.path = '/login'

  return LoginPage
})
