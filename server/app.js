/* global __dirname */

/**
 * Module dependencies.
 */

var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    favicon = require('serve-favicon');

var routes = require('./routes'),
    api = require('./routes/api'),
    passportCfg = require('./config/passport');

var app = module.exports = express();

var clientPath = path.normalize(__dirname + '/..');

// Configuration
app.configure(function() {
    app.use(favicon(path.join(clientPath, 'public', 'favicon.ico')));
    
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(session(
        {
            secret: 'myApp',
            resave: true,
            saveUninitialized: true
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(path.join(__dirname, '../dist')));    
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../bower_components')));

    app.use(function (req, res, next) {
        if (req.user) {
            res.cookie('$appUser', JSON.stringify(req.user));
        }
    
        next();
    });
    
    app.use(app.router);
    
    passportCfg();
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);

//Your app should set all templates in your js with html2js
//app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server
app.listen(3000, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
