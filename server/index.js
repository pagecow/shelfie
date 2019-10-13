require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ctrl = require('./controller');
const massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(cors());
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.post('/api/products', ctrl.create);
app.get('/api/products', ctrl.read);
app.put('/api/products', ctrl.update);
app.delete('/api/products', ctrl.delete);


app.listen(SERVER_PORT, () => console.log('Server is running on port 7777.'));