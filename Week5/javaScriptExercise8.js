function moveUp() 
{
  var element = document.getElementById("circle");
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + "px";
}

function moveDown() 
{
  var element = document.getElementById("circle");
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + "px";
}

function moveLeft() 
{
  var element = document.getElementById("circle");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + "px";
}

function moveRight() 
{
  var element = document.getElementById("circle");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + "px";
}



function myKeyDown(event) 
{
  if (event.keyCode == 37) 
  {
    setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) 
  {
    setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) 
  {
    setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) 
  {
    setInterval(moveRight, 10);
  }
}

function myKeyDown(event)
{
    console.log(event.keyCode);
}

function myInterval()
{
    var element = document.getElementById("circle");
    var circleOpacity = element.style.opacity;
    element.style.opacity = circleOpacity - 0.01;
}

function myClickEvent()
{
    setInterval(myInterval, 10);
}

function myKeyDown()
{
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + "px";
}

function myLoadEvent()
{
    document.addEventListener("keydown", myKeyDown);
}

function myLoadFunction()
{
  var element = document.getElementById("circle");
  element.addEventListener("click", myClickEvent);
}

function changeContent() 
{
  var element = document.getElementById("circle");
  element.firstChild.nodeValue = "hahaha";
}

function myClickCircleEvent() 
{
  var element = document.getElementById("circle");
  element.addEventListener("click", changeContent);
}


document.addEventListener("keydown", myKeyDown);
