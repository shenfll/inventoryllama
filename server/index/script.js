document.querySelector(".menubtn").onclick = function(){
  document.querySelector("main").classList.toggle("menu");
}
/*async function data(){
  var json = await fetch("http://192.168.1.84:8080/data", {mode: "no-cors"}).then(response => response.text());
  alert(json);
}
data();*/