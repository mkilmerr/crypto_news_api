const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(require('./src/routes'));


app.listen(3333,()=>{
    console.log('server on!');
})
