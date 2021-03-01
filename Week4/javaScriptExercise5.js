function updateH1()
{
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "The Heading Has Changed As User Clicked On Heading";
}

function updateParagraph()
{
    var element = document.getElementById("paragraph");
    element.firstChild.nodeValue = "The Paragraph Has Changed As User Clicked On Paragraph";
}

function exercise5LoadFunction()
{
    var element = document.getElementById("pageHeading");
    element.addEventListener("click", updateH1);

    var element = document.getElementById("paragraph");
    element.addEventListener("click", updateParagraph);
}

document.addEventListener("DOMContentLoaded", exercise5LoadFunction);