const React = require('react');
const Layout = require('./Layout');

module.exports = function LoginPage() {
  return (
    <Layout>
      <h1>Авторизация</h1>
      <form id="login-form">
        <div className="mb-3 col-sm-7 col-form-label">
          <input
            type="text"
            name="login"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Логин"
          />
          <div id="emailHelp" className="form-text">
            Мы никогда никому не передадим вашу электронную почту.
          </div>
        </div>
        <div className="mb-3 col-sm-7">
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
      <script src="/js/login.js" />
    </Layout>
  );
};
