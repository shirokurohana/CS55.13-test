let myhttp = require("http");

// myhttp.createrServer( );
// take some arguments to make it provide a useful http server
// 1: function that will be run whenever the server receives an http request


let myserver = myhttp.createServer(
  // createServer() uses our function
  function (myrequest, myresponse) {
    console.log(myrequest.url);
    let mytext;
    if (myrequest.url === "/hey") {
      mytext === "well hello there...";
      } else {
      mytext === "I don't know you";}
    mytext = mytext + " - Please help me... I am trapped in a Node.js server!"
    myresponse.writeHead( 200, {"Content-Type": "text/plain"});
    // writeHead() creates an http response header

    // end() closes the response
    myresponse.end(mytext + "\n");
  }
);

// ask http 
// listen() takes 2 args
myserver.listen(8080, "0.0.0.0");
console.log("server has started");