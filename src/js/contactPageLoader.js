export default function loadContactPage() {
    let main = document.createElement('main');

    let title = document.createElement('section');
    title.className = 'title';
    let h2 = document.createElement('h2');
    h2.textContent = 'Contact information';
    let pTitle = document.createElement('p');
    pTitle.textContent = 'Feel free to reach out to us with any inquiries, reservations, or just to share your pancake enthusiasm! We look forward to serving you at our pancake haven.';
    title.appendChild(h2);
    title.appendChild(pTitle);

    let contactSect = document.createElement('section');
    contactSect.id = 'contact';
    let phone = document.createElement('p');
    phone.textContent = '📞 Phone Number: ';
    let phoneLink = document.createElement('a');
    phoneLink.href = 'tel:5551234567';
    phoneLink.textContent = '(555) 123-4567';
    phone.appendChild(phoneLink);
    let address = document.createElement('p');
    address.textContent = '📍 Address: 123 Fluffy Stack Avenue, Pancakeville, Syrupland';
    let email = document.createElement('p');
    email.textContent = '📧 Email: ';
    let emailLink = document.createElement('a');
    emailLink.href = 'mailto:info@pancakeperfection.com';
    emailLink.textContent = 'info@pancakeperfection.com';
    email.appendChild(emailLink);
    contactSect.appendChild(phone);
    contactSect.appendChild(address);
    contactSect.appendChild(email);

    main.appendChild(title);
    main.appendChild(contactSect);
    return main;
}