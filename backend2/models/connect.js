const mongoose = require('mongoose');

const url = `mongodb://localhost:27017/db`

mongoose.connect(url,
    {
        useNewUrlParser: true
    }).
then((con) => {
    console.log(`DB connection successful ${con}`);
});
