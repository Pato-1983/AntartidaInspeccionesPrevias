const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
//const cookies = require('cookie-parser')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const vehiclesRouter = require('./routes/vehiclesRouter');
const usersRouter = require('./routes/usersRouter');
//const mainRouter = require('./routes/mainRouter');
//const productsApiRouter = require('./routes/API/productsApiRouter');
//const usersApiRouter = require('./routes/API/usersApiRouter');
//const cors = require('cors')


const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(cors());
app.use(methodOverride("_method"));

app.use(session({
    secret: 'secret',	
    resave: false,
    saveUninitialized: false    
}))

//app.use(cookies())
app.use(userLoggedMiddleware)

//app.use('/', mainRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/users', usersRouter);

//app.use("/api/products", productsApiRouter)
//app.use("/api/users", usersApiRouter)


app.listen(process.env.PORT || port, () => console.log(`servidor funcionando en el puerto ${port}! `))