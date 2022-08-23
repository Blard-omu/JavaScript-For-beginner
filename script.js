const asidesection = document.querySelector('aside');
const mainsection = document.querySelector('main');

const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');

signInBtn.addEventListener("click", () => {
    mainsection.classList.add("slideRight");
    asidesection.classList.add("slideLeft");
});

signUpBtn.addEventListener("click", () => {
    mainsection.classList.remove("slideRight");
    asidesection.classList.remove("slideLeft");
});