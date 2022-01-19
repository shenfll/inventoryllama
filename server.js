var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(request, response){
  console.log(request.url);
  if(request.url == "/index/index.html"){
    response.writeHead(302, {"Location": "/"});
    response.end();
    return;
  }
  var filePath = "server" + request.url;
  if(request.url == "/"){
    filePath = "server/index/index.html";
  }
  var mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };
  fs.readFile(filePath, function(error, content){
    if(error){
      fs.readFile("server/error/error.html", function(error, content){
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end(content, "utf-8");
      });
    }else{
      response.writeHead(200, {"Content-Type": mimeTypes[String(path.extname(filePath)).toLowerCase()] || "application/octet-stream"});
      response.end(content, "utf-8");
    }
  });
}).listen(8125);