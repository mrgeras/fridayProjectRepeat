const router = require('express').Router();
const bcrypt = require('bcrypt')
const {User} = require ('../../db/models')

router.post('/register', async (req, res) => {
    const { login, password, password2} = req.body;

       // проверяем, что пароли совпадают
       if (password !== password2) {
        res.status(403).json({ success: false, message: 'Пароли не совпадают' });
        return;
      }

    const addedUser = await User.findOne({ where: { login } });
    if (addedUser) {
      res.status(409).json({
        success: false,
        message: 'Пользователь с таким логином уже существует',
      });
      return;
    }
  
    const user = await User.create({
      login,
        password: await bcrypt.hash(password, 10),
    });
    req.session.userId = user.id;
    req.session.userName = user.name;

  
     
    res.status(201).json({ success: true });
  });
  

  router.post('/login', async (req, res) => {
    try {
      const { login, password } = req.body;
      if (login && password) {
        const user = await User.findOne({ where: { login } });
        if (!user) {
          res.json({ message: 'Неверный login или пароль' });
          return;
        }
        const compare = await bcrypt.compare(password, user.password);
        if (user && compare) {
          req.session.userId = user.id;
          res.json({ success: true });
          // res.redirect('/BooksPage');
          // window.location.href = '/books';
        } else {
          res.json({ message: 'Неверный login или пароль' });
        }
      }
    } catch ({ message }) {
      res.json(message);
    }
  });


  module.exports = router;