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

// app.get('/api/', ctrl.getUsers);

// // queries
// app.get('/api/', ctrl.getUserQuery);

// // params
// app.get('/api/ /:id', (req, res) => {
//     const {id} = req.params;
    
// });

// // body
// app.post('/api/', (req, res) => {

// });

const port = 7777;
app.listen(port, () => console.log('Server is running on port 7777.'));