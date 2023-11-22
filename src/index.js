//#region Imports
import './style/styles.scss';
import {loadHeader, loadFooter} from './js/commonPageLoader';
import loadHomePage from './js/homePageLoader';
import loadMenuPage from './js/menuPageLoader';
import loadContactPage from './js/contactPageLoader';

//#endregion

const content = document.getElementById('content');

content.before(loadHeader());
content.appendChild(loadHomePage());
content.after(loadFooter());

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
activeBtn(homeBtn);

document.getElementById('home-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadHomePage());
    activeBtn(homeBtn);
});
document.getElementById('menu-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadMenuPage());
    activeBtn(menuBtn);
});
document.getElementById('contact-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadContactPage());
    activeBtn(contactBtn);
});

function activeBtn(btn) {
    homeBtn.className = '';
    menuBtn.className = '';
    contactBtn.className = '';
    btn.className = 'active';
}