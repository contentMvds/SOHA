const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        return res.status(503).send({ error: 'Informações não recebidas' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({ error: 'E-mail já registrado.' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(200).send({ message: 'Usuário registrado com sucesso.' });
});

module.exports = router;