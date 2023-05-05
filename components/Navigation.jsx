const React = require('react');

function Navigation({ user }) {
  return (
    <ul className="nav justify-content-end">
      <a href="/">
        <img src="/img/logo.png" className="logo" alt="logo" />
      </a>
      {user ? (
        <>
          <li className="nav-item">
            <a className="nav-link disabled">Привет, {user.login}!</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Выйти
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/auth/login">
              Войти
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/register">
              Зарегистрироваться
            </a>
          </li>
        </>
      )}
    </ul>
  );
}

module.exports = Navigation;
