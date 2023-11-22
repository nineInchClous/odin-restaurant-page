import githubLogo from '../img/GitHub_logo.png';

export function loadHeader() {
    let header = document.createElement('header');
    let h1 = document.createElement('h1');
    h1.textContent = 'Fluffy pancake paradise';

    let divBtns = document.createElement('div');
    divBtns.className = 'btn-container';
    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'home-btn';
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menu-btn';
    let contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.id = 'contact-btn';

    divBtns.appendChild(homeBtn);
    divBtns.appendChild(menuBtn);
    divBtns.appendChild(contactBtn);
    header.appendChild(h1);
    header.appendChild(divBtns);

    return header;
}

export function loadFooter() {
    let footer = document.createElement('footer');
    let p = document.createElement('p');
    p.textContent = 'Copyright © Thibault Castelli';
    let a = document.createElement('a');
    a.href = 'https://github.com/nineInchClous';
    a.target = '_blank';
    let img = document.createElement('img');
    img.src = githubLogo;
    img.alt = 'Github logo';

    a.appendChild(img);
    footer.appendChild(p);
    footer.appendChild(a);

    return footer;
}