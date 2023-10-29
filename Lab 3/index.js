 import http from 'http'

const server = http.createServer((req, res) => {
  const myPath = req.url;
    switch (myPath) {
        case '/':
            res.setHeader("Content-Type", "text/html");
            // res.write("String Name : Nasir Hussain <br>");
            // res.write(
            //   "JSON object Name : " + JSON.stringify({ name: "Nasir Hussain" }) + " <br>"
            // );
            // res.write('HTML Name : <h4 style="color: red;">Nasir Hussan</h4>');
            res.end('PART 1 (A) Listening On Port 8080,\n "/string /json /html"')
            break;
        case '/string':
          res.setHeader('Content-Type', 'text/plain');
          res.write('String Name : Nasir Hussain');
          res.end();
          break;
        case '/json':
          res.setHeader('Content-Type', 'application/json');
          res.write(JSON.stringify({ name: 'Nasir Hussain' }));
          res.end();
          break;
        case '/html':
          res.setHeader('Content-Type', 'text/html');
          res.write(`<p style="color: red;">Nasir Hussain</p>`);
          res.end();
          break;
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.write('Sorry! Page Not Found');
          res.end();
          break;
      }
});

server.listen(8080, "localhost");
console.log("Listening at http://localhost:8080");
