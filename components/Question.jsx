const React = require('react');
const Layout = require('./Layout');

function Question({ question, title, user }) {
  
  return (
    <Layout title={title} user={user}>
      {console.log(question.answer)}
      <div className="pole">
        <div className="count">у тебя: -- очков</div>
        {/* <div >{question.theme}</div> */}
        <div className="question">{question.question}</div>
        <div className="answer">{question.answer}</div>
        <br></br>
        <form id='answerForm' data-id={question.id}>
          <input name='answerUser' placeholder="введите ответ" className="question "></input>
          <button type='submit'>Ответить</button>
        </form>
      </div>
      
    </Layout>
  );
}

module.exports = Question;
