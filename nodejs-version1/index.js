const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res
        .status(200)
        .json({
            message: 'Hello World',
            from: 'Version 1'
        });
});

app.get('/cats', (req, res) => {
    res
        .status(200)
        .json([
            { name: 'Fluffy', age: 1 },
            { name: 'Stevie', age: 2 },
            { name: 'Oscar',  age: 10 }
        ]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
