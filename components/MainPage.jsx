const React = require('react');
const Layout = require('./Layout');
const Themes = require('./Themes');

module.exports = function MainPage({ themes,title }) {
  return (
    <Layout title={title}>
      <h1>W E L C O M E!</h1> <br/>
      <h4>Моя игра, моя игра
Она мне принадлежит и таким же как и я,
Моя игра, моя игра
Она мне принадлежит и таким же как и я,

Моя игра, моя игра,
Здесь правила одни, и цель одна,

Моя игра, моя игра
Она мне принадлежит и таким же как и я
Моя игра, моя игра
Здесь правила одни, и цель одна</h4> <br/>

<h3>Чтобы сыграть в эту Раз*ёмную игру, ЗАРЕГИСТРИРУЙСЯ (АВТОРИЗУЙСЯ)</h3>
<br/>
      <div className="mainBlock">
       
        {themes.map((theme) => (
          //  Передаем темы
          <Themes key={theme.id} theme={theme} showButtons={false} />
        ))}
      </div>
    </Layout>
  );
};
