const express = require('express');
const PORT = 8000 || process.env.PORT;
const app = express();
require('./conn');
const auth = require('./routers/Auth')
app.use('/api/auth',auth);
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})