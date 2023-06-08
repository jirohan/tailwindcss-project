import './main.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar]');

navBtn.addEventListener('click', ()=>{
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toogle('hidden');
    menuBar.classList.toogle('flex');
})