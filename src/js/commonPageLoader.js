import githubLogo from '../img/GitHub_logo.png';

export function loadHeader() {
    let header = document.createElement('header');
    let h2 = document.createElement('h2');
    h2.textContent = 'Fluffy pancake paradise';
    header.appendChild(h2);

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