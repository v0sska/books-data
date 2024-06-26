import express from 'express';
import  router  from './routers';
import { connectDB } from './configs/mongoDbConfig';
import { fillBookData } from './basicData';

const app = express();

const PORT = 3000;

app.use(express.json());

connectDB().then(() => {
    console.log('Database initialized');
  }).catch((error) => {
    console.error('Error initializing database', error);
  });

fillBookData().then(() => {
    console.log('Data loaded to db');
  }).catch((error) => {
    console.error('Error sended a data', error);
  });


app.use('/', router);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});