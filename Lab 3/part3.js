import http from "http";
import fs from "fs";
import url from "url";
const message_Sending = http.createServer((req, res) => {
  const myMessage = url.parse(req.url, true);
  const recMessage = myMessage.query;
  const newMessage = recMessage.message;
  if (newMessage != null) {
    fs.appendFileSync("History.txt", "Message Received from  Laiba: " + newMessage + "\n");
    console.log(newMessage);
  }
  else{
    res.end("Hi, This is Nasir Chat Room")
  }
  res.end("Your Message Received : ", newMessage);
});
message_Sending.listen(8080, "10.141.200.80", () => {
  console.log("Chatting with... http://10.141.223.82:8080");
});
