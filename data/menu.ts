export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  isVegetarian?: boolean;
  isBestseller?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "beverages",
    title: "Artisan Beverages & Coffee",
    subtitle: "Handcrafted hot & cold coffees, signature teas, and chilled specialty refreshers",
    items: [
      {
        id: "b1",
        name: "Classic Cappuccino",
        description: "Rich espresso topped with velvety steamed milk foam & cocoa dust",
        price: "₹180",
        isBestseller: true
      },
      {
        id: "b2",
        name: "Tulip Signature Latte",
        description: "House espresso blend with Madagascar vanilla and salted caramel notes",
        price: "₹220",
        isBestseller: true
      },
      {
        id: "b3",
        name: "24-Hour Cold Brew",
        description: "Slow-steeped single origin dark roast served crisp over ice",
        price: "₹200"
      },
      {
        id: "b4",
        name: "Pistachio Matcha Latte",
        description: "Ceremonial Japanese matcha combined with rich pistachio milk blend",
        price: "₹260",
        isBestseller: true
      },
      {
        id: "b5",
        name: "Rose Cardamom Chai",
        description: "Fragrant spiced milk tea infused with organic dried rose petals",
        price: "₹150"
      },
      {
        id: "b6",
        name: "Mango Passion Frappe",
        description: "Blended tropical fruit reduction whipped with double cream",
        price: "₹240"
      },
      {
        id: "b7",
        name: "Classic Iced Americano",
        description: "Double shot espresso poured over chilled mineral water & ice",
        price: "₹170"
      },
      {
        id: "b8",
        name: "Dark Chocolate Mocha",
        description: "Espresso melted with artisanal dark cocoa chocolate ganache",
        price: "₹230"
      }
    ]
  },
  {
    id: "pasta",
    title: "Handcrafted Gourmet Pasta",
    subtitle: "Artisan penne & spaghetti cooked al dente in slow-simmered sauces with fresh herbs",
    items: [
      {
        id: "p1",
        name: "Pesto Basil Pasta",
        description: "Fresh crushed basil pesto sauce, toasted pine nuts, olive oil & grilled garlic crostini",
        price: "₹340",
        isBestseller: true,
        image: "/images/food/food3.png"
      },
      {
        id: "p2",
        name: "Arrabbiata Spicy Tomato Pasta",
        description: "Fiery San Marzano tomato ragu with chili flakes, garlic oil & fresh oregano",
        price: "₹300"
      },
      {
        id: "p3",
        name: "Alfredo Cream & Mushroom Pasta",
        description: "Decadent butter-cream sauce infused with wild mushrooms, black olives & parmesan",
        price: "₹360",
        isBestseller: true
      },
      {
        id: "p4",
        name: "Tulip Special Pink Sauce Pasta",
        description: "Chef's secret harmonization of rich cream & spiced tomato gravy with grilled veggies",
        price: "₹400",
        isBestseller: true
      },
      {
        id: "p5",
        name: "Classic Aglio e Olio",
        description: "Extra virgin olive oil, golden garlic slivers, red pepper flakes & fresh parsley",
        price: "₹310"
      }
    ]
  },
  {
    id: "sandwiches-starters",
    title: "Craft Sandwiches & Café Starters",
    subtitle: "Artisan breads packed with fresh garden vegetables, melted cheeses & signature dips",
    items: [
      {
        id: "s1",
        name: "Chef's Special Shakshuka",
        description: "Herbed spiced tomato-peppercorn stew served with toasted garlic artisan baguette",
        price: "₹320",
        isBestseller: true,
        image: "/images/food/food2.png"
      },
      {
        id: "s2",
        name: "Classic Tulip Club Sandwich",
        description: "Triple-decker toasted bread filled with cheddar, fresh cucumbers, tomatoes & house sauce",
        price: "₹280"
      },
      {
        id: "s3",
        name: "Grilled Paneer & Bell Pepper Melt",
        description: "Marinated cottage cheese, bell peppers & mozzarella pressed in rustic sourdough",
        price: "₹300",
        isBestseller: true
      },
      {
        id: "s4",
        name: "Basil Pesto Veggie Sub",
        description: "Pesto mayo spread, grilled zucchini, bell peppers & melted mozzarella",
        price: "₹320"
      },
      {
        id: "s5",
        name: "Crispy Samosadilla",
        description: "Fusion Mexican tortilla folded with spiced potato stuffing & cilantro chutney",
        price: "₹250"
      }
    ]
  },
  {
    id: "pizza-continental",
    title: "Artisanal Pizza & Continental",
    subtitle: "Hand-stretched sourdough pizzas baked with fresh herbs & imported mozzarella",
    items: [
      {
        id: "z1",
        name: "Margherita Supreme Pizza",
        description: "San Marzano tomato base, fresh basil leaves, buffalo mozzarella & extra virgin olive oil",
        price: "₹360",
        isBestseller: true
      },
      {
        id: "z2",
        name: "Farm House Garden Pizza",
        description: "Loaded with bell peppers, sweet corn, red onions, mushrooms & fresh jalapenos",
        price: "₹420"
      },
      {
        id: "z3",
        name: "Paneer Hara Bhara Pizza",
        description: "Spiced paneer cubes, mint swirl, bell peppers, mozzarella & chili oil drizzle",
        price: "₹440",
        isBestseller: true
      },
      {
        id: "z4",
        name: "Loaded Garlic Cheese Bread",
        description: "Artisan sourdough bread brushed with garlic butter & topped with melted mozzarella",
        price: "₹240"
      }
    ]
  },
  {
    id: "desserts",
    title: "Signature Desserts & Indulgences",
    subtitle: "Decadent sweet creations prepared fresh daily in our café bakery",
    items: [
      {
        id: "d1",
        name: "Pistachio Crepe Rolls",
        description: "Delicate french crepes filled with pistachio praline cream & crushed nuts",
        price: "₹260",
        isBestseller: true,
        image: "/images/food/food1.png"
      },
      {
        id: "d2",
        name: "Classic Chocolate Lava Fondant",
        description: "Warm molten dark chocolate cake served with vanilla bean gelato",
        price: "₹280",
        isBestseller: true
      },
      {
        id: "d3",
        name: "Belgian Waffle with Berries",
        description: "Crispy waffle topped with maple syrup, wild berry compote & fresh whipped cream",
        price: "₹240"
      },
      {
        id: "d4",
        name: "Espresso Tiramisu",
        description: "Layered ladyfingers soaked in dark espresso & delicate mascarpone mousse",
        price: "₹270"
      }
    ]
  }
];
