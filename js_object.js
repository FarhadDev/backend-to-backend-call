const data = {
    name: 'Farhad',
    age: 27,
    print: function () {
        console.log(this.name);

    },
    address: {
        location: 'Dhaka',
        district: 'Chandpur'
    }
}

data.print()