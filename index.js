const express = require('express');
const app = express();
const path = require('path');

app.use('/api', require('./routes'));

app.use(express.static(path.join(__dirname, 'static')));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));