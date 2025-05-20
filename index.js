import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { getEmoji } from './AI.js';


const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json("Welcome to Emoji AI");
});

app.get('/emoji', (req, res) => {
    const { query } = req.query;

    res.json(getEmoji(query))


})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
