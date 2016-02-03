var express = require('express')
var spawn = require('child_process').spawn
var app = express()

var admin_api = require('./libs/admin_api')

var EnduroServer = function () {}

EnduroServer.prototype.run = function () {
	var es = this;
	app.use(express.static(process.cwd()+'/_src'))

	app.get('/admin_api_refresh', function (req, res) {
		es.enduroRefresh()
		res.send({success: true, message: 'refreshed successfully'})
	});

	app.get('/admin_api/*', function (req, res) {
		admin_api.call(req, res);
	});

	app.listen(3000, function () {
	  console.log('Enduro Started')
	});

}

EnduroServer.prototype.enduroRefresh = function () {
	spawn('enduro', ['render'], {stdio: 'inherit'})
}

module.exports = new EnduroServer()