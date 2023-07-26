require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const routes = require("./routes/router");
const express = require("express");

const app = express();


app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})