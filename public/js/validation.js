const Validate = ()=>{


  let userName = document.getElementById("Username");
  let userNameError = document.getElementById("usernameErr");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirm_password = document.getElementById("confirm_password");
  let usernameErr1 = document.getElementById("usernameErr1");

if(userName.value ==""){
  userName.style.border = "solid red"
  userNameError.innerText = "user name required"
  userNameError.style = "color: red"
  return false
}
if(email.value ==""){
  email.style.border = "solid red"
  return false
}
if(password.value ==""){
  password.style.border = "solid red"
  return false
}
if(password.value !== confirm_password.value){
  confirm_password.style.border = "solid red"
  usernameErr1.innerText = "password does not match"
  usernameErr1.style = "color: red"
  return false
}
}
