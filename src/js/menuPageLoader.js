

export default function loadMenuPage() {
    let main = document.createElement('main');
    let h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    main.appendChild(h2);
    return main;
}