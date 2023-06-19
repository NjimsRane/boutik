import express from 'express';
import auhtsRouter from './router/auths.js';
const app = express();

// middleware

app.use(express.json());

app.use('/api/auths', auhtsRouter);


app.listen(8080, () => {
    console.log('Backend is connected');
});