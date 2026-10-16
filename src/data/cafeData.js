export const CAFE_INFO = {
  brandName: "M26 MINI CAFE 26",
  shortName: "M26",
  tagline: "GOOD COFFEE • GOOD MOOD",
  secondarySlogan: "MORE THAN JUST COFFEE",
  highlightQuote: "More Than Just Coffee — A Little Place to Pause, Relax & Enjoy.",
  location: {
    village: "Goviyapana",
    town: "Ahangama",
    district: "Galle District",
    country: "Sri Lanka",
    fullAddress: "Goviyapana, Ahangama 80650, Southern Province, Sri Lanka",
    googleMapsUrl: "https://maps.app.goo.gl/N8Y5HsjqCTZMoaQV7?g_st=iw",
    coordinates: "Goviyapana, Ahangama"
  },
  contact: {
    phone: "+94 725834553",
    phoneDisplay: "+94 (72) 58-34553",
    whatsapp: "94725834553",
    whatsappMessage: "Hello M26 Mini Cafe! I would like to inquire about coffee and opening hours.",
    email: "m26minicafe@gmail.com",
    instagram: "https://www.instagram.com/m26minicafe26?xtok=eTBiZWJud21oNTU2",
    facebook: "https://www.facebook.com/profile.php?id=61594428903293&mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@mini.cafe.26?_r=1&_t=ZS-9AaA4PHYF0O"
  },
  openingHours: {
    isConfirmed: true,
    badgeText: "Open Today",
    schedule: [
      { days: "Monday – Friday", hours: "7:00 AM – 9:00 PM" },
      { days: "Saturday – Sunday", hours: "7:00 AM – 10:00 PM" }

    ],
    note: "Cozy night ambiance with warm string lights & acoustic garden vibes."
  },
  services: {
    dineIn: true,
    takeaway: true,
    delivery: {
      status: "Coming Soon",
      partner: "PickMe Food",
      linkUrl: null
    }
  }
};

