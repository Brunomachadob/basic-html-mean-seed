/* global __dirname */

var path = require('path');

//get correct directory path
var filePath = path.join(__dirname, '../../public/views');

exports.index = function (req, res) {
	res.sendfile(path.join(filePath, 'index.html'));
};

exports.partials = function (req, res) {
	var name = req.params.name;
	res.sendfile(path.join(filePath, 'partials', name + '.html'));
};