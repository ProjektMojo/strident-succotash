var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content=type': 'text/plain'
    });
    res.end('Hello World');
}).listen(8080);
console.log('Sever running at ec2-52-88-195-3.us-west-2.compute.amazonaws.com:8080');