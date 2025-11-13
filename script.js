const restaurants = [
  {
    name: "Pista House",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NFjgiX_zdFsWhpU6z7CwpNHEOGXEAaFj7g&s",
    description: "Famous for Hyderabadi biryani and desserts.",
    menu: [
      { item: "Chicken Biryani", img: "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop-500x500.jpg" },
      { item: "Haleem", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwclvnr5Xy3SIz0tTHthYgasrwJUwI2adsA&s" },
      { item: "Falooda", img: "https://sreerajlassibar.com/wp-content/uploads/2024/09/Copy-of-falooda-with-1-ice-cream.jpg" },
      { item: "Mutton Curry", img: "https://static.toiimg.com/photo/63201465.cms" }
    ]
  },
  {
    name: "Pizza Hut",
    image: "https://mma.prnewswire.com/media/1583100/Pizza_Hut_Logo.jpg?p=facebook",
    description: "Delicious cheesy pizzas and sides.",
    menu: [
      { item: "Margherita Pizza", img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.5f4ef870fb437d0f7e82360758641f2b.1.jpg" },
      { item: "Pepperoni Pizza", img: "https://media.cnn.com/api/v1/images/stellar/prod/220126081833-pizza-hut-spicy-lover.jpg?c=16x9&q=h_833,w_1480,c_fill" },
      { item: "Garlic Bread", img: "https://thefoodcharlatan.com/wp-content/uploads/2023/05/Garlic-Bread-Recipe-15.jpg" },
      { item: "Choco Lava Cake", img: "https://daddysbakery.in/wp-content/uploads/2019/01/Choco-Lava-Cake.jpg" }
    ]
  },
  {
    name: "Domino’s",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/de/81/bc/logo-domino-s-pizza.jpg?w=500&h=-1&s=1",
    description: "Freshly baked pizzas and pasta specials.",
    menu: [
      { item: "Veg Extravaganza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zs4jFjRG7TtWprOnX53ahQ01yvA20wOBlw&s" },
      { item: "Cheese Burst Pizza", img: "https://i.ytimg.com/vi/RSdVQNNX7oI/maxresdefault.jpg" },
      { item: "Pasta Italiano", img: "https://picky-palate.com/wp-content/uploads/2021/06/IMG_6144.jpg" },
      { item: "Brownie", img: "https://sugarspunrun.com/wp-content/uploads/2019/08/Homemade-Brownies-Recipe-5-of-12.jpg" }
    ]
  },
  {
    name: "KFC",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xuIKBVZ9oAQ_2Z6JdVKVOaaY-_bPWteG9w&s",
    description: "Crispy fried chicken and burgers.",
    menu: [
      { item: "Zinger Burger", img: "https://globalprimenews.com/wp-content/uploads/2020/10/IMG-20201031-WA0004-1024x722.jpg" },
      { item: "Fried Chicken Bucket", img: "https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg" },
      { item: "Popcorn Chicken", img: "https://theyummydelights.com/wp-content/uploads/2021/07/popcorn-chicken-9.jpg" },
      { item: "Krusher", img: "https://i.ytimg.com/vi/kVFGy4Q7ab0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD8Rgaq-wuVO1st2brfO_wxuM8xdA" }
    ]
  },
  {
    name: "Green Park",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsaf0NZQwYGR4PluWEHHCwNCwm7q0yqRBUQ&s",
    description: "Luxury dining with multicuisine options.",
    menu: [
      { item: "Biryani", img: "https://authenticroyal.com/wp-content/uploads/2024/10/royal-rice-may-220461.jpg" },
      { item: "Paneer Butter Masala", img: "https://aartimadan.com/wp-content/uploads/2023/11/Paneer-Butter-Masala-Restaurant-Style.jpg" },
      { item: "Veg Biryani", img: "https://theartisticcook.com/wp-content/uploads/2024/01/Vegetablebiryani1-500x500.jpg" },
      { item: "Gulab Jamun", img: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp" }
    ]
  },
  {
    name: "Khursheed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3qtvSRZpvhS_zSJFIfBZFTRbi5gb9iiiBw&s",
    description: "Authentic Mughlai and tandoori flavors.",
    menu: [
      { item: "Biryani", img: "https://authenticroyal.com/wp-content/uploads/2024/10/royal-rice-may-220461.jpg" },
      { item: "Tandoori Chicken", img: "https://images.getrecipekit.com/20250402072331-tandoori-20chicken.jpg?width=650&quality=90&" },
      { item: "Mutton Seekh Kebab", img: "https://c.ndtvimg.com/2020-08/n6ogafj_kebab_625x300_12_August_20.jpg" },
      { item: "Butter Naan", img: "https://i0.wp.com/www.sharmiskitchen.com/wp-content/uploads/2020/09/Garlic-Naan1.jpg?fit=799%2C1200&ssl=1" },
      { item: "Firni", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/phirni-firni-recipe.jpg" }
    ]
  },
  {
    name: "Cakewala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhhJovYcQtQnAi5DVrTl1CuDLq1C7kdN0ZA&s",
    description: "Heaven for dessert lovers with premium cakes.",
    menu: [
      { item: "Black Forest Cake", img: "https://www.fnp.com/images/pr/l/v20250612185111/black-forest-cake_1.jpg" },
      { item: "Chocolate Truffle", img: "https://carveyourcraving.com/wp-content/uploads/2022/12/easy-chocolate-truffles-recipe.jpg" },
      { item: "Cupcakes", img: "https://www.allrecipes.com/thmb/riDYvmalWk8QgJDBT_pZRkpfpR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17377-chocolate-cupcakes-DDMFS-4x3-622a7a66fcd84692947794ed385dc991.jpg" },
      { item: "Pastries", img: "https://cdn.uengage.io/uploads/7175/image-732476-1748506125.jpeg" }
    ]
  }
];

const restaurantList = document.getElementById("restaurant-list");
const favoritesList = document.getElementById("favorites-list");
let favorites = [];

function displayRestaurants() {
  restaurantList.innerHTML = "";
  restaurants.forEach(res => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
      <h3>${res.name}</h3>
      <img src="${res.image}" alt="${res.name}">
      <p>${res.description}</p>
      <div class="menu-section">
        ${res.menu.map(m => `
          <div class="menu-item">
            <img src="${m.img}" alt="${m.item}">
            <p>${m.item}</p>
            <button onclick="placeOrder('${res.name}','${m.item}')">🛒 Order</button>
            <button class="fav-btn" onclick="addToFavorites('${res.name}','${m.item}','${m.img}')">❤️ Add</button>
          </div>
        `).join("")}
      </div>
    `;
    restaurantList.appendChild(card);
  });
}

function placeOrder(restaurant, item) {
  const quantity = prompt(`Enter quantity for ${item} from ${restaurant}:`);
  if (quantity && quantity > 0) {
    alert(`✅ Order placed!\nRestaurant: ${restaurant}\nItem: ${item}\nQuantity: ${quantity}`);
  } else {
    alert("❌ Invalid quantity. Please try again.");
  }
}

function addToFavorites(restaurant, item, img) {
  // Check if already added
  const exists = favorites.find(f => f.restaurant === restaurant && f.item === item);
  if (!exists) {
    favorites.push({ restaurant, item, img });
    displayFavorites();
  }
}

function displayFavorites() {
  if (favorites.length === 0) {
    favoritesList.innerHTML = "<p>No favorite items yet.</p>";
    return;
  }

  favoritesList.innerHTML = "";
  favorites.forEach(fav => {
    const favCard = document.createElement("div");
    favCard.classList.add("menu-item");
    favCard.innerHTML = `
      <img src="${fav.img}" alt="${fav.item}">
      <p>${fav.item} <br><small>${fav.restaurant}</small></p>
      <button class="fav-btn" onclick="removeFromFavorites('${fav.restaurant}','${fav.item}')">❌ Remove</button>
    `;
    favoritesList.appendChild(favCard);
  });
}

function removeFromFavorites(restaurant, item) {
  favorites = favorites.filter(f => !(f.restaurant === restaurant && f.item === item));
  displayFavorites();
}

// Initial load
displayRestaurants();
displayFavorites();
