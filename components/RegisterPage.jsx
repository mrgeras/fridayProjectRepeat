const React = require('react');
const Layout = require('./Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <form id="register-form">
        <div className="mb-3 col-sm-7 col-form-label">
          <input
            type="text"
            name="login"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Логин"
          />
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
        <div className="mb-3 col-sm-7">
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
      <script src="/js/register.js" />
    </Layout>
  );
};
