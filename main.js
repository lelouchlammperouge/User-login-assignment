document.getElementById("Calculate1").addEventListener("click", calculate);

function calculate() {
  //input
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  //proccess
  if (username === "admin" && password === "1234") {
    alert("login Successful");
  } else if (username === "admin" && password != "1234") {
    alert("invalid password");
  } else if (username != "admin" && pasword === "1234") {
    alert("invalid username");
  }
}
