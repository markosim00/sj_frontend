const path = require("path");
const { sequelize } = require('./models');
const express = require("express");
const app = express();
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io'); 
const bodyParser = require('body-parser');

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});


var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersRoutes = require('./routes/messages');
const kluboviRoutes = require('./routes/klubovi');
const utakmiceRoutes = require('./routes/utakmice');
const takmicenjaRoutes = require('./routes/takmicenja');
const klub_takmicenjaRoutes = require('./routes/klub_takmicenja');

app.use('/admin', usersRoutes);
app.use('/admin', kluboviRoutes);
app.use('/admin', utakmiceRoutes);
app.use('/admin', takmicenjaRoutes);
app.use('/admin', klub_takmicenjaRoutes);

app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}

app.get("/admin", authToken, (req, res) => {
    res.sendFile('main.html', {root: 'static'});
});

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});

const staticMdl = express.static(path.join(__dirname, 'dist'));

app.use(staticMdl);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './dist'});
});


app.listen( {port: 8000 }, async () => {
    await sequelize.authenticate();
});


