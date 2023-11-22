import bannerImg from '../img/banner.jpg';
import pancake1 from '../img/pancake1.jpg';
import pancake2 from '../img/pancake2.jpg';
import pancake3 from '../img/pancake3.jpg';

export default function loadMenuPage() {
    let main = document.createElement('main');

    let title = document.createElement('section');
    title.className = 'title';
    let h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    let pTitle = document.createElement('p');
    pTitle.textContent = 'Each pancake creation is a small but delightful journey for your taste buds. Join us for a memorable experience at our pancake haven!';
    title.appendChild(h2);
    title.appendChild(pTitle);

    let menuSect = document.createElement('section');
    menuSect.id = 'menu';
    menuSect.appendChild(
        createMenuCard(pancake1, 'picture of pancake', 'Strawberry & maple syrup pancake', 'Savor the perfect blend of fluffy pancakes, plump strawberries, and rich maple syrup in our Strawberry and Maple Syrup Pancake. A delightful symphony of sweet and fruity notes that will brighten your taste buds.', '9.99'));
    menuSect.appendChild(
        createMenuCard(bannerImg, 'picture of pancake', 'Chocolate pancake', 'Dive into chocolate heaven with our Chocolate Pancake. Soft, cocoa-infused pancakes, drizzled with silky chocolate sauce and a dusting of powdered sugar. A decadent treat for any chocolate enthusiast.', '10.99'));
    menuSect.appendChild(
        createMenuCard(pancake3, 'picture of pancake', 'Peanut butter pancake', 'Experience the perfect marriage of savory and sweet with our Peanut Butter Pancake. Fluffy pancakes layered with creamy peanut butter, topped with crushed peanuts for that extra crunch. A nutty indulgence that will leave you craving more.', '11.99'));
    menuSect.appendChild(
        createMenuCard(pancake2, 'picture of pancake', 'Blueberry pancake', 'Delight in the burst of freshness with our Blueberry Pancake. Fluffy stacks of pancakes generously studded with plump blueberries, creating a harmonious blend of sweetness and tartness. Drizzled with a hint of maple syrup, it\'s a classic treat that never goes out of style.', '9.49'));

    main.appendChild(title);
    main.appendChild(menuSect);
    return main;
}

function createMenuCard(imgSrc, imgAlt, title, description, price) {
    let divMenu = document.createElement('div');
    divMenu.className = 'menu-card';
    let img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = title;
    let p = document.createElement('p');
    p.textContent = description;
    let h4 = document.createElement('h4');
    h4.textContent = "Price: $" + price;
    
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h4);
    divMenu.appendChild(img);
    divMenu.appendChild(div);

    return divMenu;
}