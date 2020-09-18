define([
  'jquery', 'service/route', 'service/content', 'service/qiscus',
  'service/html'
], function ($, route, $content, qiscus, html) {

  function LoginPage(state) {
    // For some reason, jquery.on('submit') are very slow
    // and did not want to call qiscus.setUser
    document.addEventListener('submit', function (event) {
      if (event.target.id === 'LoginForm') {
        event.preventDefault()
        // var userId = $('#user-id').val()
        // var username = $('#username').val()
        // var userKey = '12345678'

        var userId = 'seller1@mailinator.com'
        var username = 'seller'
        var userKey = '12345678'

        qiscus.setUser(userId, userKey, username)
      }
    })
    return html`
      <div class="LoginPage">
        <img src="/img/logo.svg" class="logo" alt="qiscus-logo" />
        <form id="LoginForm">
          <div class="form-group">
            <button type="submit" id="submit-login-btn">
              Login as seller <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    `
  }
  LoginPage.path = '/login'

  return LoginPage
})
