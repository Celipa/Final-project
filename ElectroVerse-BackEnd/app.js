const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//routes
const userRoutes = require('./routes/userRoutes')
app.use('/api', userRoutes)
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);
const orderRoutes = require('./routes/orderRoutes')
app.use('/api', orderRoutes)
const messageRoutes = require('./routes/messageRoutes');
app.use('/api', messageRoutes);

module.exports = app;