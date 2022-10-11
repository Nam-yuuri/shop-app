import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';

import productRoutes from './routes/Products.js'
import brandRoutes from './routes/brands.js'

// import connectDatabase from './config/database.js';

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/products', productRoutes)
app.use('/brands', brandRoutes)

const CONNECTION_URL = 'mongodb://localhost:27017/shop-app'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message))

// connectDatabase();

// const server = app.listen(PORT, () => {
//   console.log(
//     `Máy chủ đang chạy trên cổng http://localhost:${PORT}`
//   );
// });

