    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const usersAuthRoute = require('./routesAuth/userAuth-route.js');
    const User = require('./models/user.js');

    const port = 4080;

    //middleware 
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.listen(port, ()=> {
        console.log(`serverAuth listening to port ${port}`)
    });

    //rotas

    app.use('/api/users/auth', usersAuthRoute);
    

    //homes
    app.get('/', (req,res) => {
       res.send('Server Alive') 
    });   


    //conectando no banco de dados
    mongoose.connect(
    "mongodb+srv://gabrielmtg2:t2TnTvqDih29eY0b@nodedb.2a6h5ag.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NODEDB"
    ).then(
        console.log("mongo-client connection sucessful")
    ).catch(()=>{
        console.log('mongo-client connection Error')
    })

