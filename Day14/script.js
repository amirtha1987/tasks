//window.alert("hey it is an alert");
//var firstname = window.prompt("enter the firstname");
//console.log(firstname);

//var isLogoutConfirm = window.confirm("Are you sure want to logout?");
//console.log(isLogoutConfirm);

//var firstname = window.prompt("Enter yourFirstName");
//if (!firstname) {
//alert("firstname is invalid");
//} else {
//window.localStorage.setItem("name", firstname);
//}

//console.log(window.localStorage.getItem("Name"));
//setTimeout(() => {
//window.localStorage.removeItem("name");
//console.log(localStorage.getItem("name"));
//}, 10000);

//var timerid = setTimeout(() => {
//alert("message");
//clearTimeout(timerid);
//}, 3000);

//var sec = 0;
//const intervalid = setInterval(() => {
//sec += 2;

//})

const alertbutton = document.getElementById("button1");

alertbutton.addEventListener("click", (e) => {
  alert("welcome to the website");
});
