const React = require('react');


function Question({ user, theme}) {
  return (
   <div className='pole'>
   <div className='count'>у тебя: {user.count} руб</div>
    <div >{theme.theme}</div>
    <div className='question'>{card.question}</div> 
    <div className='answer'>{card.answer}</div>
    <input placeholder='введите ответ'  className='question '></input>
   
    <button >ок</button>

   </div>
  );
}

module.exports = Question;
