const React = require('react');
const Layout = require('./Layout');
const Themes = require('./Themes');

module.exports = function MainPage({ user, title, books }) {
  return (
    <Layout user={user} title={title}>
      <h1>W E L C O M E!</h1>
      <h4>Моя игра, моя игра
Она мне принадлежит и таким же как и я,
Моя игра, моя игра
Она мне принадлежит и таким же как и я,

Моя игра, моя игра,
Здесь правила одни, и цель одна,

Моя игра, моя игра
Она мне принадлежит и таким же как и я
Моя игра, моя игра
Здесь правила одни, и цель одна</h4>
      <div className="mainBlock">
        {cards.map((card) => (
          //  Передаем темы
          <Themes key={card.id} card={card} showButtons={false} />
        ))}
      </div>
    </Layout>
  );
};
