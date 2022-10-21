require('dotenv').config()
require('./config/dbConect')
const express = require('express')
const cors = require('cors')
const app = express()

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const blockRoutes = require('./routes/blockRoutes')
const appartmentRoutes = require('./routes/appartmentRoutes')
const recordPaymentRoutes = require('./routes/recordPaymentRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
const smsRoutes = require('./routes/smsRoutes')

app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/block', blockRoutes)
app.use('/api/v1/appartment', appartmentRoutes)
app.use('/api/v1/record-payment', recordPaymentRoutes)
app.use('/api/v1/expense', expenseRoutes)
app.use('/api/v1/sms', smsRoutes);

app.listen(9500, () => console.log('listening...'))