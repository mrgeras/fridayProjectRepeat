const authRouter = require('express').Router();
const LoginPage = require('../../components/LoginPage');
const RegisterPage = require('../../components/RegisterPage');

module.exports = authRouter.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginPage));
});

authRouter.get('/register', (req, res) => {
  res.send(res.renderComponent(RegisterPage));
});
// * очишаем куки можно посмотреть в консоли браузера Application
authRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});
