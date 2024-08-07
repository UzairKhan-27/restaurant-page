function menuPage(){

const menuItems = [
    { name: "Beef Burger", price: "$2.50", image: "./src/burger.jpg" },
    { name: "Chicken Sandwich", price: "$3.00", image: "../src/chickensand.jpg" },
    { name: "Veggie Pizza", price: "$4.00", image: "../src/veggie_pizza.jpg" },
];
const content = document.querySelector("#content");
content.textContent="";
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");

menuItems.forEach(item => {
const menuItem = document.createElement("div");
menuItem.classList.add("menu-items");

const menuName = document.createElement("div");
menuName.classList.add("menu-name");
menuName.textContent = item.name;

const menuPrice = document.createElement("div");
menuPrice.classList.add("menu-price");
menuPrice.textContent = item.price;

const menuImage = document.createElement("img");
menuImage.classList.add("menu-image");
menuImage.src = item.image;

menuItem.appendChild(menuName);
menuItem.appendChild(menuImage);
menuItem.appendChild(menuPrice);
menuContainer.appendChild(menuItem);
});

content.appendChild(menuContainer);
}

export {menuPage};