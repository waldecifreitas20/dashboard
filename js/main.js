const btnMenu = document.querySelector("#btn-menu");
const menu = document.getElementById("aside");


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