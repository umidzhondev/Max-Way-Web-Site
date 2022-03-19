// * Nabvar
const nav = document.querySelector(".navbar__main");
const navOpenBtn = document.querySelector(".navbar__open--icon");
const navCloseBtn = document.querySelector(".navbar__close--icon");

navOpenBtn.addEventListener('click', () => {
    nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open");
});

// * Product Active Nav Item
const productNavItems = document.querySelectorAll(".product__nav-item");
productNavItems.forEach(item => {
    item.addEventListener('click', () => {
        productNavItems.forEach(item => item.classList.remove("product__nav-item--active"))
        item.classList.add("product__nav-item--active");
    });
})

// * Product Card Render 

const data = [{
        title: "Pizza",
        productsCards: [{
                src: "/image/card/pizza/pizza-1.png",
                title: "Gavaya 🧀",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 45000
            },
            {
                src: "/image/card/pizza/pizza-2.png",
                title: "Mexica 🌶️",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 53000
            },
            {
                src: "/image/card/pizza/pizza-3.png",
                title: "Hot achchiko 🍀",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 64000
            },
            {
                src: "/image/card/pizza/pizza-4.png",
                title: "Mexica",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 45000
            },
            {
                src: "/image/card/pizza/pizza-3.png",
                title: "Apocalipo 🌶️",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 64000
            },
            {
                src: "/image/card/pizza/pizza-4.png",
                title: "Sosiskacho 🍀",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 45000
            },
            {
                src: "/image/card/pizza/pizza-2.png",
                title: "Mexica",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 53000
            },
        ]
    },
    {
        title: "Burger",
        productsCards: [{
                src: "/image/card/burger/burger.png",
                title: "Cheeseburger 🧀",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 23000
            },
            {
                src: "/image/card/burger/burger.png",
                title: "Chili burger 🌶️",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 23000
            },
            {
                src: "/image/card/burger/burger.png",
                title: "Hamburger",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 23000
            },
            {
                src: "/image/card/burger/burger.png",
                title: "Double Burger",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 23000
            },
        ]
    },

    {
        title: "Kombo",
        productsCards: [{
                src: "/image/card/kombo/kombo-1.png",
                title: "Kombo-1",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 25000
            },
            {
                src: "/image/card/kombo/kombo-2.png",
                title: "Kombo-2",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 23000
            },
            {
                src: "/image/card/kombo/kombo-1.png",
                title: "Kombo-3",
                description: `Горячая закуска с митболами
                из говядины, томатами,
                моцареллой и соусом чипотле`,
                price: 30000
            },
        ]
    },
    {
        title: "Ichimliklar",
        productsCards: [{
                src: "/image/card/drink/sprite.png",
                title: "Sprite 1L",
                description: `Горячая закуска с митболами
                    из говядины, томатами,
                    моцареллой и соусом чипотле`,
                price: 6000
            },
            {
                src: "/image/card/drink/coca-cola.png",
                title: "Coca cola 1,5L",
                description: `Горячая закуска с митболами
                    из говядины, томатами,
                    моцареллой и соусом чипотле`,
                price: 9000
            },
            {
                src: "/image/card/drink/fanta.png",
                title: "Fanta 1L",
                description: `Горячая закуска с митболами
                    из говядины, томатами,
                    моцареллой и соусом чипотле`,
                price: 6000
            },
        ]
    },

]

class Card {
    constructor(options) {
        this.dataCards = options
    }

    render() {
        this.dataCards.forEach((dataCard => {
            let row = document.createElement("div");
            row.classList.add("product__main-row")
            let rowTitle = document.createElement("h2");
            rowTitle.textContent = dataCard.title;

            let productCards = document.createElement("div")
            productCards.classList.add("product__cards");

            dataCard.productsCards.forEach((productCard => {
                let productCardLayout = document.createElement("div")
                productCardLayout.innerHTML = `
                    <div class="product__card-imgbox">
                    <img src="${productCard.src}" alt="image...">
                    <div class="product__card-imgbox__shape">🔥</div>
                </div>
                <div class="product__card-info">
                    <h3 class="product__card-title">${productCard.title}</h3>
                    <p class="product__card-description">
                       ${productCard.description}
                    </p>
                    <div class="product__card-footer">
                        <h3 class="product__card-price">${productCard.price} UZS</h3>
                        <a href="#" class="product__card-button">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </div>
                </div>
                    `
                productCardLayout.classList.add("product__card");
                productCards.append(productCardLayout);
            }))

            row.appendChild(rowTitle)
            row.appendChild(productCards)
            document.querySelector(".product__main").append(row);
        }))

    }
}

new Card(data).render();