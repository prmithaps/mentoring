const http = require('http')
const PORT = proccess.new.PORT || 3000;

http
    ,createerver((req, res) => {
        res.write("hello world");
        res.end();
    })
    .listen(PORT, () => {
        console.log('Server')
    })