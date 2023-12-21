
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const router = express.Router();

const EXPIRATION_TIME = '15m';
const SECRET_KEY = 'suaChaveSecretaAqui'; 


router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
});

module.exports = router;
