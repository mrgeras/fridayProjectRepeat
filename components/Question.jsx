const React = require('react');
const Layout = require('./Layout');

function Question({ question1, title, user }) {
  return (
      // {console.log(question.answer)}
      <div className="pole">
        <div className="count">{`Привет, ${user.login.toUpperCase()}! У тебя: -- очков`}</div>
        <br />
        {/* <div >{question.theme}</div> */}

        <div className="containerForQuest">
          <div>
 
            <div className="question">{question1.question}</div>
            {/* <div className="answer">{question1.answer}</div> */}
            <br></br>
            <form id="answerForm" data-id={question1.id}>
              <input
                name="answerUser"
                placeholder="введите ответ"
                className="question "
              ></input>
              <button type="submit">Ответить</button>
            </form>
          </div>
        </div>
      </div>
  );
}

module.exports = Question;
