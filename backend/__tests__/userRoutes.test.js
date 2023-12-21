const request = require('supertest');
const express = require("express");
const connectDB = require('../db');
const usersRouter = require("../routes/usersRouter");

const User = require('../models/User');

connectDB();

const app = express();
app.use(express.json());
app.use("/register", usersRouter);

app.use(express.json());

describe('POST /register', () => {
    
    it('should register a new user', async () => {
        const userData = {
            email: 'test@example.com',
            password: 'password123'
        };

        const response = await request(app)
            .post('/register')
            .send(userData);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Usuário registrado com sucesso.');
    });

    it('should return an error if email is already registered', async () => {
        await User.create({
            email: "test@gmail.com",
            password: "$2a$10$fEnA1DZNVP/decwWnaHFT.AeeGvcTVYilOGFA8WbGYJkHNWgE9BvS",
        });

        const userData = {
            email: 'test@gmail.com',
            password: 'administrador'
        };

        const response = await request(app)
            .post('/register')
            .send(userData);

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('E-mail já registrado.');
    });

});
