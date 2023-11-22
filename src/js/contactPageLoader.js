

export default function loadContactPage() {
    let main = document.createElement('main');
    let h2 = document.createElement('h2');
    h2.textContent = 'Contact';
    main.appendChild(h2);
    return main;
}