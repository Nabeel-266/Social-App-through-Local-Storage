const Login_User = JSON.parse(localStorage.getItem('Login_User'));
console.log(Login_User);

if(!Login_User){
    window.location.href = `../index.html`;
}


const userName = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const userPhone = document.querySelector('.userPhone');
const userDescription = document.querySelector('.userDescription');

userName.innerHTML = `${Login_User.firstName} ${Login_User.lastName}`;
userEmail.innerHTML = `${Login_User.emailAddress}`;

if(Login_User.description){
    userDescription.innerHTML = Login_User.description;
} else {
    userDescription.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum expedita at illo placeat ipsam.`
}