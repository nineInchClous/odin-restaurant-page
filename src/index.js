//#region Imports
import './style/styles.scss';
import {loadHeader, loadFooter} from './js/commonPageLoader';
import loadHomePage from './js/homePageLoader';
import loadMenuPage from './js/menuPageLoader';
import loadContactPage from './js/contactPageLoader';

//#endregion

const content = document.getElementById('content');
const header = loadHeader();

content.appendChild(header);
content.appendChild(loadHomePage());
content.appendChild(loadFooter());

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
activeBtn(homeBtn);

document.getElementById('home-btn').addEventListener('click', () => {
    document.getElementsByTagName('main')[0].remove();
    header.after(loadHomePage());
    activeBtn(homeBtn);
});
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementsByTagName('main')[0].remove();
    header.after(loadMenuPage());
    activeBtn(menuBtn);
});
document.getElementById('contact-btn').addEventListener('click', () => {
    document.getElementsByTagName('main')[0].remove();
    header.after(loadContactPage());
    activeBtn(contactBtn);
});

function activeBtn(btn) {
    homeBtn.className = '';
    menuBtn.className = '';
    contactBtn.className = '';
    btn.className = 'active';
}