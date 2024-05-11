const express = require('express');
const app = express();
const dotenv = require('dotenv');
const fileRoutes = require('./routes/file.route')
const userRoutes = require('./routes/user.route')
const productRoutes = require('./routes/product.route')
const contactRoutes = require('./routes/contact.route')
const dbConnect = require('./db/db.js');
const cors = require('cors');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config({path:"./.env"});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnect().then(()=>{
    console.log("Mongodb Connected")
}).catch((err)=>[
    console.log(err)
]);
const PORT = process.env.PUBLIC_PORT || 4000;

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.use('/api/v1/file',fileRoutes);
app.use('/api/v1/auth',userRoutes);
app.use('/api/v1',contactRoutes);
app.use('/api/v1/product',productRoutes);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