export const MENU_CATEGORIES = [
  {
    id: "signature",
    name: "Signature Coffee",
    icon: "Sparkles",
    items: [
      {
        id: "sig-1",
        name: "M26 Amber Coconut Latte",
        description: "Double espresso pulled over velvety steamed coconut milk, infused with roasted kithul treacle & cinnamon dust.",
        priceLKR: "1,100",
        tag: "House Special",
        isPopular: true
      },
      {
        id: "sig-2",
        name: "Goviyapana Spiced Cold Brew",
        description: "16-hour slow-dripped single origin coffee spiced with local cloves, star anise, and Ceylon cinnamon over crystal clear ice.",
        priceLKR: "1,200",
        tag: "Slow Brew",
        isPopular: true
      },
      {
        id: "sig-3",
        name: "Burnt Orange Americano",
        description: "Rich espresso poured over chilled mineral water, accompanied with flamed Sri Lankan orange peel and botanical tonic.",
        priceLKR: "950",
        tag: "Fresh Twist",
        isPopular: false
      },
      {
        id: "sig-4",
        name: "Moonlight Affogato",
        description: "A decadent scoop of creamy artisanal Madagascar vanilla gelato drowned in a freshly pulled double ristretto.",
        priceLKR: "1,050",
        tag: "Dessert & Coffee",
        isPopular: false
      }
    ]
  },
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    icon: "Coffee",
    items: [
      {
        id: "hot-1",
        name: "Single / Double Espresso",
        description: "Pure rich extraction with thick golden-hazelnut crema and balanced dark cocoa undertones.",
        priceLKR: "600 / 800",
        tag: "Classic"
      },
      {
        id: "hot-2",
        name: "Flat White",
        description: "Double ristretto with expertly textured micro-foam milk, silky finish and harmonious strength.",
        priceLKR: "900",
        isPopular: true
      },
      {
        id: "hot-3",
        name: "Caffè Latte",
        description: "Gentle espresso balanced with steamed milk and a light airy layer of foam in our ceramic mugs.",
        priceLKR: "950"
      },
      {
        id: "hot-4",
        name: "Cappuccino",
        description: "Equal balance of bold espresso, rich hot milk, and deep velvet foam dusted with dark cocoa.",
        priceLKR: "950"
      },
      {
        id: "hot-5",
        name: "Long Black / Americano",
        description: "Hot filtered water topped with double espresso keeping the natural aromatic crema intact.",
        priceLKR: "750"
      },
      {
        id: "hot-6",
        name: "Cortado",
        description: "Equal ratio of bold espresso cut gently with warm textured whole milk.",
        priceLKR: "850"
      }
    ]
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    icon: "GlassWater",
    items: [
      {
        id: "ice-1",
        name: "Iced Caramel Macchiato",
        description: "Fresh cold milk layered with handmade vanilla syrup, crowned with espresso shots and buttery salted caramel drizzle.",
        priceLKR: "1,150",
        isPopular: true
      },
      {
        id: "ice-2",
        name: "Iced Spanish Latte",
        description: "Sweet condensed milk base topped with iced milk and a potent double shot of espresso.",
        priceLKR: "1,100",
        tag: "Customer Favorite"
      },
      {
        id: "ice-3",
        name: "Iced Americano on the Rocks",
        description: "Bold espresso cooled over mountain ice cubes for crisp, refreshing tropical energy.",
        priceLKR: "800"
      },
      {
        id: "ice-4",
        name: "M26 Iced Mocha Dream",
        description: "Belgian dark chocolate ganache shaken with espresso, whole milk, and served tall over shaved ice.",
        priceLKR: "1,200"
      }
    ]
  },
  {
    id: "tea-chai",
    name: "Tea & Chai",
    icon: "Flower2",
    items: [
      {
        id: "tea-1",
        name: "Artisanal Ceylon Spiced Chai Latte",
        description: "Crushed green cardamom, fresh ginger, cinnamon and black peppercorn simmered with Ceylon black tea and creamy milk.",
        priceLKR: "850",
        tag: "Authentic"
      },
      {
        id: "tea-2",
        name: "Organic Ceremonial Matcha Latte",
        description: "Stone-ground Japanese matcha whisked with warm oat or dairy milk and light blossom honey.",
        priceLKR: "1,150",
        isPopular: true
      },
      {
        id: "tea-3",
        name: "Single Estate Nuwara Eliya Black Tea",
        description: "High-grown Ceylon loose leaves yielding a light golden liquor with delicate floral notes.",
        priceLKR: "650"
      },
      {
        id: "tea-4",
        name: "Lemongrass & Ginger Garden Infusion",
        description: "Freshly cut garden lemongrass steeped with crushed spicy ginger and lime.",
        priceLKR: "700"
      }
    ]
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    icon: "Flame",
    items: [
      {
        id: "choc-1",
        name: "M26 Signature Dark Cocoa",
        description: "70% melted artisan dark chocolate whisked with rich steamed milk and a pinch of sea salt.",
        priceLKR: "1,050",
        tag: "Indulgent"
      },
      {
        id: "choc-2",
        name: "Campfire Marshmallow Cocoa",
        description: "Thick velvety hot chocolate topped with toasted fluffy marshmallows and cocoa nibs.",
        priceLKR: "1,150"
      }
    ]
  },
  {
    id: "refreshing",
    name: "Refreshing Drinks",
    icon: "Sun",
    items: [
      {
        id: "ref-1",
        name: "Fresh King Coconut (Thambili)",
        description: "Chilled fresh Sri Lankan orange king coconut harvested directly from southern coastal palms.",
        priceLKR: "450",
        tag: "100% Natural"
      },
      {
        id: "ref-2",
        name: "Passion Fruit & Mint Fizz",
        description: "Crushed sweet-tart southern passion fruit pulp muddled with garden mint and sparkling soda.",
        priceLKR: "850"
      },
      {
        id: "ref-3",
        name: "Lime & Ginger Cooler",
        description: "Freshly squeezed green limes, extracted ginger juice, mineral sparkling water and wild honey.",
        priceLKR: "750"
      }
    ]
  },
  {
    id: "addons",
    name: "Special Add-ons",
    icon: "PlusCircle",
    items: [
      {
        id: "add-1",
        name: "Barista Oat Milk / Almond Milk",
        description: "Creamy plant-based alternative steamed to perfection.",
        priceLKR: "+250"
      },
      {
        id: "add-2",
        name: "Extra Espresso Shot",
        description: "Add an extra punch of double-origin roasted espresso.",
        priceLKR: "+250"
      },
      {
        id: "add-3",
        name: "Artisan Flavored Syrups",
        description: "French Vanilla, Salted Caramel, or Toasted Hazelnut.",
        priceLKR: "+150"
      },
      {
        id: "add-4",
        name: "Pure Kithul Treacle Drizzle",
        description: "Authentic Sri Lankan wild palm sweet nectar.",
        priceLKR: "+150"
      }
    ]
  }
];

export const GARDEN_FEATURES = [
  {
    id: "moon-corner",
    title: "Glowing Moon Photo Corner",
    subtitle: "A Dreamy Garden Backdrop",
    description: "Our signature glowing moon installation creates a warm, ethereal glow amidst the tropical night greenery. The perfect backdrop for travelers, couples, and coffee lovers to capture memories under the palm leaves."
  },
  {
    id: "zigzag-lights",
    title: "Warm Zigzag String Lights",
    subtitle: "Golden Hour to Late Dusk",
    description: "Strung overhead across towering palms and tropical foliage, our warm zigzag festoon lighting bathes the stone pathways and wooden seating in a gentle, ambient amber glow."
  },
  {
    id: "coffee-cart",
    title: "The Matte Black Coffee Cart",
    subtitle: "Craftsmanship in the Garden",
    description: "A purpose-built, sleek matte black boutique coffee cart equipped with a commercial espresso setup. Watch our baristas pull espresso shots right in front of you surrounded by nature."
  },
  {
    id: "outdoor-seating",
    title: "Folding Garden Seating & Stone Paths",
    subtitle: "A Laid-back Sri Lankan Escape",
    description: "Relaxed wooden folding chairs, rustic tables, and stepping stones laid on grass. Breathe in the balmy Ahangama coastal breeze just minutes away from Goviyapana surf points."
  }
];
