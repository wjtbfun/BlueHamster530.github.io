let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
let myImage = document.querySelector("img");
if(!localStorage.getItem("name"))
{
SetUserName();
}
else
{
 let storedName = localStorage.getItem("name");
 myHeading.textContent = "Woonjin is cool, " + storedName;
}


myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mathpidlogo.png") {
    myImage.setAttribute("src", "images/Logo_Eng.png");
  } else {
    myImage.setAttribute("src", "images/mathpidlogo.png");
  }
};
function SetUserName()
{
let myName = prompt("Plz enter your name");
if(!myName || myName == null)
{
    alert("Wrong Name");
    SetUserName();
}
localStorage.setItem("name",myName);
myHeading.textContent= "Woonjin is cool, "+ myName;
}

myButton.onclick = function () {
  SetUserName();
};
