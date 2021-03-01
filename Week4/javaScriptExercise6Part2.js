function click()
{
    var element = document.getElementById("input");
    var div = document.getElementById("result");
    div.firstChild.nodeValue = element.value;
}

function exercise6Part2LoadFunction()
{
    var element = document.getElementById("button");
    element.addEventListener("click", click);
}

document.addEventListener("DOMContentLoaded", exercise6Part2LoadFunction);