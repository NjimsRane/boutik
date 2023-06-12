import express from 'express';
import authRouter from './router/auths.js';
import cookieParser from 'cookie-parser';
const app = express();



// middlewares
app.use(express.json());
app.use(cookieParser());


app.use('/api/auths', authRouter);




app.listen(8080, () => {
    console.log('Api working');
});