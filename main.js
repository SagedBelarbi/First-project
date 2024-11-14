
const featureImages = [
    { src: "img/features/f1.png", alt: "Free Shipping", text: "Free Shipping" },
    { src: "img/features/f2.png", alt: "Online Order", text: "Online Order" },
    { src: "img/features/f3.png", alt: "Save Money", text: "Save Money" },
    { src: "img/features/f4.png", alt: "Promotions", text: "Promotions" },
    { src: "img/features/f5.png", alt: "Happy Sell", text: "Happy Sell" },
    { src: "img/features/f6.png", alt: "24/7 Support", text: "24/7 Support" },
];

//To add images in feature
const featureContainer = document.querySelector("#feature");
featureContainer.innerHTML = featureImages.map(feature => `
    <div class="fe-box">
        <img src="${feature.src}" alt="${feature.alt}">
        <h6>${feature.text}</h6>
    </div>
`).join("");

const products = [
    { src: "img/products/f1.jpg", brand: "adidas", name: " T-Shirts", price: "$78" },
    { src: "img/products/f2.jpg", brand: "adidas", name: "T-Shirts", price: "$45" },
    { src: "img/products/f3.jpg", brand: "adidas", name: "T-Shirts", price: "$88" },
    { src: "img/products/f4.jpg", brand: "adidas", name: "T-Shirts", price: "$60" },
    { src: "img/products/f5.jpg", brand: "adidas", name: "T-Shirts", price: "$70" },
    { src: "img/products/f6.jpg", brand: "adidas", name: "T-Shirts", price: "$90" },
    { src: "img/products/f7.jpg", brand: "adidas", name: "Jeans", price: "$99.99" },
    { src: "img/products/f8.jpg", brand: "adidas", name: "T-Shirts", price: "$75" },
];

//Function to add products in HTML 
function generateProductHTML(product) {
    return `
        <div class="pro">
            <img src="${product.src}" alt="${product.name}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>  
                <div class="star">
                    ${'<i class="bx bx-star"></i>'.repeat(5)}
                </div>
                <h4>${product.price}</h4>
            </div>
            <a href="#"><i class="bx bx-cart-alt cart"></i></a>
        </div>
    `;
}


//To add products in "Featured Products" section
const featuredContainer = document.querySelectorAll("#product1 .pro-container")[0];
featuredContainer.innerHTML = products.slice(0, 4).map(generateProductHTML).join("");


//To add products in "New Arrivals" section
const newArrivalsContainer = document.querySelectorAll("#product1 .pro-container")[1];
newArrivalsContainer.innerHTML = products.slice(4).map(generateProductHTML).join("");
