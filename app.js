// For Eye Button Function

function toggleEyeBtn(eye){
    if(eye.classList.contains('fa-eye')){
        eye.parentElement.previousElementSibling.setAttribute("type", "password");
        eye.classList.replace('fa-eye', 'fa-eye-slash');
    } 
    else if (eye.classList.contains('fa-eye-slash')){
        eye.parentElement.previousElementSibling.setAttribute("type", "text");
        eye.classList.replace('fa-eye-slash', 'fa-eye');
    }
}