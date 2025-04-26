const { default: axios } = require('axios');
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
    const url = "http://localhost:3000/user";
    axios.get(url)
        .then(response => {
            console.log("Response Data: ", response.data)
        })
        .catch(error => {
            console.log(
                "Error fetching data: ", error.message
            )
        })

    res.send("OK")
})

app.listen(4000)