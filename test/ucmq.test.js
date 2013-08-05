/**
 * Attention:
 * 1.you need mocha module and should module to run this file.
 * 2.ruuning ucmq on localhost:8803
 */
require('should');
var ucmq = require('../lib/ucmq');

describe('ucmq', function() {

    var queue = null;

    before(function() {
        queue = new ucmq({name: 'test', port: 8803});
    });

    describe('Test ucmq instance [queue]', function() {
        it('queue should be an instance of ucmq', function() {
            queue.should.be.an.instanceof(ucmq);
        });
    });

    describe('#push', function() {
        it('should return true when enqueue success', function(done) {
            queue.push('position#1', function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('Not push successfully.'));
                }
            });
        });
    });

    describe('#shift', function() {
        it('should return position#1 when success', function(done) {
            queue.shift(function(result) {
                if (result.should.equal('position#1')) {
                    done();
                } else {
                    done(new Error('Not shift successfully.'));
                }
            });
        })
    });

    describe('#status', function() {
        it('should not return false when success', function(done) {
            queue.status(function(result) {
                if (result.should.be.ok) {
                    done();
                } else {
                    done(new Error('Get status failed!'));
                }
            });
        });
    });

    describe('#maxQueue', function() {
        it('should return true when success', function(done) {
            queue.maxQueue(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('MaxQueue failed!'));
                }
            });
        });
    });

    describe('#setDelay', function() {
        it('should return true when success', function(done) {
            queue.setDelay(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('set Delay failed!'));
                }
            });
        });
    });

    describe('#setWlock', function() {
        it('should return true when success', function(done) {
            queue.setWlock(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('setWlock failed!'));
                }
            });
        });
    });

    describe('#setSyncTime', function() {
        it('should return true when success', function(done) {
            queue.setSyncTime(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('setSyncTime failed!'));
                }
            });
        });
    });

    describe('#reset', function() {
        it('should return true when success', function(done) {
            queue.reset(function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('Reset queue failed!'));
                }
            });
        });
    });

    describe('#removeQueue', function() {
        it('should return true when success', function(done) {
            queue.remove(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('removeQUeue failed!'));
                }
            });
        });
    });

});