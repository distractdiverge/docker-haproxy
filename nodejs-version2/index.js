const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res
        .status(200)
        .json({
            message: 'Hello World',
            from: 'Version 2'
        });
});

app.get('/cats', (req, res) => {
    res
        .status(200)
        .json([
            { name: 'Fluffy', sex: 'Male' },
            { name: 'Stevie', sex: 'Female' },
            { name: 'Oscar',  sex: 'Male' }
        ]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
