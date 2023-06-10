import express from 'express';
import authsRouter from './router/auths.js';
import cookieParser from 'cookie-parser';


const app = express();

// middleware

app.use(express.json());
app.use(cookieParser());

app.use('/api/auths', authsRouter);


app.listen(8080, () => {
    console.log('Api is working');
});