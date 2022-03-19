const http = require('http');

const sever = http.createServer((req, res) => {
    console.log('run request...')
    res.setHeader('Content-Type', 'text/htl');
    res.write('<h3>Chào bạn</h3>');
    res.write('<h2> Phạm Văn Hợp</h2>');
    res.end();
})

sever.listen(3000, 'localhost', () => {
    console.log('node.js server is running on port: 3000');
})