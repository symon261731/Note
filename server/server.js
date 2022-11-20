const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const store = require('session-file-store');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');
const postRouter = require('./routes/postRouter');

require('dotenv').config();

const app = express();
const FileStore = store(session);

app.use(cors(
  {
    credentials: true,
    origin: true,
  },
));
app.use(morgan('dev'));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/note', noteRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(process.env.LOCALHOST, () => console.log(`server № ${process.env.LOCALHOST}`));
