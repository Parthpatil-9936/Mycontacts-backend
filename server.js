const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const connectDb = require("./config/dbConnection");


connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());//required to parse the data give from the client
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/usersRoutes"))
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Listing to the port ${port}`)
})