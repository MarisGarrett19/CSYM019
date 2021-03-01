function exercise4LoadFunction()
{
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "The Heading Has Changed";

    var element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "The Paragraph Has Changed";
}

document.addEventListener("click", exercise4LoadFunction);