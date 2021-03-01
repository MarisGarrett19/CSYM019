function click()
{
    var element = document.getElementById("input");
    alert(element.value);
}

function exercise6LoadFunction()
{
    var element = document.getElementById("button");
    element.addEventListener("click", click);
}

document.addEventListener("DOMContentLoaded", exercise6LoadFunction);