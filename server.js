var http = require('http')
var port = process.argv[2]

// 判断是否传入端口号参数
if(!port) {
    console.log('请指定端口号！\n例如：node server.js 8888')
    process.exit(1)
}

// 创建服务器
var server = http.createServer(
    function(request, response) {
        var path = request.url
        console.log('HTTP 请求路径为：\n' + path)
        // 判断 HTTP 请求路径
        if(path == '/') {
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            response.write('<!DOCTYPE>\n' + 
            '<html>\n' + 
            '<head><link rel="stylesheet" href="/style.css"></head>\n' +
            '<body>\n' +
            '<h1>Hello World!</h1>\n' +
            '<script src="/main.js"></script>\n' +
            '</body>\n' +
            '</html>')
            response.end()
        } else if(path == '/style.css') {
            response.setHeader('Content-Type', 'text/css; charset=utf-8')
            response.write('h1 {color: red;}')
            response.end()
        } else if(path == '/main.js') {
            response.setHeader('Conten-Type', 'text/javascript; charset=utf-8')
            response.write('alert("Hello World!")')
            response.end()
        } else {
            // 找不到对应的请求路径，返回错误码404
            response.statusCode = 404
            response.end()
        }
    }
)

// 监听传入的端口号
server.listen(port)
console.log('监听' + port + '成功！\n请在浏览器打开 http://localhost:' + port)