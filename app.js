const express = require('express')

const app = express();

const user = {
    name: 'Farhad',
    age: 27,
    city: 'Dhaka'
}

app.get('/home', function (req, res) {
    res.send('Hello World.')
})

app.get('/user', function (req, res) {
    res.json(user)
})

app.get('/student/:id', function (req, res) {
    console.log(req.query.id)
    console.log(req.params.id)
    res.json({
        name: 'Tabaki', age: 15, city: 'Wadia'
    })
})

app.get('/message', async function (req, res) {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await result.json();
    res.json(data);
})

app.listen(3000)