const btnMenu = document.querySelector("#btn-menu");
const menu = document.getElementById("aside");

/* active menu toggler */
btnMenu.addEventListener('change', (evt)=> {
    let isChecked = evt.target.checked;
    
    if (isChecked) {
        menu.classList.remove('show');
        menu.classList.add('dispose');
    } else {
        menu.classList.remove('dispose');
        menu.classList.add('show');
    }
});

const radioGroup = document.querySelectorAll("#aside-footer .radio-group");

const btnPublicPrivacy = document.getElementById("public-radio").addEventListener('click', () => {
    radioGroup[0].classList.add('active');
    radioGroup[1].classList.remove('active');
});
const btnPrivatePrivacy = document.getElementById("private-radio").addEventListener('click', () => {
    radioGroup[0].classList.remove('active');
    radioGroup[1].classList.add('active');
});