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
queue.push('test', function(result) {
	console.log(result);
});
//read from queue
queue.shift(function(result) {
	console.log(result);
});
//view queue status, return json when success or false
queue.status(function(result) {
	console.log(result);
});

queue.push('test', function(result) {
	console.log(result);
});
// reset queue
queue.reset(function(result) {
	console.log(result);
});
//set queue length
queue.maxQueue(1000, function(result) {
	console.log(result);
}); 
```