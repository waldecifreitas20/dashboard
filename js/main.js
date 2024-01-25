/* active menu toggler */
const btnMenu = document.querySelector("#btn-menu");
const menu = document.getElementById("aside");

btnMenu.addEventListener('change', (evt) => {
    let isShown = !evt.target.checked;

    if (isShown) {
        menu.classList.remove('show');
        menu.classList.add('dispose');
    } else {
        menu.classList.remove('dispose');
        menu.classList.add('show');
    }
});

/* active privacy toggler */
const radioGroup = document.querySelectorAll("#aside-footer .radio-group");

const btnPublicPrivacy = document.getElementById("public-radio").addEventListener('click', () => {
    radioGroup[0].classList.add('active');
    radioGroup[1].classList.remove('active');
});
const btnPrivatePrivacy = document.getElementById("private-radio").addEventListener('click', () => {
    radioGroup[0].classList.remove('active');
    radioGroup[1].classList.add('active');
});