import express from 'express';
import auhtsRouter from './router/auths.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

// middleware

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auths', auhtsRouter);


app.listen(8080, () => {
    console.log('Backend is connected');
});