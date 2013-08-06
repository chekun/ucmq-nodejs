ucmq-nodejs
==============

NodeJS wrapper for ucmq

## Install

```
npm install ucmq
```

## How to use

```js
//require ucmq module
var ucmq = require('ucmq');
//create ucmq queue instance, queue name needed!
var queue = new ucmq({name: 'test'});
//push to queue
queue.push('test', function(err) {
	console.log(err);
});
//read from queue
queue.shift(function(err, data) {
	console.log(data);
});
//view queue status, return json when success or false
queue.status(function(err, status) {
	console.log(status);
});

queue.push('test', function(err) {
	console.log(err);
});
// reset queue
queue.reset(function(err) {
	console.log(err);
});
//set queue length
queue.maxQueue(1000, function(err) {
	console.log(err);
}); 
```
