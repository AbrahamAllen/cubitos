const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;



let maps = [
"https://i.ibb.co/ZSbN39L/testing-The-Waters.png",
"https://i.ibb.co/tHFMp7H/still-Waters-Run-Deep.png",
"https://i.ibb.co/sF1cGqq/nothing-Goes-Right.png",
"https://i.ibb.co/7tGHqMY/ahead-Of-The-Curve.png"];

const brown = ['url("https://i.ibb.co/ZKXG2hL/brown07.png")','url("https://i.ibb.co/QDk7X9Y/brown06.png")','url("https://i.ibb.co/n6JkJzb/brown04.png")','url("https://i.ibb.co/rb93Qtv/brown05.png")','url("https://i.ibb.co/hf0G9yp/brown03.png")','url("https://i.ibb.co/86Lk9zS/brown01.png")','url("https://i.ibb.co/bHqCj42/brown02.png")'];
const green = ['url("https://i.ibb.co/x3DmM7r/green01.png")','url("https://i.ibb.co/wzmD4r9/green02.png")','url("https://i.ibb.co/JymWMW4/green03.png")','url("https://i.ibb.co/2sPGNb8/green04.png")','url("https://i.ibb.co/XFT3RZG/green05.png")','url("https://i.ibb.co/DRQNvzK/green06.png")','url("")'];
const orange = ['url("https://i.ibb.co/F7xZjjC/orange01.png")','url("https://i.ibb.co/M8Qxfb6/orange02.png")','url("https://i.ibb.co/CbyF8nt/orange03.png")','url("https://i.ibb.co/bH6TkwL/orange04.png")','url("https://i.ibb.co/T0YQTXY/orange05.png")','url("https://i.ibb.co/9HHz4G0/orange06.png")','url("https://i.ibb.co/XbcD0L8/orange07.png")'];
const blue = ['url("https://i.ibb.co/Y3S611v/bluecard7.png")','url("https://i.ibb.co/0BMCVB5/bluecard6.png")','url("https://i.ibb.co/Sfy8Ryz/bluecard5.png")','url("https://i.ibb.co/fGLG8dz/bluecard4.png")','url("https://i.ibb.co/HdT1D8y/bluecard3.png")','url("https://i.ibb.co/zbJ2bw5/bluecard2.png")','url("https://i.ibb.co/qCgKHqM/bluecard1.png")'];
const red = ['url("https://i.ibb.co/RY9C0sM/red01.png")','url("https://i.ibb.co/YQW38rf/red02.png")','url("https://i.ibb.co/G5hy947/red03.png")','url("https://i.ibb.co/sqJ2JhH/red04.png")','url("https://i.ibb.co/T8GcpWQ/red05.png")','url("https://i.ibb.co/XWsjtQB/red06.png")','url("https://i.ibb.co/5LTZ6Fy/red07.png")'];
const purple = ['url("https://i.ibb.co/R9zdyyX/purplecard7.png")','url("https://i.ibb.co/K6vWq6N/purplecard6.png")','url("https://i.ibb.co/ZKDS2Tk/purplecard5.png")','url("https://i.ibb.co/mcX1cDF/purplecard4.png")','url("https://i.ibb.co/4jCscXb/purplecard3.png")','url("https://i.ibb.co/Yj2BJdP/purplecard1.png")','url("https://i.ibb.co/rQ7KmMc/purplecard2.png")'];
const yellow = ['url("https://i.ibb.co/fqcgxSx/yellowcard7.png")','url("https://i.ibb.co/GtFrhWq/yellowcard6.png")','url("https://i.ibb.co/h1YJQkc/yellowcard5.png")','url("https://i.ibb.co/HPJ0fTb/yellowcard4.png")','url("https://i.ibb.co/gjVhzwF/yellowcard3.png")','url("https://i.ibb.co/DQQbQsv/yellowcard1.png")','url("https://i.ibb.co/8YkzPM4/yellowcard2.png")'];
const white = ['url("https://i.ibb.co/wCsxRcn/white01.png")','url("https://i.ibb.co/6BM5vMh/white02.png")','url("https://i.ibb.co/FYfK2z2/white03.png")','url("https://i.ibb.co/YXnc2wW/white04.png")','url("https://i.ibb.co/wYpMGZ9/white05.png")','url("https://i.ibb.co/dQqsKKR/white06.png")','url("https://i.ibb.co/4dWSTnL/white07.png")'];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  socket.on('click', (data,xpos,ypos) => {
    io.emit('result',data,xpos,ypos);
  });
  socket.on('mapSet', (t) => {
	io.emit('mapSet', "url("+maps[Math.floor(Math.random()*4)]+")", 'url("https://i.ibb.co/rxysjcm/flags.png")', 'url("https://i.ibb.co/DY9G1TW/dice-Board.png")');
  });
  socket.on('setCards', (t) => {
	io.emit('setCards', brown[Math.floor(Math.random()*7)], green[Math.floor(Math.random()*7)], red[Math.floor(Math.random()*7)], blue[Math.floor(Math.random()*7)], orange[Math.floor(Math.random()*7)], purple[Math.floor(Math.random()*7)], yellow[Math.floor(Math.random()*7)], white[Math.floor(Math.random()*7)]);  
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});



	