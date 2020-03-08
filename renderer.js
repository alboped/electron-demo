// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var positionMap = [
  {x: 150, y:250},
  {x: 300, y:300},
  {x: 50, y:100},
  {x: 400, y:200},
];

var positionIndex = 0;

var CancelEl = document.getElementById('cancel-btn');

function onmouseoverBtn(e) {
  positionIndex = positionIndex >= 3 ? 0 : positionIndex + 1;
  var position = positionMap[positionIndex];
  
  this.style.left = position.x + 'px';
  this.style.top = position.y + 'px';
}

CancelEl.onmouseover = onmouseoverBtn;
