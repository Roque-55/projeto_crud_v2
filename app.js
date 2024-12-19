const express = require('express');
const port = 8000;
const cors = require('cors');

const app = express();
app.use(cors({origin: "*"}));

app.listen(port, () => {});