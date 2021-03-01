function click()
{
    var element = document.getElementById("input");
    var div = document.getElementById("result");
    div.firstChild.nodeValue = element.value;
}

function exercise6Part3LoadFunction()
{
    var element = document.getElementById("input");
    element.addEventListener("keyup", click);
}

document.addEventListener("DOMContentLoaded", exercise6Part3LoadFunction);