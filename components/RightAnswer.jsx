const React = require('react');
const Layout = require('./Layout');

module.exports = function RightAnswer({ id }) {
  return (
    <div className="right">
      <h5>Верно!</h5>
      <button data-id={id} type="button" id="btnNext" className="nextBtn">
        Следующий вопрос
      </button>
    </div>
  );
};
