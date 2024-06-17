//const body = document.querySelector("body");
//console.log(body);
//const heading1 = document.createElement("h1");
//console.log(heading1);
//heading1.innerText = "HELLO ALL";
//heading1.setAttribute("class", "heading");
//body.appendChild(heading1);
//const divone = document.getElementById("one");
//console.log(divone);
//const divone = document.getElementsByClassName("square");
//console.log(divone);

//const heading = document.querySelector("h1");
//heading.innerText = "Amirthavalli"

//const heading = document.getElementById("id1");
//setTimeout(() =>{
//  heading.innerText = "kavya";
//}, 3000);

//console.log(heading);
//function createSquare(color = "red") {
//const square = document.createElement("div");
//square.setAttribute("style", "width:100px; height:100px; background:red");

// document.body.appendChild(square);
//}
//createSquare();
//createSquare("green");
//createSquare("blue");
//createSquare("yellow");

var count = 10;

const interval = setInterval(() => {
  count = count - 1;
  console.log(count);
  if (count === 0) {
    clearInterval(interval);
    console.log("Happy New Year");
  }
}, 1000);
