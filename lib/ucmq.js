var request = require('request'),
    _ = require('underscore')._;

var ucmq = function(settings) {
    settings = settings || {};
    this.settings = _.extend({
        host: '127.0.0.1',
        port: 1818,
        charset: 'utf-8',
        name: ''
    }, settings);
    this.url = 'http://' + this.settings.host + ':' + this.settings.port + '?ver=2&charset=' + this.settings.charset + '&name=' + this.settings.name + '&opt=';
}

ucmq.prototype.push = function(data, cb) {
    request.post({
            url: this.url + 'put',
            body: data
        }, function(error, response, body) {
            if (error || body !== "UCMQ_HTTP_OK\r\n") {
                return cb(body);
            } else {
                return cb(0);
            }
        }
    );
}

ucmq.prototype.shift = function(cb) {
    request.get(this.url + 'get', function(error, response, body) {
        body = body || 'UCMQ_HTTP_EMPTY_RESPONSE\r\n';
        var message = body.substr(0, 14);
        if (error || message != 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0, body.substr(14));
        }
    });
}

ucmq.prototype.status = function(cb) {
    request.get(this.url + 'status_json', function(error, response, body) {
        if (error || ! body) {
            return cb(error);
        } else {
            try {
                var statusJson = JSON.parse(body);
                return cb(0, statusJson);
            } catch(e) {
                return cb('Invalid Json Format.');
            }
        }
    });
}

ucmq.prototype.reset = function(cb) {
    request.get(this.url + 'reset', function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

ucmq.prototype.maxQueue = function(length, cb) {
    request.get(this.url + 'maxqueue&num=' + length, function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

ucmq.prototype.setDelay = function(length, cb) {
    request.get(this.url + 'delay&num=' + length, function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

ucmq.prototype.setWlock = function(length, cb) {
    request.get(this.url + 'wlock&num=' + length, function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

ucmq.prototype.setSyncTime = function(length, cb) {
    request.get(this.url + 'synctime&num=' + length, function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

ucmq.prototype.remove = function(length, cb) {
    request.get(this.url + 'remove', function(error, response, body) {
        if (error || body !== 'UCMQ_HTTP_OK\r\n') {
            return cb(body);
        } else {
            return cb(0);
        }
    });
}

module.exports = ucmq;
