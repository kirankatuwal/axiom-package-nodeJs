const axios = require('axios');

axios.get('https://facebook.com').then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => console.log("Job Done !!"));