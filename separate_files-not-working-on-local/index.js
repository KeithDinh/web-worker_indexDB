w = new Worker("./handleDb.js");

w.onmessage = function(event) {
  document.getElementById("result").innerHTML = event.data;
};

w.postMessage("init");

function readAll() {
  w.postMessage("readAll");
}

function add() {
  w.postMessage("add");
}