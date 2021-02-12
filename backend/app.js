const express = require('express');
const mongoose = require('mongoose');

const usersRoutes = require("./routes/users-routes");
const HttpError = require('./models/http-error');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//     next();
// });

app.use('/api/users', usersRoutes);

// app.use((req, res, next) => {
//     const error = new HttpError("Could not find this route. ", 404);
//     throw error;
// });


// --------- Real Server -----------
// mongoose
//     .connect(
//         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo3-crud.7dsrv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//         { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
//     )
//     .then(() => {
//         app.listen(process.env.PORT || 5000);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     ;

// ------------ Mock Server --------------
mongoose
    .connect(
        process.env.DB_TEMPORARY,
        { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
    )
    .then(() => {
        app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"));
    })
    .catch(err => {
        console.log(err);
    })
    ;