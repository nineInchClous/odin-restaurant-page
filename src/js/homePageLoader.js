import bannerImg from '../img/banner.jpg';
import pancake1 from '../img/pancake1.jpg';
import pancake2 from '../img/pancake2.jpg';
import pancake3 from '../img/pancake3.jpg';

export default function loadHomePage() {
    let main = document.createElement('main');

    let banner = document.createElement('section');
    banner.id = 'banner';
    let imgBanner = document.createElement('img');
    imgBanner.src = bannerImg;
    imgBanner.alt = 'Banner image of a pancake';
    let h2 = document.createElement('h2');
    h2.textContent = 'Fluffy Delights Await: Indulge in Sweet and Fruity Pancake Perfection at Our Restaurant!';
    banner.appendChild(imgBanner);
    banner.appendChild(h2);

    let paragraphs = document.createElement('section');
    paragraphs.id = 'paragraphs';
    paragraphs.appendChild(
        createImgAndParagraphDiv('Welcome to a haven of culinary bliss where every bite is a celebration of flavor and texture! Our pancake restaurant takes pride in crafting the most delectable, airy, and fluffy pancakes that will transport your taste buds to a realm of sweetness. Each pancake is a work of art, a symphony of ingredients harmonizing to create a heavenly experience on your palate.', pancake1, 'image of a pancake'));
    paragraphs.appendChild(
        createImgAndParagraphDiv('Prepare to embark on a gastronomic journey with our extensive menu of sweet and fruity pancake creations. From classic favorites like blueberry and strawberry indulgence to innovative twists like tropical paradise and caramelized banana bliss, our pancakes are a canvas of flavors that cater to every craving. Savor the perfect balance of sweetness and freshness in every bite.', pancake2, 'image of a pancake', false));
    paragraphs.appendChild(
        createImgAndParagraphDiv('What sets our pancakes apart is not just their taste but their ethereal fluffiness. Imagine sinking your fork into a stack of pancakes so light and airy that they practically melt in your mouth. Our chefs have mastered the art of achieving the perfect pancake texture, ensuring that each bite is a delightful experience that leaves you craving for more.', pancake3, 'image of a pancake'));

    main.appendChild(banner);
    main.appendChild(paragraphs);

    return main;
}

function createImgAndParagraphDiv(textContent, imgSrc, imgAlt, order = true) {
    let div = document.createElement('div');
    div.className = 'img-and-paragraph';
    let p = document.createElement('p');
    p.textContent = textContent;
    let img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;

    if (order) {
        div.appendChild(p);
        div.appendChild(img);
    } else {
        div.appendChild(img);
        div.appendChild(p);
    }

    return div;
}