var logInBox = document.querySelector('#log-sign-box');
var logInBtn = document.querySelector('.log-in-button');
var SignUpBtn = document.querySelector('.sign-up-button');

logInBtn.addEventListener('click', function (){
    var username = document.querySelector('.username-log').value;
    var password = document.querySelector('.password-log').value;

    //if username and password correct
    logInBox.style.display = 'none';
})

SignUpBtn.addEventListener('click', function () {
    var username = document.querySelector('.username-sign').value;
    var password = document.querySelector('.password-sign').value;

    logInBox.style.display = 'none';
})



