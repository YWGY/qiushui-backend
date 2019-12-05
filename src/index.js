require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const errorhandler = require('./middleware/errorhandler');

const routes = require('./routes');
const { connectToDB } = require('./utils/db');


const app = express();
const PORT = process.env.PORT || 3000;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());
app.use(errorhandler);
app.use('/api', routes);

connectToDB()
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log('DB connection failed');
    console.error(e.message);
    process.exit(1);
  });
