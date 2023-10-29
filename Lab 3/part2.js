import http from "http";
import EventEmitter from "events";

const eventResEmit = new EventEmitter();

const server = http.createServer((req, res) => {
  try {
    const myPath = req.url;
    switch (myPath) {
      case "/":
        res.setHeader("Content-Type", "text/plain");
        res.end("PART 2");
        break;
      case "/string":
        res.setHeader("Content-Type", "text/plain");
        res.write("String Name : Nasir Hussain");
        res.end();
        break;
      case "/json":
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ name: "Nasir Hussain" }));
        res.end();
        break;
      case "/html":
        res.setHeader("Content-Type", "text/html");
        res.write(`<h4 style="color: red;">Nasir Hussain</h4>`);
        res.end();
        break;
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.write("Sorry! Page Not Found");
        break;
    }
  } catch (error) {
    console.log(error);
  }
  eventResEmit.emit("resSent", req.url);
});

server.listen(8080, "localhost");
console.log("Listening at http://localhost:8080");

eventResEmit.on("resSent", (url) => {
  console.log(`Response log: ${url} (Info: A response has been sent!)`);
});
