import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 14,
        name: "Crispy Roasted Cauliflower with Creamy Pesto Pasta",
        image: images.creamy_pesto,
        duration: "40 min",
        serving: 6,
        isBookmark: true,
        category: "Vegeterian",
        author: {
            profilePic: images.UserProfile3,
            name: "The Half Baked Harvest",
        },
        recipeInfo:[
            'Crispy Roasted Cauliflower with Creamy Pesto Pasta...the coziest, creamiest bowl of healthier pasta that’s fancy AND easy...plus so delicious!'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.cauliflower,
                description: "large head Cauliflower",
                quantity: "1"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.pasta,
                description: "Pasta",
                quantity: "1lb"
            },
            {
                id: 4,
                icon: icons.lemon,
                description: "lemon juice",
                quantity: "1 tspb"
            },
            {
                id: 5,
                icon: icons.sauce,
                description: "Jalapeno",
                quantity: "1"
            },
            {
                id: 6,
                icon: icons.milk,
                description: "Coconut milk, canned full fat",
                quantity: "1 cup"
            },
            {
                id: 7,
                icon: icons.basil,
                description: "Basil, fresh",
                quantity: "1 1/2 cups"
            },
            {
                id: 8,
                icon: icons.aragula,
                description: "Baby arugula",
                quantity: "1 cup"
            },
            
        ],
        viewers: [
        ]
    },
    {
        id: 7,
        name: "Creamed Spinach",
        image: images.spinach,
        duration: "25 mins",
        serving: 8,
        isBookmark: true,
        category: "Vegeterian",
        author: {
            profilePic: images.UserProfile4,
            name: "The Modern Proper",
        },
        recipeInfo:[
            'We’re always looking for ways to eat more vegetables. Creamed spinach is great all year round, and is so easy to make using frozen spinach.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.spinach,
                description: "Spinach",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "4"
            },
            {
                id: 3,
                icon: icons.garlic,
                description: "Garlic powder",
                quantity: "3/4"
            },
            {
                id: 4,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "1/4 tsbp"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sea salt",
                quantity: "1/2 tsp"
            },
            {
                id: 6,
                icon: icons.chilli,
                description: "Cayenne",
                quantity: "1/4 tsp"
            },
            {
                id: 7,
                icon: icons.nutmeg,
                description: "Nutmeg",
                quantity: "1/4 tsp"
            },
        ],
        viewers: [
        ]
    },
    {
        id: 13,
        name: "Portobello Wellington with pecans & sage",
        image: images.portobello,
        duration: "2 hour",
        serving: 1,
        isBookmark: true,
        category: "Vegeterian",
        author: {
            profilePic: images.UserProfile7,
            name: "Plant Craft",
        },
        recipeInfo:[
            'Savory and elegant, this Portobello Wellington is perfect for the holidays or a fancy dinner! Earthy mushrooms and rich pecans are a perfect combination for a hearty fall dish.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "6"
            },
            {
                id: 2,
                icon: icons.coriander,
                description: "bunch greens",
                quantity: "1"
            },
            {
                id: 3,
                icon: icons.mushroom,
                description: "Mushroom dried",
                quantity: "1oz"
            },
            {
                id: 7,
                icon: icons.lemongrass,
                description: "Sage",
                quantity: "2 tbsp"
            },
            {
                id: 4,
                icon: icons.rosemary,
                description: "Rosemary dried",
                quantity: "2 tbsp"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "2"
            },
            {
                id: 6,
                icon: icons.potato,
                description: "Sweet potatoes",
                quantity: "4"
            },
        ],
        viewers: [
        ]
    },
    {
        id: 8,
        name: "Vegan Kale Caesar Salad",
        image: images.caesar_salad,
        duration: "20 mins",
        serving: 4,
        isBookmark: true,
        category: "Vegeterian",
        author: {
            profilePic: images.UserProfile7,
            name: "Crowded Kitchen",
        },
        recipeInfo:[
            'This Vegan Kale Caesar Salad with a creamy tahini-based caesar dressing, avocado and crispy chickpeas is one of my favorite vegan salad recipes. So full of flavor, texture and tastes just like the real thing!.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.avacado,
                description: "BBQ Marinated",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "1"
            },
            {
                id: 3,
                icon: icons.kale,
                description: "Lacinato kale",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.peas,
                description: "Sea salt chickpeas, roasted",
                quantity: "1/2 cups"
            },
            {
                id: 5,
                icon: icons.dijon,
                description: "Dijon mustard",
                quantity: "3/4 tsp"
            },
            {
                id: 6,
                icon: icons.lemon,
                description: "Lemon juice",
                quantity: "1/2 tbsp"
            },
            {
                id: 7,
                icon: icons.tahini,
                description: "Tahini",
                quantity: "1/4 cup"
            },
            {
                id: 8,
                icon: icons.pepper,
                description: "Pepper",
                quantity: "1"
            },
            {
                id: 9,
                icon: icons.salt,
                description: "Sea salt, fine",
                quantity: "1/2 tsp"
            },
            {
                id: 10,
                icon: icons.water,
                description: "Water",
                quantity: "1/3 cups"
            },
        ],
        viewers: [
        ]
    },

    {
        id: 5,
        name: "Grilled-Sweet Potatoes with Cilantro Chimichurri",
        image: images.grilled_potatoes,
        duration: "27 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile7,
            name: "Reciperunner",
        },
        recipeInfo:[
          "Grilled Sweet Potatoes with Cilantro Chimichurri are the perfect side dish to make this summer! A little sweet, mostly savory and tons of fresh flavor!"
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.potato,
                description: "Sweet potatoes, large",
                quantity: "2"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "1"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Green Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.jalapeno,
                description: "Jalapeno",
                quantity: "1"
            },
            {
                id: 5,
                icon: icons.lemon,
                description: "Lime",
                quantity: "1"
            },
            {
                id: 6,
                icon: icons.coriander,
                description: "Cilantro, packed leaves",
                quantity: "1/2"
            },
            {
                id: 7,
                icon: icons.salt,
                description: "Kosher salt",
                quantity: "1"
            },
            {
                id: 8,
                icon: icons.pepper,
                description: "black pepper",
                quantity: "1"
            },
            {
                id: 9,
                icon: icons.kale,
                description: "Flat leaf parsley, packed",
                quantity: "1/2 cups"
            },
            {
                id: 10,
                icon: icons.oil,
                description: "Olive oil",
                quantity: "1/3 cup "
            },
        ],
        viewers: [
        ]
    },
    {
        id: 9,
        name: "Perfect Oregano Fries",
        image: images.organo_fries,
        duration: "30 mins",
        serving: 2,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile16,
            name: "School Night Vegan",
        },
        recipeInfo:[
            'Crispy, fragrant oregano fries! Perfect for with vegan souvlaki or as a twist on your classic vegan burger accompaniment! Serve with vegan mayo, like a pro.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.oregano,
                description: "Oregano, dried",
                quantity: "2 tsbp"
            },
            {
                id: 2,
                icon: icons.salt,
                description: "Sea salt, flaky",
                quantity: "1 tsbp"
            },
            {
                id: 3,
                icon: icons.oil,
                description: "Sunflower or vegetable oil",
                quantity: "1 lt"
            },
            {
                id: 4,
                icon: icons.potato,
                description: "Potatoes",
                quantity: "800g"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile10
            },
            {
                id: 2,
                profilePic: images.UserProfile16
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile12
            }
        ]
    },
    {
        id: 10,
        name: "Rosemary Mezcal Negroni",
        image: images.rosemary,
        duration: "3 min",
        serving: 6,
        isBookmark: false,
        category: "Local",
        author: {
            profilePic: images.UserProfile11,
            name: "Liquor.com",
        },
        recipeInfo:[
            'The Rosemary Mezcal Negroni is a fun twist on the classic cocktail. It employs rosemary-infused Campari and a flamed rosemary garnish.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.mezcal,
                description: "Mezcal",
                quantity: "1 1/4 oz"
            },
            {
                id: 2,
                icon: icons.vermouth,
                description: "Sweet vermouth",
                quantity: "1 oz"
            },
            {
                id: 3,
                icon: icons.rosemary_sprig,
                description: "rosemary-sprig",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.rosemary_sweet,
                description: "Rosemary-infused Campari",
                quantity: "1 oz"
            },
        ],
        viewers: [
        ]
    },
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        recipeInfo:[
            'This truly is the BEST red sauce spaghetti recipe. It requires only a good, flavorsome tomato pasta sauce and grilled shrimp.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile13
            },
            {
                id: 2,
                profilePic: images.UserProfile16
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        recipeInfo:[
            'This chicken satay recipe from Mandy Yin is inspired by Malaysia and her home city of Kuala Lumpur. The grilled chicken comes with a delicious peanut sauce.',
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile9,
            name: "Sift & Summer | Matcha & Modern Asian",
        },
        recipeInfo:[
            'This is my Moms recipe for homemade Malaysian-style laksa noodles, with a flavourful scratch-made paste. Rice vermicelli noodles and toppings swim in a rich, bright and fragrant broth.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 11,
        name: "Chocolate Almond Autumn Negroni",
        image: images.chocolate_almond,
        duration: "2 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Cooking with Wine",
        },
        recipeInfo:[
            'A fall twist on the Classic Negroni with flavors of chocolate and almond'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.cinnamon,
                description: "Cinnamon stick",
                quantity: "1"
            },
            {
                id: 2,
                icon: icons.chocolate_bitters,
                description: "Chocolate bitters",
                quantity: "4 dashes"
            },
            {
                id: 3,
                icon: icons.vermouth,
                description: "Sweet vermouth",
                quantity: "3/4 oz"
            },
            {
                id: 4,
                icon: icons.gin,
                description: "Gin",
                quantity: "3/4 oz"
            },
            {
                id: 5,
                icon: icons.campri,
                description: "Campari",
                quantity: "3/4 oz"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile13,
            name: "Tilda Rice",
        },
        recipeInfo:[
            'Come and make this national dish of Malaysia. It’s super easy and delicious. The key to making the perfect Nasi Lemak is using superior quality Fragrant Jasmine rice cooked in coconut milk, with pandan leaf and lemongrass to soak in all the beautiful flavours of the dish.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
        viewers: [

        ]
    },
    {
        id: 15,
        name: "Crab cakes with katsu curry sauce",
        image: images.crab_cake,
        duration: "30 min",
        serving: 4,
        isBookmark: false,
        category: "Local",
        author: {
            profilePic: images.UserProfile14,
            name: "Delicious Magazine",
        },
        recipeInfo:[
            'James Martin shares his crab cakes recipe. Serve the crisp crab cakes on a bed of golden katsu curry sauce for an impressive starter.'
        ],
        ingredients: [
            {
                id: 1,
                icon: icons.coriander,
                description: "Coriander, ground",
                quantity: "1 tbsp"
            },
            {
                id: 2,
                icon: icons.potato,
                description: "Floury potatoes",
                quantity: "400g"
            },
            {
                id: 3,
                icon: icons.rice,
                description: "Potatoe rice",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.juice,
                description: "Lemon juice",
                quantity: "1"
            },
            {
                id: 5,
                icon: icons.zest,
                description: "Zest",
                quantity: "1"
            },
            {
                id: 6,
                icon: icons.egg,
                description: "Egg yolk, medium free-range",
                quantity: "1"
            },
            {
                id: 7,
                icon: icons.chicken,
                description: "Chicken stock",
                quantity: "200ml"
            },
            {
                id: 8,
                icon: icons.onion,
                description: "Coriander and finely sliced spring onions to serve",
                quantity: "1"
            },
        ],
        viewers: [
        ]
    },
    {
    id: 6,
    name: "Roasted Pumpkin with Yogurt Sauce & Pine Nuts",
    image: images.pumpkin,
    duration: "40 mins",
    serving: 4,
    isBookmark: true,
    category: "Vegeterian",
    author: {
        profilePic: images.UserProfile15,
        name: "Saprea",
    },
    recipeInfo:[
        'Recipe video above. This is a great way to use pumpkin that ticks a lot of boxes - its simple to make, works just as well as a side for a grand roast, or as part of a salad lunch spread, can easily to altered to fit various cuisines and occasions by changing the nuts and fresh herb, and it looks rustic and good with zero effort!.'
    ],
    ingredients: [
        {
            id: 1,
            icon: icons.pumpkin,
            description: "Pumpkin",
            quantity: " 1¼ kg"
        },
        {
            id: 2,
            icon: icons.garlic,
            description: "Garlic cloves",
            quantity: "1"
        },
        {
            id: 3,
            icon: icons.coriander,
            description: "Coriander",
            quantity: "2 tsbp"
        },
        {
            id: 4,
            icon: icons.lemon,
            description: "Lemon juice",
            quantity: "1 tsbp"
        },
        {
            id: 5,
            icon: icons.pepper,
            description: "Salt and pepper",
            quantity: "¼ tbsp"
        },
        {
            id: 6,
            icon: icons.oil,
            description: "Olive Oil, Extra Virgin",
            quantity: "3 tbsp"
        },
        {
            id: 7,
            icon: icons.yogurt,
            description: "Greek yogurt",
            quantity: "3/4 cup"
        },
        {
            id: 8,
            icon: icons.nuts,
            description: "Pine nuts",
            quantity: "2 tsbp"
        },
    ],
    viewers: [
    ]
},
{
    id: 12,
    name: "Black Bean Taco Stuffed Sweet Potatoes",
    image: images.taco,
    duration: "1 hour ",
    serving: 8,
    isBookmark: true,
    category: "Vegan",
    author: {
        profilePic: images.UserProfile12,
        name: "Savor + Savvy",
    },
    recipeInfo:[
        'Make these Vegan Black Bean Taco Stuffed Sweet Potatoes for a satisfying Mexican dish thats healthy, fresh and amazingly flavorful. {WW 3 Purple, 5 Blue, 6 Green, Vegan, Vegetarian, Gluten Free}'
    ],
    ingredients: [
        {
            id: 1,
            icon: icons.avacado,
            description: "Avacado",
            quantity: "2"
        },
        {
            id: 2,
            icon: icons.bean,
            description: "Black beans",
            quantity: "15 oz"
        },
        {
            id: 3,
            icon: icons.garlic,
            description: "Garlic powder",
            quantity: "¼ tbsp"
        },
        {
            id: 4,
            icon: icons.onion,
            description: "Onion powder",
            quantity: "¼ tbsp"
        },
        {
            id: 5,
            icon: icons.onion,
            description: "Green Onion",
            quantity: "1 stalk "
        },
        {
            id: 6,
            icon: icons.onion,
            description: "Red Onion",
            quantity: "1/2 tbsp"
        },
        {
            id: 7,
            icon: icons.potato,
            description: "Sweet Pototoes",
            quantity: "4"
        },
        {
            id: 8,
            icon: icons.salt,
            description: "Salt",
            quantity: "1"
        },
        {
            id: 9,
            icon: icons.pepper,
            description: "Pepper",
            quantity: "1"
        },
        {
            id: 10,
            icon: icons.tomato,
            description: "Roma tomatoes",
            quantity: "4"
        },
        {
            id: 11,
            icon: icons.salsa,
            description: "Salsa, homemade",
            quantity: "1/3 cup"
        },
    ],
    viewers: [
        {
            id: 1,
            profilePic: images.UserProfile5
        },
        {
            id: 2,
            profilePic: images.UserProfile4
        },
        {
            id: 3,
            profilePic: images.UserProfile1
        },
        {
            id: 4,
            profilePic: images.UserProfile2
        },
        {
            id: 5,
            profilePic: images.UserProfile3
        }
    ]
}, 
]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}