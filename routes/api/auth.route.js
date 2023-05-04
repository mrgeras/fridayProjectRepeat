const router = require('express').Router();
const bcrypt = require('bcrypt')
const {User} = require ('../../db/models')

router.post('/register', async (req, res) => {
    const { login, password} = req.body;
    
    const addedUser = await User.findOne({ where: { login } });
    if (addedUser) {
      res.status(409).json({
        success: false,
        message: 'Пользователь с таким email уже существует',
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
  
  module.exports = router;