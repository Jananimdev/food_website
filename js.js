const restaurantData = [
    {
        name: "Chill Out",
        cuisine: "Saravanapatti",
        rating: 4.5,
        imageUrl: "a.jpeg",
        menu: [
            "Pizza",
            "Pasta Carbonara",
            "Burger",
            // Add more menu items for Restaurant A
        ]
    },
    {
        name: "AboorVasS",
        cuisine: "Gandhipuram",
        rating: 3.8,
        imageUrl: "b.jpeg",
        menu: [
            "Taco Supreme",
            "Burrito Bowl",
            "Coffee",
            // Add more menu items for Restaurant B
        ]
    },
    {
        name: "Amma SamayaL",
        cuisine: "Coimbatore",
        rating: 3.8,
        imageUrl: "c.jpeg",
        menu: [
            "Idly",
            "Dosa",
            "Boori",
            // Add more menu items for Restaurant C
        ]
    }
    // Add more restaurant data
];

const restaurantList = document.getElementById("restaurant-list");

function createRestaurantCard(restaurant) {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");

    const image = document.createElement("img");
    image.src = restaurant.imageUrl;
    image.alt = restaurant.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = restaurant.name;
    card.appendChild(name);

    const cuisine = document.createElement("p");
    cuisine.textContent = restaurant.cuisine;
    card.appendChild(cuisine);

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${restaurant.rating}`;
    card.appendChild(rating);

    const placeOrderBtn = document.createElement("button");
    placeOrderBtn.textContent = "Place Order";
    placeOrderBtn.addEventListener("click", () => showMenu(restaurant.menu));
    card.appendChild(placeOrderBtn);

    return card;
}

function showMenu(menu) {
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    for (const menuItem of menu) {
        const menuItemElement = document.createElement("li");

        // Create an anchor tag for each menu item
        const menuItemLink = document.createElement("a");
        menuItemLink.textContent = menuItem;

        // Add a click event listener to the anchor tag
        menuItemLink.addEventListener("click", () => placeOrder(menuItem));

        menuItemElement.appendChild(menuItemLink);
        menuList.appendChild(menuItemElement);
    }

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(menuList);

    // Clear existing menu if any
    const existingMenu = document.querySelector(".menu-container");
    if (existingMenu) {
        existingMenu.remove();
    }

    restaurantList.appendChild(menuContainer);
}

function placeOrder(menuItem) {
    const selectedMenuItem = menuItem;
    const userAddress = prompt(`Please enter your address for ${selectedMenuItem}:`);

    if (userAddress !== null && userAddress.trim() !== "") {
        alert(`Your order for ${selectedMenuItem} has been placed! Your address is: ${userAddress}`);
    } else {
        alert("You didn't enter an address. Please enter your address to place the order.");
    }
}

function displayRestaurants() {
    for (const restaurant of restaurantData) {
        const card = createRestaurantCard(restaurant);
        restaurantList.appendChild(card);
    }
}

displayRestaurants();
