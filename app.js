const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const {signup,signin} = require('./controllers/auth')
const expressValidator = require('express-validator');
const {userSignupValidator} = require('./validator/index')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');



const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
app.use('/', productRoutes)



mongoose.connect('mongodb://' + (process.env.IP || 'localhost') + ':' +
(process.env.MONGO_PORT || '27017') +
'/finapp', {
	useNewUrIParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then(() => console.log('DB Connected'));


app.use(expressValidator());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
	res.send('hello from node');
});
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', categoryRoutes);


const port = process.env.PORT || 6000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

