/**
	Setup the basic Router for the application
*/
var Router = Backbone.Router.extend({
	routes: {
		"": "initial",
		"home": "home",
	},

	initialize: function() {
		_.mixin(_.string.exports());

		// create our elastic search client
		this.ejs=ejs;
		this.ejs.client=ejs.jQueryClient('http://localhost:9200');
		
		// setup socket.io
    this.socket = io.connect();

    // using tip tip now
		$(".tiptip").tipTip();

		console.log("Backbone Router Initialised");
	},

	// root
	initial: function() {
	},

	// home screen
	home: function() {
	},

	// and by default ...
	defaultRoute: function() {
		console.log("default route called");
	}, 
});

/**
	Initialise and setup the application
*/
var IdeaCloud = undefined;
$(document).ready(function() {
	// create the router and associate with the window
	IdeaCloud = new Router();

	// start the history recording
	Backbone.history.start();
});
