const React = require('react');
const Layout = require('./Layout');
const Question = require('./Question');

function AllCards({ questions, title, user }) {
  return (
    <Layout user={user} title={title}>
      <div>
        {questions.map((question1) => {
          <Question key={question1.id} user={user} />;
        })}
      </div>
    </Layout>
  );
}

module.exports = AllCards;
