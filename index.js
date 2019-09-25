const express = require('express');
const cors = require('cors');

const app = express();

app.use(require('./src/routes'));

app.use(cors());
app.listen(3000,()=>{
    console.log('server on!');
})
