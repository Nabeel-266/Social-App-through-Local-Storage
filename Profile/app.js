// To display dropdown by click on Profile Icon in Header.
const profileIconDropdown = document.querySelector('.profileBtnDropdown');

function showDropdown(){
    profileIconDropdown.classList.toggle('hide');
}

// For getting Login User 
const Login_User = JSON.parse(localStorage.getItem('Login_User'));
// console.log(Login_User);

if(!Login_User){
    window.location.href = `../index.html`;
}

// For Logout Buttons
const logOutBtns = document.querySelectorAll('.logOut');
// console.log(logOutBtns);

logOutBtns.forEach((logout) => {
    logout.addEventListener('click', () => {
        localStorage.removeItem('Login_User');
        window.location.href = '../index.html';
    })
})


// For Close Modal Button
const overlay = document.querySelector('.overlay');
const postingModal = document.querySelector('.postingModal')
const closingPostingModalBtn = document.querySelector('.closePostingModalBtn');

function postModalOpen() {
    overlay.classList.remove('hide');
    postingModal.classList.remove('hide');
}

closingPostingModalBtn.addEventListener('click', () => {
    overlay.classList.add('hide');
    postingModal.classList.add('hide');
})