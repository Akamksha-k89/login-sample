const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

let app = express();
let corsOptions = {
    origin:"http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/router")(app);
// set port, listen for requests
const PORT =  7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

