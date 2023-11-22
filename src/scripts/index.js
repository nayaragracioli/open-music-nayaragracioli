/* Desenvolva sua lógica aqui ... */
import { products, categories } from "./productsData.js";
import { handleDarkMode } from "./theme.js";

function createCard(product) {
    const { img, band, year, title, price } = product;

    const card = document.createElement("li");
    const imageAlbum = document.createElement("img");
    const nameBandYear = document.createElement("p");
    const titleAlbum = document.createElement("h2");
    const spanAlbum = document.createElement("span");
    const priceProduct = document.createElement("p");
    const buttonBuy = document.createElement("button");

    imageAlbum.src = img;
    imageAlbum.alt = band;

    nameBandYear.innerText = `${band} ${year}`;
    titleAlbum.innerText = title;
    priceProduct.innerText = `R$ ${price}`;
    buttonBuy.innerText = "Comprar";

    card.classList.add("cardListUnit");
    spanAlbum.classList.add("spanCardList")

    spanAlbum.append(priceProduct, buttonBuy);
    card.append(imageAlbum, nameBandYear, titleAlbum, spanAlbum);

    return card
}


const render = (array) => {
    const cardList = document.querySelector(".cardList");
    cardList.innerHTML = "";

    array.forEach(product => {
        const cardProducts = createCard(product);
        cardList.appendChild(cardProducts);
    });
}


const buttonMusicalRender = (array) => {
    const filterList = document.querySelector(".filterList");
    filterList.innerHTML = "";

    array.forEach(category => {
        const listGenreMusical = document.createElement("li");
        const buttonGenreMusical = document.createElement("button");

        buttonGenreMusical.innerText = category;


        buttonGenreMusical.classList.add("buttonMusical")

        listGenreMusical.appendChild(buttonGenreMusical);
        filterList.appendChild(listGenreMusical);

    });
}

const filterByCategory = (arrayCategories, arrayProducts) => {

    const buttonsCategories = document.querySelectorAll(".buttonMusical");
    const priceRange = document.querySelector('.containerText');

    let filteredArray = arrayProducts;
    let categoryIndex = 0;

    buttonsCategories.forEach((button) => {
        button.addEventListener("click", (event) => {
            const inputRange = document.querySelector('.rangeInput');
            event.preventDefault();
            const clickButton = event.target;
            categoryIndex = arrayCategories.indexOf(clickButton.innerText);

            if (categoryIndex === 0) {
                filteredArray = arrayProducts.filter(product => product.price <= Number(inputRange.value));

            } else {
                filteredArray = arrayProducts.filter(product => product.category === categoryIndex && product.price <= Number(inputRange.value));
            }
            render(filteredArray);
        })
    });

    const inputRange = document.querySelector('.rangeInput');
    inputRange.addEventListener('input', (event) => {
        event.preventDefault();

        if (categoryIndex === 0) {
            filteredArray = arrayProducts.filter(product => product.price <= Number(inputRange.value));

        } else {
            filteredArray = arrayProducts.filter(product => product.category === categoryIndex && product.price <= Number(inputRange.value));
        }
        priceRange.innerText = `Até R$ ${Number(inputRange.value).toFixed(2)}`;
        render(filteredArray);
    });
}

render(products);
buttonMusicalRender(categories);
filterByCategory(categories, products);
handleDarkMode();
