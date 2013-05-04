var _ = require('underscore');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
io.set('log level', 1); // reduce logging
var parseCookie = express.cookieParser();

// setup the webserver
app.use(express.logger());
app.use(express.compress());
app.use(express.cookieParser());
app.use(express.bodyParser());

// setup the Memory Store ...
var sessionStore = new express.session.MemoryStore;
// ... for session management
app.use(express.session({
	secret: 'sid',
	key: 'sid',
	store: sessionStore
}));

app.use(express.static(__dirname + '../../public'));

// now finally listen
server.listen(8080);

// SOCKET IO callbacks
// active sockets
var sockets = {};

io.sockets.on('connection', function(socket) {
	sockets[socket.id] = socket;
	console.log("Socket connected, current connection count:" + _.size(sockets));

	socket.on('disconnect', function() {
		delete sockets[socket.id];
		console.log("Socket disconnected, current connection count:" + _.size(sockets));
	});

	socket.on('subscribe', function(d) {
	});

	socket.on('unsubscribe', function(d) {
	});
});

// CREATE new idea
app.post('/idea', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// GET an idea
app.get('/idea/:id', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// UPDATE an idea
app.put('/idea/:id', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// DELETE an idea
app.delete('/idea/:id', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// GET all ideas for a user
app.get('/idea/:userid', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// GET top N terms from all ideas
app.get('/terms/top', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// GET top N ideas based on votes
app.get('/ideas/top', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// CREATE a new Vote for an idea
app.post('/vote/idea/:id', function(req, res) {
	console.log(req.body);

	res.json(200);
});

// GET all Votes for an Idea
app.get('/vote/idea/:id', function(req, res) {
	console.log(req.body);

	res.json(200);
});

