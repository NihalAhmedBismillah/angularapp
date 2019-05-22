let data = [
    {
        "id": 1,
        "userName": "Nihal Ahmed",
        "password": "f3dsad",
        "address": "pune",
        "email": "nihaltomail@gmail.com",
        "mobileNo": "2222343",
        "dateOfBirth": "02/03/1990",
        "salary": "22213"
    },
    {
        "id": 2,
        "userName": "Nihal Ahmed 2",
        "password": "f3dsad",
        "address": "pune",
        "email": "nihaltomail@gmail.com",
        "mobileNo": "2222343",
        "dateOfBirth": "02/03/1990",
        "salary": "22213"
    },
    {
        "id": 3,
        "userName": "Nihal Ahmed3",
        "password": "f3dsad",
        "address": "pune",
        "email": "nihaltomail@gmail.com",
        "mobileNo": "2222343",
        "dateOfBirth": "02/03/1990",
        "salary": "22213"
    }
]

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
let app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send({ date: new Date().toISOString() });
})

app.get('/user', (req, res) => {
    res.send(data);
})


app.get('/user/:id', (req, res) => {

    const userId = req.params['id'];
    console.log('user Id', userId)
    let userData = data.filter(user => user.id = userId)[0];  // [2]
    console.log('user data', JSON.stringify(userData))
    res.send(userData)

    //res.send(data);
})
app.post('/user', (req, res) => {
    res.send({ status: true, code: '201' });
})


app.listen(8080, () => {
    console.log('server started in port no 8080 ')

});

