const React = require('react');
const Layout = require('./Layout');
const Themes = require('./Themes');

module.exports = function MainPage({ themes, title }) {
  return (
    <Layout title={title}>
      <div className="mainContainer">
        <div className="welcome">
          <h1>W E L C O M E!</h1>
        </div>
        <br />
        <div className="myPlay">
          <p>
            Моя игра, моя игра
            <br />
            Она мне принадлежит и таким же как и я,
            <br />
            Моя игра, моя игра
            <br />
            Она мне принадлежит и таким же как и я,
            <br />
            <br />
            Моя игра, моя игра,
            <br />
            Здесь правила одни, и цель одна,
            <br />
            <br />
            Моя игра, моя игра
            <br />
            Она мне принадлежит и таким же как и я<br />
            Моя игра, моя игра
            <br />
            Здесь правила одни, и цель одна
          </p>
        </div>
        <br />
        <h3>
          Чтобы сыграть в эту Раз*ёмную игру, ЗАРЕГИСТРИРУЙСЯ (АВТОРИЗУЙСЯ)
        </h3>
        <br />
        <div className="mainBlock">
          {themes.map((theme) => (
            //  Передаем темы
            <Themes key={theme.id} theme={theme} showButtons={false} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
