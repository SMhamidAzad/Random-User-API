const express = require('express');
const cors = require("cors");
const app= express();
const port = 5000;
const userRoutes = require('./routes/users.route')

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes)

app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.listen(port, ()=>{
    console.log(`Server is running successfully in port ${port}`);
})