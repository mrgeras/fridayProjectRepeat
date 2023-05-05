const React = require('react');


function Question({question}) {
  return (
   <div className='pole'>
   <div className='count'>у тебя: -- очков</div>
    <div >{theme.theme}</div>
    <div className='question'>{question.question}</div> 
    <div className='answer'>{question.answer}</div>
    <input placeholder='введите ответ'  className='question '></input>
   
    <button >ок</button>

   </div>
  );
}

module.exports = Question;
