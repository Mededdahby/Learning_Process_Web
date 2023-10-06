const express = require('express');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const app = express();
const articleRouter = require('./Router/ArticlesRouter');
const userRouter = require('./Router/usersRouter');
const adminMiddleware = require('./adminMiddleware');
const Token_secret ="secret"
app.use(express.json());

app.get('/', (req, res) => {
     res.send('Home ');
});

app.post('/login', (req, res) => {
     const { username, password } = req.body;
     if (username === 'admin' && password === '123') {
         const token = jwt.sign({ username: 'admin',password:"123" }, Token_secret ,{expiresIn:'24h'});
         res.json({ token: token, message: 'Login successful' });
     } else {
         res.status(403).json({ message: 'Invalid credentials' });
     }
 });

app.use('/articles', articleRouter);
app.use('/users',adminMiddleware,  userRouter);

app.listen(3000, () => {
     console.log("listening on Port : http://localhost:3000/");
});
