/* ==========================================================================
   Radstadt Eats - Application Engine
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. MOCK DATABASE (Radstadt Restaurants)
// --------------------------------------------------------------------------
const RESTAURANT_DATA = [
  {
    id: "stegerbraeu",
    name: "Restaurant Stegerbräu",
    cuisine: "Traditional Austrian",
    priceLevel: 2, // €€
    rating: 4.7,
    address: "Schloßstraße 2, 5550 Radstadt",
    phone: "+43 6452 7481",
    coordinates: [47.3802, 13.4660],
    features: ["vegetarian", "outdoorSeating", "historic", "delivery"],
    vibes: ["Historic Inn", "Cozy Stube", "Brewery Vibe", "Beer Garden"],
    description: "Stegerbräu is a historic monument in the town center of Radstadt. Serving hearty home-cooked traditional Austrian meals alongside premium local craft beers, it is famous for its cozy indoor wood-crafted stube and scenic garden terrace with direct views of the Radstadt mountains.",
    imageGrad: "linear-gradient(135deg, #0f342a 0%, #d99f45 100%)",
    hours: {
      0: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }], // Sun
      1: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }], // Mon
      2: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }], // Tue
      3: [], // Wednesday - Rest Day (Ruhetag)
      4: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }], // Thu
      5: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }], // Fri
      6: [{ open: "11:30", close: "14:30" }, { open: "17:30", close: "22:00" }]  // Sat
    },
    menu: [
      {
        title: "Soups & Starters",
        items: [
          { id: "steger-soup-1", name: "Pongauer Kaspressknödelsuppe", description: "Clear beef broth with flat cheese-pressed dumpling and fresh chives.", price: 5.40, tags: ["vegetarian"] },
          { id: "steger-soup-2", name: "Frittatensuppe", description: "Savory clear beef soup with finely sliced pancake strips.", price: 4.80, tags: [] },
          { id: "steger-star-3", name: "Alpine Brettljause", description: "Rustic wooden board loaded with dry-cured ham, mountain cheese, spreads, pickles, and wood-fired bread.", price: 12.80, tags: [] }
        ]
      },
      {
        title: "Main Dishes",
        items: [
          { id: "steger-main-1", name: "Wiener Schnitzel vom Schwein", description: "Crispy breaded pork cutlet pan-fried in butter, served with parsley potatoes and wild lingonberry jam.", price: 15.90, tags: [] },
          { id: "steger-main-2", name: "Pongauer Kasnocken", description: "Traditional small flour dumplings baked with mountain cheese and melted butter, topped with crispy onion rings, served in a cast-iron pan.", price: 13.50, tags: ["vegetarian"] },
          { id: "steger-main-3", name: "Braumeister Gulasch", description: "Hearty beef goulash slow-cooked in our house dark beer sauce, served with bread dumplings and a fried egg.", price: 16.50, tags: [] }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: "steger-des-1", name: "Hausgemachter Kaiserschmarrn", description: "Fluffy shredded caramelized pancake with raisins, served with roasted plum compote.", price: 9.80, tags: ["vegetarian"] },
          { id: "steger-des-2", name: "Stegerbräu Spezialbier (0.5L)", description: "Our exclusive house craft draft lager, brewed locally with alpine spring water.", price: 4.60, tags: [] }
        ]
      }
    ],
    reviews: [
      { author: "Hans M.", rating: 5, date: "2026-05-10", comment: "Excellent Schnitzel! The Kasnocken in the iron pan was superb. Great service, very cozy!" },
      { author: "Sarah L.", rating: 4, date: "2026-05-02", comment: "Very authentic place. The garden is beautiful on sunny days. Try their house beer!" },
      { author: "Michael K.", rating: 5, date: "2026-04-18", comment: "Friendly staff and historic atmosphere. Definitely worth visiting in the town center." }
    ]
  },
  {
    id: "kaswurm",
    name: "Wirtshaus Zum Kaswurm",
    cuisine: "Fine Dining",
    priceLevel: 3, // €€€
    rating: 4.9,
    address: "Löbenau 31, 5550 Radstadt",
    phone: "+43 6452 5389",
    coordinates: [47.3712, 13.4560],
    features: ["vegetarian", "vegan", "glutenFree", "outdoorSeating"],
    vibes: ["Farm-to-Table", "Fine Dining", "Organic ingredients", "Scenic Patio"],
    description: "Zum Kaswurm is a highly decorated restaurant set in a gorgeous countryside location just outside Radstadt center. They serve award-winning gourmet interpretations of Pongau specialties, using organic vegetables and meats sourced entirely from their own family-run farm and local hunters.",
    imageGrad: "linear-gradient(135deg, #1d4d3f 0%, #152d26 100%)",
    hours: {
      0: [{ open: "12:00", close: "21:30" }],
      1: [], // Monday Ruhetag
      2: [], // Tuesday Ruhetag
      3: [{ open: "17:30", close: "21:30" }],
      4: [{ open: "17:30", close: "21:30" }],
      5: [{ open: "12:00", close: "21:30" }],
      6: [{ open: "12:00", close: "21:30" }]
    },
    menu: [
      {
        title: "Chef's Tasting Menu",
        items: [
          { id: "kas-soup-1", name: "Bio-Rinderkraftbrühe", description: "Double-clarified organic beef consommé with wild herbs and hand-rolled marrow dumplings.", price: 6.80, tags: [] },
          { id: "kas-main-1", name: "Hirschrückensteak aus Pongauer Jagd", description: "Medium-rare roasted saddle of local venison, celery root puree, buttered chanterelles, juniper wild berry jus.", price: 34.00, tags: ["glutenFree"] },
          { id: "kas-main-2", name: "Hausgemachte Rote-Rüben-Knödel", description: "Delicate organic beetroot dumplings filled with local goat cheese, served with brown sage butter and toasted walnuts.", price: 18.50, tags: ["vegetarian"] },
          { id: "kas-des-1", name: "Gebackene Holunderblüten", description: "Tempura battered elderflower blossoms picked from our gardens, served with homemade honey-chamomile ice cream.", price: 11.20, tags: ["vegetarian"] }
        ]
      }
    ],
    reviews: [
      { author: "Emma S.", rating: 5, date: "2026-05-14", comment: "Absolute masterpiece of dining! True farm-to-table. The venison was spectacular." },
      { author: "Lukas P.", rating: 5, date: "2026-05-05", comment: "Fine dining in an authentic rustic environment. Service is perfect. Best food in Radstadt." }
    ]
  },
  {
    id: "torwirt",
    name: "Torwirt Radstadt",
    cuisine: "Traditional Austrian",
    priceLevel: 2, // €€
    rating: 4.5,
    address: "Schloßstraße 16, 5550 Radstadt",
    phone: "+43 6452 4239",
    coordinates: [47.3804, 13.4678],
    features: ["vegetarian", "outdoorSeating", "historic"],
    vibes: ["Cosy Stube", "Traditional", "Friendly Staff"],
    description: "Located near the historic city wall gate of Radstadt, Torwirt offers a welcoming local dining experience. Specializing in mountain river trout, crispy roasted pork hock, and seasonal Austrian specialties, it provides a warm environment that locals adore.",
    imageGrad: "linear-gradient(135deg, #d99f45 0%, #0f342a 100%)",
    hours: {
      0: [{ open: "11:00", close: "22:00" }],
      1: [{ open: "11:00", close: "22:00" }],
      2: [{ open: "11:00", close: "22:00" }],
      3: [{ open: "11:00", close: "22:00" }],
      4: [], // Thursday Ruhetag
      5: [{ open: "11:00", close: "22:00" }],
      6: [{ open: "11:00", close: "22:00" }]
    },
    menu: [
      {
        title: "Local Specialties",
        items: [
          { id: "tor-main-1", name: "Radstädter Bachforelle 'Müllerin Art'", description: "Local stream trout pan-fried with almonds and butter, served with parsley potatoes and mixed salad.", price: 18.90, tags: ["glutenFree"] },
          { id: "tor-main-2", name: "Zwiebelrostbraten", description: "Tender ribeye steak smothered in onion gravy, topped with crispy onion rings, served with roasted potatoes.", price: 22.80, tags: [] },
          { id: "tor-des-1", name: "Heidelbeerdatschi", description: "Traditional sweet pastry filled with wild mountain blueberries and powdered sugar.", price: 7.20, tags: ["vegetarian"] }
        ]
      }
    ],
    reviews: [
      { author: "Markus V.", rating: 5, date: "2026-05-09", comment: "The mountain trout was incredibly fresh! Friendly service, cozy atmosphere." }
    ]
  },
  {
    id: "donsalvatore",
    name: "Don Salvatore",
    cuisine: "Italian",
    priceLevel: 2, // €€
    rating: 4.6,
    address: "Hauptplatz 5, 5550 Radstadt",
    phone: "+43 6452 3892",
    coordinates: [47.3798, 13.4645],
    features: ["vegetarian", "vegan", "outdoorSeating", "delivery"],
    vibes: ["Modern Italian", "Lively", "Wood-fired Pizza"],
    description: "Located right on the Hauptplatz, Don Salvatore serves authentic stone-oven Italian pizzas and fresh homemade pastas. It is famous for introducing Pinsa Romana to the region, combined with local Austrian cheese accents.",
    imageGrad: "linear-gradient(135deg, #a63a2b 0%, #d99f45 100%)",
    hours: {
      0: [{ open: "11:30", close: "22:30" }],
      1: [{ open: "17:00", close: "22:30" }],
      2: [{ open: "17:00", close: "22:30" }],
      3: [{ open: "17:00", close: "22:30" }],
      4: [{ open: "17:00", close: "22:30" }],
      5: [{ open: "11:30", close: "22:30" }],
      6: [{ open: "11:30", close: "22:30" }]
    },
    menu: [
      {
        title: "Stone-Oven Pizzas",
        items: [
          { id: "don-piz-1", name: "Pizza Prosciutto e Funghi", description: "Tomato base, fresh mozzarella, Italian cured ham, fresh mushrooms, basil.", price: 11.80, tags: [] },
          { id: "don-piz-2", name: "Pinsa Diavola", description: "Traditional oval-shaped pinsa sourdough with spicy salami, chili oil, mozzarella, and gorgonzola.", price: 13.40, tags: ["spicy"] },
          { id: "don-piz-3", name: "Pizza Ortolana", description: "Tomato base, vegan mozzarella, roasted eggplant, zucchini, bell peppers, fresh arugula.", price: 12.20, tags: ["vegan"] }
        ]
      },
      {
        title: "Pasta & Dolci",
        items: [
          { id: "don-pas-1", name: "Tagliatelle al Tartufo", description: "Fresh egg pasta cooked in a light cream sauce with shaved black truffle and Parmigiano-Reggiano.", price: 17.50, tags: ["vegetarian"] },
          { id: "don-des-1", name: "Don Salvatore's Tiramisu", description: "Homemade classic espresso ladyfingers with organic mascarpone and dark cocoa.", price: 6.50, tags: ["vegetarian"] }
        ]
      }
    ],
    reviews: [
      { author: "Giuseppe T.", rating: 5, date: "2026-05-11", comment: "Best pizza in the district. Authentic crust, high-quality Italian ingredients!" },
      { author: "Katrin S.", rating: 4, date: "2026-04-29", comment: "Lively Italian restaurant on the main square. Pinsa is outstanding!" }
    ]
  },
  {
    id: "buergerbergalm",
    name: "Bürgerbergalm",
    cuisine: "Alpine Hut",
    priceLevel: 1, // €
    rating: 4.8,
    address: "Bürgerberg 15, 5550 Radstadt",
    phone: "+43 664 123849",
    coordinates: [47.3910, 13.4750],
    features: ["vegetarian", "outdoorSeating", "panoramic"],
    vibes: ["Mountain Views", "Rustic Hut", "Hiking Stop", "Family Friendly"],
    description: "The Bürgerbergalm is located high above Radstadt on the slopes of the Bürgerberg mountain. Reachable by a gorgeous 1-hour hike or a scenic forest drive, this authentic alpine chalet serves giant cold cuts (Brettljause), fresh mountain milk cheeses, and homemade wood-oven pastries.",
    imageGrad: "linear-gradient(135deg, #195b4a 0%, #e8b15d 100%)",
    hours: {
      0: [{ open: "10:00", close: "18:00" }],
      1: [{ open: "10:00", close: "18:00" }],
      2: [{ open: "10:00", close: "18:00" }],
      3: [{ open: "10:00", close: "18:00" }],
      4: [{ open: "10:00", close: "18:00" }],
      5: [{ open: "10:00", close: "18:00" }],
      6: [{ open: "10:00", close: "18:00" }] // Always open during hiking season!
    },
    menu: [
      {
        title: "Alm Specialities",
        items: [
          { id: "alm-star-1", name: "Almer Brettljause", description: "Bacon, smoked sausage, mountain cheese, sour cream cheese, radish, farm bread.", price: 10.50, tags: [] },
          { id: "alm-star-2", name: "Kasnockensuppe im Häferl", description: "Salty local cheese dumplings served inside a rustic clay mug of boiling vegetable broth.", price: 5.20, tags: ["vegetarian"] },
          { id: "alm-des-1", name: "Riesen-Apfelstrudel", description: "Huge slice of warm homemade apple strudel made from our mountain recipe, served with vanilla custard.", price: 5.80, tags: ["vegetarian"] }
        ]
      }
    ],
    reviews: [
      { author: "Dieter W.", rating: 5, date: "2026-05-15", comment: "The views are absolutely breath-taking! Hike up here, order the Brettljause and enjoy a cold beer. Legendary!" }
    ]
  },
  {
    id: "kebapindisch",
    name: "Radstädter Kebap & Indisches Restaurant",
    cuisine: "Indian & Fast Food",
    priceLevel: 1, // €
    rating: 4.4,
    address: "Moosallee 1a, 5550 Radstadt",
    phone: "+43 6452 20110",
    coordinates: [47.3820, 13.4600],
    features: ["vegetarian", "vegan", "glutenFree", "delivery"],
    vibes: ["Casual", "Quick Service", "Spicy Cuisine"],
    description: "A popular food place in Radstadt combining delicious Middle Eastern kebabs and woodfired wraps with a rich menu of authentic Northern Indian curry dishes. Excellent prices, quick service, and friendly hosts.",
    imageGrad: "linear-gradient(135deg, #d99f45 0%, #a63a2b 100%)",
    hours: {
      0: [{ open: "11:00", close: "22:00" }],
      1: [{ open: "11:00", close: "22:00" }],
      2: [{ open: "11:00", close: "22:00" }],
      3: [{ open: "11:00", close: "22:00" }],
      4: [{ open: "11:00", close: "22:00" }],
      5: [{ open: "11:00", close: "22:00" }],
      6: [{ open: "11:00", close: "22:00" }]
    },
    menu: [
      {
        title: "Indian Curries",
        items: [
          { id: "ind-cur-1", name: "Chicken Tikka Masala", description: "Tender tandoori chicken cooked in a rich, spiced tomato creamy sauce, served with basmati rice.", price: 12.90, tags: ["glutenFree"] },
          { id: "ind-cur-2", name: "Chana Masala", description: "Spiced chickpeas slow-cooked with fresh ginger, onions, coriander, and garam masala.", price: 9.90, tags: ["vegan", "glutenFree"] },
          { id: "ind-cur-3", name: "Fresh Garlic Naan", description: "Traditional clay-oven flatbread baked with fresh garlic butter.", price: 3.50, tags: ["vegetarian"] }
        ]
      },
      {
        title: "Kebabs & Wraps",
        items: [
          { id: "keb-main-1", name: "Dürüm Kebap Spezial", description: "Handmade flatbread rolled with rotisserie veal, garlic yogurt sauce, crisp lettuce, tomatoes, and onions.", price: 6.80, tags: [] },
          { id: "keb-main-2", name: "Falafel Wrap", description: "Warm flatbread filled with fried chickpea falafels, sesame tahini dressing, and fresh herbs.", price: 6.20, tags: ["vegan"] }
        ]
      }
    ],
    reviews: [
      { author: "Sonia G.", rating: 4, date: "2026-05-12", comment: "The Chicken Tikka Masala is delicious and actually spicy! Best takeaway option." }
    ]
  },
  {
    id: "habersatter",
    name: "Cafe-Bäckerei Habersatter",
    cuisine: "Cafe & Bakery",
    priceLevel: 1, // €
    rating: 4.6,
    address: "Hauptplatz 14, 5550 Radstadt",
    phone: "+43 6452 7212",
    coordinates: [47.3799, 13.4652],
    features: ["vegetarian", "outdoorSeating"],
    vibes: ["Cozy Cafe", "Freshly Baked", "Breakfast Spot"],
    description: "Habersatter is the focal gathering point of the Hauptplatz. Serving freshly brewed Viennese coffee specialties, oven-warm croissants, authentic Austrian Topfenstrudel, and healthy organic breakfast plates since generations.",
    imageGrad: "linear-gradient(135deg, #e8b15d 0%, #1d4d3f 100%)",
    hours: {
      0: [{ open: "08:00", close: "12:00" }], // Sunday morning
      1: [{ open: "06:30", close: "18:00" }],
      2: [{ open: "06:30", close: "18:00" }],
      3: [{ open: "06:30", close: "18:00" }],
      4: [{ open: "06:30", close: "18:00" }],
      5: [{ open: "06:30", close: "18:00" }],
      6: [{ open: "07:00", close: "17:00" }]
    },
    menu: [
      {
        title: "Bakery & Coffee",
        items: [
          { id: "bak-item-1", name: "Pongauer Frühstück", description: "Fresh roll, butter, mountain honey, soft-boiled organic egg, sliced ham, coffee or tea.", price: 9.20, tags: [] },
          { id: "bak-item-2", name: "Apfelstrudel mit Schlag", description: "Authentic thin-layered apple strudel with raisins, served with fresh whipped cream.", price: 4.20, tags: ["vegetarian"] },
          { id: "bak-item-3", name: "Wiener Melange", description: "Double shot of espresso topped with steamed milk and creamy foam, served with a glass of alpine water.", price: 3.80, tags: ["vegetarian"] }
        ]
      }
    ],
    reviews: [
      { author: "Anna F.", rating: 5, date: "2026-05-13", comment: "Amazing pastries! The warm Melange coffee with the Topfenstrudel is heaven. Perfect breakfast." }
    ]
  },
  {
    id: "msshi",
    name: "Ms. Shi Asian Bistro",
    cuisine: "Asian",
    priceLevel: 1, // €
    rating: 4.3,
    address: "Hauptplatz 2, 5550 Radstadt",
    phone: "+43 6452 93120",
    coordinates: [47.3796, 13.4640],
    features: ["vegetarian", "vegan", "delivery"],
    vibes: ["Modern", "Quick Service", "Takeaway Friendly"],
    description: "A sleek modern Asian bistro in Radstadt's old town. Offering fresh sushi combinations, flavorful wok stir-fries, and classic Thai dishes. Highly popular for quick lunches and local delivery.",
    imageGrad: "linear-gradient(135deg, #152d26 0%, #a63a2b 100%)",
    hours: {
      0: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }],
      1: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }],
      2: [], // Tuesday Ruhetag
      3: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }],
      4: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }],
      5: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }],
      6: [{ open: "11:30", close: "14:30" }, { open: "17:00", close: "21:30" }]
    },
    menu: [
      {
        title: "Sushi & Woks",
        items: [
          { id: "shi-wok-1", name: "Phad Thai Tofu", description: "Stir-fried rice noodles with egg, organic tofu, bean sprouts, crushed peanuts, tamarind.", price: 11.20, tags: ["vegetarian"] },
          { id: "shi-wok-2", name: "Crispy Duck Wok", description: "Crispy fried duck breast on mixed seasonal wok vegetables in spicy garlic oyster sauce, served with jasmine rice.", price: 14.80, tags: ["spicy"] },
          { id: "shi-sus-1", name: "Maki Mix Box", description: "12 pieces of hand-rolled sushi maki (cucumber, avocado, salmon, tuna).", price: 9.80, tags: [] }
        ]
      }
    ],
    reviews: [
      { author: "Klaus H.", rating: 4, date: "2026-05-04", comment: "Solid Pad Thai and very fast delivery. Excellent sushi!" }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGER
// --------------------------------------------------------------------------
const APP_STATE = {
  activeCuisine: "All",
  searchTerm: "",
  filters: {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    outdoorSeating: false,
    historic: false,
    panoramic: false,
    openNow: false,
    delivery: false
  },
  sortBy: "rating",
  cart: [], // { item, quantity, restaurantId, restaurantName }
  selectedRestaurant: null,
  theme: "light",
  isMapExpanded: false,
  activeOrderTracker: null
};

// --------------------------------------------------------------------------
// 3. WEB AUDIO SYNTHESIZER (Sounds for custom UI elements)
// --------------------------------------------------------------------------
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playTickSound() {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, audioCtx.currentTime); // High-pitched tick
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime); // Very quiet
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch (e) {
    // Audio synthesis fails quietly if user hasn't interacted
  }
}

function playSuccessChime() {
  try {
    initAudio();
    const now = audioCtx.currentTime;

    // Play a lovely double arpeggio sound (alpine chime)
    const playNote = (freq, start, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };

    playNote(523.25, now, 0.4);      // C5
    playNote(659.25, now + 0.08, 0.4); // E5
    playNote(783.99, now + 0.16, 0.5); // G5
    playNote(1046.50, now + 0.24, 0.8); // C6
  } catch (e) { }
}

// --------------------------------------------------------------------------
// 4. MAP COORDINATOR (Leaflet Setup)
// --------------------------------------------------------------------------
let mapInstance = null;
let mapMarkers = [];

function initMap() {
  // Radstadt center coordinates
  const radstadtCoords = [47.3800, 13.4650];

  // Set up Map
  mapInstance = L.map('map', {
    center: radstadtCoords,
    zoom: 14.5,
    zoomControl: true,
    scrollWheelZoom: true
  });

  // Custom styled tile layer (CartoDB Positron - looks gorgeous and responds to dark filter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(mapInstance);

  renderMarkers();
}

function renderMarkers() {
  // Clear previous markers
  mapMarkers.forEach(marker => mapInstance.removeLayer(marker));
  mapMarkers = [];

  // Filter matching restaurants in the DB
  const currentFiltered = getFilteredRestaurants();

  currentFiltered.forEach(restaurant => {
    // Generate custom marker element using Leaflet DivIcon
    let iconHTML = `<div class="custom-map-marker" style="background-color: var(--color-primary); color: var(--color-accent); border: 2px solid var(--bg-secondary);">`;

    // Choose appropriate inner icon based on cuisine
    switch (restaurant.cuisine) {
      case "Italian":
        iconHTML += `<i data-lucide="pizza" style="width: 14px; height: 14px;"></i>`;
        break;
      case "Cafe & Bakery":
        iconHTML += `<i data-lucide="coffee" style="width: 14px; height: 14px;"></i>`;
        break;
      case "Asian":
        iconHTML += `<i data-lucide="fish" style="width: 14px; height: 14px;"></i>`;
        break;
      case "Indian & Fast Food":
        iconHTML += `<i data-lucide="flame" style="width: 14px; height: 14px;"></i>`;
        break;
      case "Alpine Hut":
        iconHTML += `<i data-lucide="mountain" style="width: 14px; height: 14px;"></i>`;
        break;
      default: // Austrian / Fine Dining
        iconHTML += `<i data-lucide="utensils" style="width: 14px; height: 14px;"></i>`;
    }
    iconHTML += `</div>`;

    const customIcon = L.divIcon({
      html: iconHTML,
      className: "custom-leaflet-icon",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Create Leaflet marker
    const marker = L.marker(restaurant.coordinates, { icon: customIcon }).addTo(mapInstance);

    // Custom popup styled layout
    const popupContent = `
      <div class="map-popup-card">
        <h4 style="font-family: var(--font-body); font-weight:700; font-size:14px; margin-bottom:2px; color: #0b1c18;">${restaurant.name}</h4>
        <span style="font-size:11px; text-transform:uppercase; color:var(--color-accent); font-weight:600;">${restaurant.cuisine}</span>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span style="font-weight:700; font-size:12px; color: #0f342a;">⭐ ${restaurant.rating}</span>
          <button onclick="window.openDetailModal('${restaurant.id}')" style="background-color:#0f342a; color:#d99f45; border-radius:4px; padding:4px 8px; font-size:10px; font-weight:600;">View Menu</button>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);
    mapMarkers.push(marker);
  });

  // Re-instantiate icons inside Leaflet divs
  setTimeout(() => lucide.createIcons(), 50);
}

// --------------------------------------------------------------------------
// 5. RESTAURANT HOURS CHECKER
// --------------------------------------------------------------------------
/**
 * Evaluates whether a restaurant is open at the CURRENT time in Austria (GMT+2 / GMT+1).
 * Returns an object: { isOpen: boolean, statusText: string }
 */
function getOpeningStatus(restaurant) {
  // Calculate local time in Salzburg, Austria (Central European Time)
  const now = new Date();

  // Formats date/time string targeting Austria's timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Vienna',
    hour12: false,
    weekday: 'numeric', // 0-6 (0=Sun, 1=Mon...)
    hour: 'numeric',
    minute: 'numeric'
  });

  const parts = formatter.formatToParts(now);
  const partsMap = {};
  parts.forEach(p => partsMap[p.type] = p.value);

  // Mapping standard numeric weekday outputs:
  // JS Day is 0=Sun, 1=Mon, ..., 6=Sat. 
  // Intl format outputs the weekday index in targeted locale.
  const currentWeekday = now.toLocaleDateString('en-US', { timeZone: 'Europe/Vienna', weekday: 'short' });
  const weekdayMapping = { "Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6 };
  const dayIndex = weekdayMapping[currentWeekday];

  const currentHour = parseInt(partsMap.hour, 10);
  const currentMin = parseInt(partsMap.minute, 10);
  const currentTimeVal = currentHour * 60 + currentMin; // Current time of day in minutes

  const daySchedule = restaurant.hours[dayIndex];

  if (!daySchedule || daySchedule.length === 0) {
    return { isOpen: false, statusText: "Closed Today (Ruhetag)" };
  }

  for (let i = 0; i < daySchedule.length; i++) {
    const range = daySchedule[i];
    const [openH, openM] = range.open.split(":").map(Number);
    const [closeH, closeM] = range.close.split(":").map(Number);

    const openTimeVal = openH * 60 + openM;
    const closeTimeVal = closeH * 60 + closeM;

    if (currentTimeVal >= openTimeVal && currentTimeVal <= closeTimeVal) {
      return { isOpen: true, statusText: `Open Now (Closes ${range.close})` };
    }
  }

  // Find next open time
  const firstSlot = daySchedule[0];
  const [oH, oM] = firstSlot.open.split(":").map(Number);
  const firstOpenVal = oH * 60 + oM;

  if (currentTimeVal < firstOpenVal) {
    return { isOpen: false, statusText: `Closed (Opens today ${firstSlot.open})` };
  } else {
    // Check if open tomorrow
    const nextDayIndex = (dayIndex + 1) % 7;
    const tomorrowSchedule = restaurant.hours[nextDayIndex];
    if (tomorrowSchedule && tomorrowSchedule.length > 0) {
      return { isOpen: false, statusText: `Closed (Opens tomorrow ${tomorrowSchedule[0].open})` };
    }
    return { isOpen: false, statusText: "Closed" };
  }
}

// --------------------------------------------------------------------------
// 6. DYNAMIC FILTERS & RENDERING ALGORITHMS
// --------------------------------------------------------------------------
function getFilteredRestaurants() {
  return RESTAURANT_DATA.filter(res => {
    // 1. Search Query
    if (APP_STATE.searchTerm) {
      const q = APP_STATE.searchTerm.toLowerCase();
      const matchName = res.name.toLowerCase().includes(q);
      const matchCuisine = res.cuisine.toLowerCase().includes(q);
      const matchVibes = res.vibes.some(v => v.toLowerCase().includes(q));

      // Match individual menu items
      const matchMenu = res.menu.some(sec =>
        sec.items.some(item =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        )
      );

      if (!matchName && !matchCuisine && !matchVibes && !matchMenu) return false;
    }

    // 2. Cuisine Chip
    if (APP_STATE.activeCuisine !== "All" && res.cuisine !== APP_STATE.activeCuisine) {
      return false;
    }

    // 3. Feature Checkboxes
    for (const [feature, enabled] of Object.entries(APP_STATE.filters)) {
      if (enabled) {
        if (feature === "openNow") {
          const status = getOpeningStatus(res);
          if (!status.isOpen) return false;
        } else {
          if (!res.features.includes(feature)) return false;
        }
      }
    }

    return true;
  }).sort((a, b) => {
    // 4. Sorting logic
    if (APP_STATE.sortBy === "rating") {
      return b.rating - a.rating;
    } else if (APP_STATE.sortBy === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (APP_STATE.sortBy === "price-asc") {
      return a.priceLevel - b.priceLevel;
    } else if (APP_STATE.sortBy === "price-desc") {
      return b.priceLevel - a.priceLevel;
    }
    return 0;
  });
}

function renderCuisineChips() {
  const container = document.getElementById("cuisine-chips-container");
  if (!container) return;

  // Extract all unique cuisines
  const cuisines = ["All", ...new Set(RESTAURANT_DATA.map(res => res.cuisine))];

  container.innerHTML = cuisines.map(c => `
    <button class="chip ${APP_STATE.activeCuisine === c ? 'active' : ''}" onclick="selectCuisine('${c}')">
      ${c}
    </button>
  `).join("");
}

function renderRestaurantGrid() {
  const grid = document.getElementById("restaurant-grid");
  const noResults = document.getElementById("no-results-view");
  const resultsCount = document.getElementById("results-count");
  if (!grid) return;

  const filtered = getFilteredRestaurants();
  resultsCount.textContent = `Showing ${filtered.length} location${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  grid.innerHTML = filtered.map(res => {
    const hoursStatus = getOpeningStatus(res);
    const priceString = "€".repeat(res.priceLevel);

    // Generate beautiful star string
    let starsHTML = "";
    const fullStars = Math.floor(res.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHTML += `<i data-lucide="star" style="fill:currentColor"></i>`;
      } else {
        starsHTML += `<i data-lucide="star"></i>`;
      }
    }

    return `
      <article class="restaurant-card" data-id="${res.id}">
        <div class="card-image-container" onclick="openDetailModal('${res.id}')">
          <div class="card-img-pattern" style="background: ${res.imageGrad}; opacity: 0.85;">
            <i data-lucide="utensils-crossed" style="width:48px; height:48px; color:rgba(255, 255, 255, 0.45)"></i>
          </div>
          <div class="card-img-overlay">
            <span class="cuisine-badge">${res.cuisine}</span>
          </div>
          <span class="status-badge ${hoursStatus.isOpen ? 'open' : 'closed'}">
            ${hoursStatus.isOpen ? 'Open Now' : 'Closed'}
          </span>
          <span class="price-indicator">${priceString}</span>
        </div>
        
        <div class="card-body">
          <h3 class="card-title" onclick="openDetailModal('${res.id}')">${res.name}</h3>
          
          <div class="rating-container">
            <div class="stars">${starsHTML}</div>
            <span class="rating-num">${res.rating.toFixed(1)}</span>
            <span class="reviews-num">(${res.reviews.length} reviews)</span>
          </div>
          
          <p style="font-size: 13px; color:var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
            ${res.description.substring(0, 80)}...
          </p>
          
          <div class="card-vibes">
            ${res.vibes.slice(0, 3).map(v => `<span class="vibe-tag">${v}</span>`).join("")}
          </div>
          
          <div class="card-footer">
            <div class="location-snippet">
              <i data-lucide="map-pin"></i>
              <span>${res.address.split(",")[0]}</span>
            </div>
            <button class="view-details-btn" onclick="openDetailModal('${res.id}')" title="Explore Details">
              <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Re-instantiate icons
  lucide.createIcons();
}

window.selectCuisine = function (cuisineName) {
  APP_STATE.activeCuisine = cuisineName;
  renderCuisineChips();
  renderRestaurantGrid();
  renderMarkers();
};

// --------------------------------------------------------------------------
// 7. RESTAURANT DETAIL MODAL ENGINE
// --------------------------------------------------------------------------
window.openDetailModal = function (id) {
  const restaurant = RESTAURANT_DATA.find(res => res.id === id);
  if (!restaurant) return;

  APP_STATE.selectedRestaurant = restaurant;

  // Setup modal attributes
  document.getElementById("modal-name").textContent = restaurant.name;
  document.getElementById("modal-cuisine").textContent = restaurant.cuisine;
  document.getElementById("modal-vibes-list").textContent = restaurant.vibes.join(" • ");
  document.getElementById("modal-hero-bg").style.background = restaurant.imageGrad;

  // 1. Populate Menu
  renderModalMenu(restaurant);

  // 2. Reset Booking Form
  document.getElementById("table-booking-form").style.display = "block";
  document.getElementById("booking-success-view").style.display = "none";
  document.getElementById("booking-name").value = "";
  document.getElementById("booking-notes").value = "";

  // Set current date as minimum for booking input
  const todayStr = new Date().toISOString().split("T")[0];
  document.getElementById("booking-date").setAttribute("min", todayStr);
  document.getElementById("booking-date").value = todayStr;
  document.getElementById("booking-time").value = "18:00";

  // 3. Render Reviews
  renderModalReviews(restaurant);

  // 4. About Info & Schedule
  document.getElementById("modal-desc").textContent = restaurant.description;
  document.getElementById("modal-address").textContent = restaurant.address;
  document.getElementById("modal-phone").textContent = restaurant.phone;

  const dietaryLabel = document.getElementById("modal-dietary");
  const diets = [];
  if (restaurant.features.includes("vegetarian")) diets.push("Vegetarian Options");
  if (restaurant.features.includes("vegan")) diets.push("Vegan Options");
  if (restaurant.features.includes("glutenFree")) diets.push("Gluten-Free Specialties");

  if (diets.length > 0) {
    document.getElementById("modal-dietary-container").style.display = "flex";
    dietaryLabel.textContent = diets.join(", ");
  } else {
    document.getElementById("modal-dietary-container").style.display = "none";
  }

  renderOpeningHoursSchedule(restaurant);

  // Render Tab view default
  switchModalTab("menu");

  // Display modal
  document.getElementById("restaurant-modal").style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable background scrolling

  // Fly Leaflet Map to selection location
  if (mapInstance) {
    mapInstance.setView(restaurant.coordinates, 16, { animate: true, duration: 1.2 });
  }
};

function switchModalTab(tabName) {
  // Highlight tab button
  document.querySelectorAll(".tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Toggle visibility of panels
  document.getElementById("tab-menu").style.display = tabName === "menu" ? "block" : "none";
  document.getElementById("tab-book").style.display = tabName === "book" ? "block" : "none";
  document.getElementById("tab-reviews").style.display = tabName === "reviews" ? "block" : "none";
  document.getElementById("tab-about").style.display = tabName === "about" ? "block" : "none";
}

function renderModalMenu(res) {
  const container = document.getElementById("modal-menu-list");
  if (!container) return;

  if (!res.menu || res.menu.length === 0) {
    container.innerHTML = `<p style="color:var(--text-secondary); text-align:center; padding:24px;">No digital menu is available for this restaurant currently.</p>`;
    return;
  }

  container.innerHTML = res.menu.map(section => `
    <div class="menu-section">
      <h3>${section.title}</h3>
      <div class="menu-items-grid">
        ${section.items.map(item => {
    let tagsHTML = item.tags.map(t => {
      const classVal = t.toLowerCase();
      let label = t;
      if (t === "glutenFree") label = "Gluten Free";
      return `<span class="menu-tag ${classVal}">${label}</span>`;
    }).join("");

    return `
            <div class="menu-item-card">
              <div class="menu-item-header">
                <span class="menu-item-name">${item.name}</span>
                <span class="menu-item-price">€${item.price.toFixed(2)}</span>
              </div>
              <p class="menu-item-desc">${item.description}</p>
              <div class="menu-item-footer">
                <div class="menu-item-tags">${tagsHTML}</div>
                <button class="add-to-cart-btn" onclick="addToOrder('${res.id}', '${res.name}', '${item.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                  <i data-lucide="plus-circle" style="width:14px; height:14px;"></i>
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function renderModalReviews(res) {
  document.getElementById("modal-reviews-avg").textContent = res.rating.toFixed(1);

  // Stars for aggregate score
  let starsHTML = "";
  const fullStars = Math.floor(res.rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHTML += `<i data-lucide="star" style="fill:currentColor"></i>`;
    } else {
      starsHTML += `<i data-lucide="star"></i>`;
    }
  }
  document.getElementById("modal-reviews-stars").innerHTML = starsHTML;
  document.getElementById("modal-reviews-count").textContent = `Based on ${res.reviews.length} reviews`;

  // Aggregate Rating Bars Calculations
  const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  res.reviews.forEach(r => {
    const starVal = Math.round(r.rating);
    if (ratingsCount[starVal] !== undefined) ratingsCount[starVal]++;
  });

  const barsContainer = document.getElementById("modal-reviews-bars");
  barsContainer.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    const count = ratingsCount[i];
    const percentage = res.reviews.length > 0 ? (count / res.reviews.length) * 100 : 0;
    barsContainer.innerHTML += `
      <div class="bar-row">
        <span class="bar-label">${i} Star</span>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${percentage}%"></div>
        </div>
        <span style="min-width:18px;">${count}</span>
      </div>
    `;
  }

  // Individual reviews
  const listContainer = document.getElementById("modal-reviews-list");
  if (res.reviews.length === 0) {
    listContainer.innerHTML = `<p style="color:var(--text-secondary); text-align:center; padding:16px;">Be the first to review this venue!</p>`;
    return;
  }

  listContainer.innerHTML = res.reviews.map(r => {
    let rStars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= r.rating) {
        rStars += `<i data-lucide="star" style="fill:currentColor; width:12px; height:12px;"></i>`;
      } else {
        rStars += `<i data-lucide="star" style="width:12px; height:12px;"></i>`;
      }
    }

    // Simple date display
    const dateFormatted = new Date(r.date).toLocaleDateString('de-AT', { year: 'numeric', month: 'long', day: 'numeric' });

    return `
      <div class="review-item">
        <div class="review-header">
          <div class="review-author-info">
            <span class="review-author">${r.author}</span>
            <span class="review-date">${dateFormatted}</span>
          </div>
          <div class="stars">${rStars}</div>
        </div>
        <p class="review-content">"${r.comment}"</p>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function renderOpeningHoursSchedule(res) {
  const container = document.getElementById("modal-hours-schedule");
  if (!container) return;

  const daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const austrianDayIndex = new Date().getDay();

  container.innerHTML = daysList.map((day, idx) => {
    const slots = res.hours[idx];
    let hoursStr = "Closed (Ruhetag)";
    if (slots && slots.length > 0) {
      hoursStr = slots.map(s => `${s.open} - ${s.close}`).join(" & ");
    }

    const isToday = idx === austrianDayIndex;

    return `
      <li class="${isToday ? 'today' : ''}">
        <span>${day} ${isToday ? '(Today)' : ''}</span>
        <span>${hoursStr}</span>
      </li>
    `;
  }).join("");
}

// --------------------------------------------------------------------------
// 8. DECIDE-O-MATIC (Spin the Wheel Mechanics)
// --------------------------------------------------------------------------
const wheelCanvas = document.getElementById("wheel-canvas");
const wheelCtx = wheelCanvas ? wheelCanvas.getContext("2d") : null;
let wheelAngle = 0;
let isSpinning = false;
let wheelSpeed = 0;
let friction = 0.985; // Slow down rate

// Colors matching the HSL palettes
const wheelColors = [
  "#0f342a", // Alpine Forest
  "#d99f45", // Amber
  "#1d4d3f", // Sage Dark
  "#e8b15d", // Light Gold
  "#a63a2b", // Crimson/Terracotta
  "#738581", // Sage Grey
  "#295e50", // Mid Green
  "#b5c4c1"  // Soft White
];

function drawWheel() {
  if (!wheelCtx) return;
  const numSegments = RESTAURANT_DATA.length;
  const sliceAngle = (2 * Math.PI) / numSegments;
  const radius = wheelCanvas.width / 2;
  const centerX = radius;
  const centerY = radius;

  wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

  // 1. Draw sections
  for (let i = 0; i < numSegments; i++) {
    const angle = wheelAngle + i * sliceAngle;
    wheelCtx.beginPath();
    wheelCtx.moveTo(centerX, centerY);
    wheelCtx.arc(centerX, centerY, radius - 8, angle, angle + sliceAngle);
    wheelCtx.lineTo(centerX, centerY);
    wheelCtx.fillStyle = wheelColors[i % wheelColors.length];
    wheelCtx.fill();

    // Draw section separation borders
    wheelCtx.lineWidth = 2;
    wheelCtx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    wheelCtx.stroke();

    // 2. Draw text label
    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.rotate(angle + sliceAngle / 2);
    wheelCtx.textAlign = "right";

    // Text style
    // Choose contrasting text color based on section fill color index
    const isDarkSection = [0, 2, 4, 6].includes(i % wheelColors.length);
    wheelCtx.fillStyle = isDarkSection ? "#fcfaf7" : "#0f342a";

    wheelCtx.font = "bold 11px Outfit, sans-serif";

    // Truncate restaurant name for canvas safety
    const name = RESTAURANT_DATA[i].name;
    const displayName = name.length > 18 ? name.substring(0, 16) + "..." : name;

    wheelCtx.fillText(displayName, radius - 30, 4);
    wheelCtx.restore();
  }

  // 3. Draw outer gold bezel
  wheelCtx.beginPath();
  wheelCtx.arc(centerX, centerY, radius - 4, 0, 2 * Math.PI);
  wheelCtx.lineWidth = 8;
  wheelCtx.strokeStyle = "#d99f45";
  wheelCtx.stroke();

  // 4. Draw inner dark hub
  wheelCtx.beginPath();
  wheelCtx.arc(centerX, centerY, 32, 0, 2 * Math.PI);
  wheelCtx.fillStyle = "#0f342a";
  wheelCtx.fill();
  wheelCtx.lineWidth = 3;
  wheelCtx.strokeStyle = "#d99f45";
  wheelCtx.stroke();
}

function startSpin() {
  if (isSpinning) return;
  initAudio();

  // Hide previous winner
  document.getElementById("wheel-winner-card").style.visibility = "hidden";

  // Set random speed (between 0.35 and 0.6 rads per frame)
  wheelSpeed = Math.random() * 0.25 + 0.35;
  isSpinning = true;

  // Clear any existing active ticker tracker sound states
  lastTickAngle = 0;

  animateSpin();
}

let lastTickAngle = 0;
function animateSpin() {
  if (wheelSpeed > 0.001) {
    wheelAngle += wheelSpeed;
    wheelSpeed *= friction; // Slow down

    // Physical "tick" audio when a section passes the pointer at the top
    const numSegments = RESTAURANT_DATA.length;
    const sliceAngle = (2 * Math.PI) / numSegments;

    // Calculate which segment is at the pointing position (pointing is at -Math.PI / 2)
    // Pointer is pointing at the top of the canvas
    const correctedAngle = (wheelAngle + Math.PI / 2) % (2 * Math.PI);
    const segmentIndex = Math.floor(correctedAngle / sliceAngle);

    const slicePassed = Math.floor(wheelAngle / sliceAngle);
    if (slicePassed !== lastTickAngle) {
      playTickSound();
      lastTickAngle = slicePassed;
    }

    drawWheel();
    requestAnimationFrame(animateSpin);
  } else {
    isSpinning = false;
    wheelSpeed = 0;

    // Calculate final winning segment
    const numSegments = RESTAURANT_DATA.length;
    const sliceAngle = (2 * Math.PI) / numSegments;

    // Leaflet pointer points at -90 degrees (-Math.PI/2) on the unit circle.
    // Normalized angle relative to pointer location:
    // Winner segment is calculated by finding the slice containing the top pointer.
    const normalizedAngle = (Math.PI * 1.5 - (wheelAngle % (2 * Math.PI))) % (2 * Math.PI);
    const winIndex = Math.floor(normalizedAngle / sliceAngle) % numSegments;
    const winner = RESTAURANT_DATA[winIndex >= 0 ? winIndex : winIndex + numSegments];

    // Trigger winner notification
    triggerWheelWinner(winner);
  }
}

function triggerWheelWinner(restaurant) {
  playSuccessChime();

  const winnerCard = document.getElementById("wheel-winner-card");
  document.getElementById("wheel-winner-name").textContent = restaurant.name;
  document.getElementById("wheel-winner-cuisine").textContent = `${restaurant.cuisine} • ${restaurant.address.split(",")[0]}`;

  winnerCard.style.visibility = "visible";

  // Set winner review shortcut actions
  document.getElementById("btn-winner-view").onclick = () => {
    document.getElementById("wheel-panel-overlay").style.display = "none";
    openDetailModal(restaurant.id);
  };

  // Fire CSS confetti particles
  spawnConfetti();
}

function spawnConfetti() {
  const container = document.getElementById("wheel-panel-overlay");
  if (!container) return;

  const colors = ["#d99f45", "#e8b15d", "#0f342a", "#a63a2b", "#4caf50", "#2196f3"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 80 + 10}%`; // Spawn towards center
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `scale(${Math.random() * 0.8 + 0.4})`;

    // Set custom animation parameters
    const duration = Math.random() * 2 + 1.5;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${Math.random() * 0.2}s`;

    container.appendChild(confetti);

    // Garbage collect particle after animation completes
    setTimeout(() => confetti.remove(), duration * 1000);
  }
}

// --------------------------------------------------------------------------
// 9. TAKEAWAY ORDER CARTDrawer & PROGRESS TRACKER
// --------------------------------------------------------------------------
window.addToOrder = function (resId, resName, itemId, itemName, price) {
  // 1. Alert if ordering from a different restaurant
  if (APP_STATE.cart.length > 0 && APP_STATE.cart[0].restaurantId !== resId) {
    const confirmClear = confirm(`Your cart contains dishes from ${APP_STATE.cart[0].restaurantName}. Would you like to clear those and order from ${resName} instead?`);
    if (confirmClear) {
      APP_STATE.cart = [];
    } else {
      return;
    }
  }

  // 2. Add or increment quantity
  const existingItem = APP_STATE.cart.find(c => c.itemId === itemId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    APP_STATE.cart.push({
      restaurantId: resId,
      restaurantName: resName,
      itemId: itemId,
      itemName: itemName,
      price: price,
      quantity: 1
    });
  }

  // 3. Play sound & update visual badge
  playTickSound();
  updateCartUI();

  // Dynamic toast style alert feedback
  showToastFeedback(`Added "${itemName}" to your cart!`);
};

function showToastFeedback(message) {
  const toast = document.createElement("div");
  toast.className = "toast-feedback";
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(40px);
    background-color: var(--color-primary);
    color: var(--color-accent);
    padding: 12px 24px;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
    font-size: 14px;
    font-weight: 600;
    z-index: 2000;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid var(--border-glass);
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger slide-up
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  }, 20);

  // Dismiss and clean
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

function updateCartUI() {
  const counter = document.getElementById("cart-counter");
  const cartEmptyView = document.getElementById("cart-empty-view");
  const cartContentView = document.getElementById("cart-content-view");
  const itemsContainer = document.getElementById("cart-items-container");

  const totalCount = APP_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  counter.textContent = totalCount;

  if (totalCount === 0) {
    cartEmptyView.style.display = "flex";
    cartContentView.style.display = "none";
    return;
  }

  cartEmptyView.style.display = "none";
  cartContentView.style.display = "block";

  // Populate Cart items list
  document.getElementById("cart-restaurant-name").textContent = APP_STATE.cart[0].restaurantName;

  itemsContainer.innerHTML = APP_STATE.cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-info">
        <span class="cart-item-name">${c.itemName}</span>
        <div class="cart-item-price">€${(c.price * c.quantity).toFixed(2)} <span style="font-size:11px; font-weight:normal; color:var(--text-muted);">(${c.quantity} × €${c.price.toFixed(2)})</span></div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="adjustCartQty('${c.itemId}', -1)">
          <i data-lucide="minus"></i>
        </button>
        <span class="cart-item-qty">${c.quantity}</span>
        <button class="qty-btn" onclick="adjustCartQty('${c.itemId}', 1)">
          <i data-lucide="plus"></i>
        </button>
      </div>
      <button class="cart-item-remove" onclick="adjustCartQty('${c.itemId}', -999)" title="Remove item">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
      </button>
    </div>
  `).join("");

  // Math totals
  const subtotal = APP_STATE.cart.reduce((sum, c) => sum + (c.price * c.quantity), 0);
  const vat = subtotal - (subtotal / 1.1); // Austrian food VAT included: 10% average
  const deliveryFee = 1.50; // Eco packaging
  const grandTotal = subtotal + deliveryFee;

  document.getElementById("cart-subtotal").textContent = `€${subtotal.toFixed(2)}`;
  document.getElementById("cart-vat").textContent = `€${vat.toFixed(2)}`;
  document.getElementById("cart-delivery").textContent = `€${deliveryFee.toFixed(2)}`;
  document.getElementById("cart-grandtotal").textContent = `€${grandTotal.toFixed(2)}`;

  lucide.createIcons();
}

window.adjustCartQty = function (itemId, amount) {
  const item = APP_STATE.cart.find(c => c.itemId === itemId);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    APP_STATE.cart = APP_STATE.cart.filter(c => c.itemId !== itemId);
  }

  playTickSound();
  updateCartUI();
};

function triggerTakeawayDelivery(orderName, resName) {
  const modal = document.getElementById("delivery-tracker-modal");
  const randOrderId = "ORD-" + Math.floor(Math.random() * 89999 + 10000) + "-AT";

  document.getElementById("tracker-order-id").textContent = randOrderId;
  document.getElementById("tracker-res-name").textContent = resName;
  modal.style.display = "flex";

  // Progress tracker timeline logic
  const steps = ["received", "preparing", "transit", "arrived"];
  let stepIndex = 0;

  // Reset steps classes
  steps.forEach(s => {
    const el = document.getElementById(`step-${s}`);
    el.classList.remove("active", "complete");
    document.getElementById(`time-${s}`).textContent = "Pending...";
  });

  // Initial state
  document.getElementById("step-received").classList.add("active");
  document.getElementById("time-received").textContent = new Date().toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' });
  document.getElementById("tracker-status-desc").textContent = `${resName} has printed your ticket. Validating food ingredients...`;
  document.getElementById("tracker-bar").style.width = "10%";

  // Cycle simulated progress steps
  clearInterval(APP_STATE.activeOrderTracker);
  APP_STATE.activeOrderTracker = setInterval(() => {
    stepIndex++;
    if (stepIndex === 1) {
      document.getElementById("step-received").classList.add("complete");
      document.getElementById("step-received").classList.remove("active");

      const elPrep = document.getElementById("step-preparing");
      elPrep.classList.add("active");
      document.getElementById("time-preparing").textContent = new Date().toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' });
      document.getElementById("tracker-status-desc").textContent = "Gourmet Austrian chefs are now preparing your order in the kitchen!";
      document.getElementById("tracker-bar").style.width = "40%";
      playTickSound();
    }
    else if (stepIndex === 2) {
      document.getElementById("step-preparing").classList.add("complete");
      document.getElementById("step-preparing").classList.remove("active");

      const elTransit = document.getElementById("step-transit");
      elTransit.classList.add("active");
      document.getElementById("time-transit").textContent = new Date().toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' });
      document.getElementById("tracker-status-desc").textContent = "Courier has collected food in insulated thermal packs. Navigating Radstadt roads...";
      document.getElementById("tracker-bar").style.width = "75%";
      playTickSound();
    }
    else if (stepIndex === 3) {
      document.getElementById("step-transit").classList.add("complete");
      document.getElementById("step-transit").classList.remove("active");

      const elArrived = document.getElementById("step-arrived");
      elArrived.classList.add("active");
      elArrived.classList.add("complete"); // Final
      document.getElementById("time-arrived").textContent = new Date().toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' });
      document.getElementById("tracker-status-desc").textContent = "Knock knock! Delivery courier has arrived at your address. Mahlzeit!";
      document.getElementById("tracker-bar").style.width = "100%";

      playSuccessChime();
      clearInterval(APP_STATE.activeOrderTracker);
    }
  }, 4000); // 4 seconds step interval
}

// --------------------------------------------------------------------------
// 10. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Draw lists & controls
  renderCuisineChips();
  renderRestaurantGrid();

  // 2. Draw Leaflet Map
  initMap();

  // 3. Draw initial canvas wheel
  drawWheel();

  // --- UI Interactivity Event Listeners ---

  // Theme Toggle Button
  const themeToggle = document.getElementById("btn-theme-toggle");
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const themeIcon = document.getElementById("theme-icon");

    if (APP_STATE.theme === "light") {
      APP_STATE.theme = "dark";
      root.setAttribute("data-theme", "dark");
      themeIcon.setAttribute("data-lucide", "sun");
    } else {
      APP_STATE.theme = "light";
      root.setAttribute("data-theme", "light");
      themeIcon.setAttribute("data-lucide", "moon");
    }

    playTickSound();
    lucide.createIcons();

    // Refresh map layout styles for Leaflet
    if (mapInstance) {
      mapInstance.invalidateSize();
    }
  });

  // Search Box Inputs
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("btn-clear-search");

  searchInput.addEventListener("input", (e) => {
    APP_STATE.searchTerm = e.target.value.trim();
    clearSearchBtn.style.display = APP_STATE.searchTerm ? "block" : "none";
    renderRestaurantGrid();
    renderMarkers();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    APP_STATE.searchTerm = "";
    clearSearchBtn.style.display = "none";
    renderRestaurantGrid();
    renderMarkers();
    playTickSound();
  });

  // Sort Selector
  document.getElementById("sort-select").addEventListener("change", (e) => {
    APP_STATE.sortBy = e.target.value;
    renderRestaurantGrid();
    playTickSound();
  });

  // Advanced Filter Panel slide
  const filterPanel = document.getElementById("advanced-filters-panel");
  document.getElementById("btn-toggle-advanced-filters").addEventListener("click", () => {
    const isHidden = filterPanel.style.display === "none";
    filterPanel.style.display = isHidden ? "block" : "none";
    playTickSound();
  });

  // Apply Filter check fields
  document.getElementById("btn-apply-filters").addEventListener("click", () => {
    // Collect feature states
    document.querySelectorAll(".feature-checkbox").forEach(box => {
      APP_STATE.filters[box.value] = box.checked;
    });
    APP_STATE.filters.openNow = document.getElementById("open-now-checkbox").checked;

    // Count active filters
    const activeCount = Object.values(APP_STATE.filters).filter(Boolean).length;
    const badge = document.getElementById("active-filters-count");
    if (activeCount > 0) {
      badge.style.display = "flex";
      badge.textContent = activeCount;
    } else {
      badge.style.display = "none";
    }

    filterPanel.style.display = "none";
    renderRestaurantGrid();
    renderMarkers();
    playTickSound();
  });

  // Reset all filters
  const resetFiltersAction = () => {
    document.querySelectorAll(".feature-checkbox").forEach(box => box.checked = false);
    document.getElementById("open-now-checkbox").checked = false;

    Object.keys(APP_STATE.filters).forEach(k => APP_STATE.filters[k] = false);

    document.getElementById("active-filters-count").style.display = "none";
    searchInput.value = "";
    APP_STATE.searchTerm = "";
    clearSearchBtn.style.display = "none";
    APP_STATE.activeCuisine = "All";

    filterPanel.style.display = "none";
    renderCuisineChips();
    renderRestaurantGrid();
    renderMarkers();
    playTickSound();
  };

  document.getElementById("btn-reset-filters").addEventListener("click", resetFiltersAction);
  document.getElementById("btn-reset-all-filters-fallback").addEventListener("click", resetFiltersAction);

  // Map panel toggle size button
  const mapPanel = document.getElementById("map-panel");
  const mapToggleBtn = document.getElementById("btn-toggle-map");
  const mapToggleIcon = document.getElementById("map-toggle-icon");

  mapToggleBtn.addEventListener("click", () => {
    const isExpanded = mapPanel.classList.toggle("expanded");
    APP_STATE.isMapExpanded = isExpanded;

    if (isExpanded) {
      mapToggleIcon.setAttribute("data-lucide", "minimize-2");
    } else {
      mapToggleIcon.setAttribute("data-lucide", "maximize-2");
    }

    playTickSound();
    lucide.createIcons();

    // Redraw map tiles safely
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize({ animate: true });
      }
    }, 300);
  });

  // Home logo reset view
  document.getElementById("btn-logo-home").addEventListener("click", () => {
    resetFiltersAction();
    if (mapInstance) {
      mapInstance.setView([47.3800, 13.4650], 14.5, { animate: true });
    }
  });

  // Modal close trigger
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    document.getElementById("restaurant-modal").style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable background scrolling
    playTickSound();
  });

  // Modal Tab switching triggers
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tabName = btn.getAttribute("data-tab");
      switchModalTab(tabName);
      playTickSound();
    });
  });

  // Add review form submission
  document.getElementById("add-review-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const res = APP_STATE.selectedRestaurant;
    if (!res) return;

    const authorName = document.getElementById("review-author").value.trim();
    const reviewContent = document.getElementById("review-comment").value.trim();
    const starRatingVal = parseInt(document.getElementById("review-rating-value").value, 10);

    // Add to mock db review array
    res.reviews.unshift({
      author: authorName,
      rating: starRatingVal,
      date: new Date().toISOString().split("T")[0],
      comment: reviewContent
    });

    // Recalculate dynamic average rating
    const totalScore = res.reviews.reduce((sum, r) => sum + r.rating, 0);
    res.rating = totalScore / res.reviews.length;

    // Play sound, refresh views
    playSuccessChime();
    renderModalReviews(res);
    renderRestaurantGrid();

    // Reset inputs
    document.getElementById("review-author").value = "";
    document.getElementById("review-comment").value = "";
    resetStarInputFeedback(5);

    showToastFeedback("Thank you! Your review was published.");
  });

  // Star rating entry feedback inside Modal review form
  const starInputs = document.querySelectorAll(".star-input");
  const hiddenRatingValInput = document.getElementById("review-rating-value");

  starInputs.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-rating"), 10);
      hiddenRatingValInput.value = rating;
      resetStarInputFeedback(rating);
      playTickSound();
    });
  });

  function resetStarInputFeedback(activeRating) {
    starInputs.forEach(s => {
      const sVal = parseInt(s.getAttribute("data-rating"), 10);
      if (sVal <= activeRating) {
        s.classList.add("active");
        s.style.fill = "currentColor";
      } else {
        s.classList.remove("active");
        s.style.fill = "none";
      }
    });
  }

  // Initialize star defaults
  resetStarInputFeedback(5);

  // Table Booking submission trigger
  document.getElementById("table-booking-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const res = APP_STATE.selectedRestaurant;
    if (!res) return;

    const dateInput = document.getElementById("booking-date").value;
    const timeInput = document.getElementById("booking-time").value;
    const guestsSelect = document.getElementById("booking-guests").options[document.getElementById("booking-guests").selectedIndex].text;
    const clientName = document.getElementById("booking-name").value.trim();

    // Play sound & transition to dynamic receipt page
    playSuccessChime();

    document.getElementById("success-restaurant-name").textContent = res.name;
    document.getElementById("success-booking-code").textContent = "RST-" + Math.floor(Math.random() * 89999 + 10000);
    document.getElementById("success-booking-guests").textContent = guestsSelect;

    // Nice formatted date representation
    const formattedDate = new Date(dateInput).toLocaleDateString('de-AT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("success-booking-datetime").textContent = `${formattedDate} at ${timeInput}`;

    document.getElementById("table-booking-form").style.display = "none";
    document.getElementById("booking-success-view").style.display = "block";
  });

  document.getElementById("btn-booking-dismiss").addEventListener("click", () => {
    document.getElementById("restaurant-modal").style.display = "none";
    document.body.style.overflow = "auto";
    playTickSound();
  });

  // CART DRAWERToggles
  const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");

  document.getElementById("btn-cart-toggle").addEventListener("click", () => {
    cartDrawerOverlay.style.display = "flex";
    updateCartUI();
    playTickSound();
  });

  document.getElementById("btn-close-cart").addEventListener("click", () => {
    cartDrawerOverlay.style.display = "none";
    playTickSound();
  });

  // Cart Order Submission Checkout
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const clientCheckoutName = document.getElementById("checkout-name").value.trim();
    const resName = APP_STATE.cart[0].restaurantName;

    // Play double chimes, close drawer, activate Tracker timeline!
    playSuccessChime();
    cartDrawerOverlay.style.display = "none";

    triggerTakeawayDelivery(clientCheckoutName, resName);

    // Reset order checkout structures
    APP_STATE.cart = [];
    updateCartUI();

    document.getElementById("checkout-name").value = "";
    document.getElementById("checkout-address").value = "";
    document.getElementById("checkout-phone").value = "";
  });

  // Close Tracker details modal
  document.getElementById("btn-close-tracker").addEventListener("click", () => {
    document.getElementById("delivery-tracker-modal").style.display = "none";
    playTickSound();
  });

  // SPIN WHEEL PANEL Drawer toggles
  const wheelOverlay = document.getElementById("wheel-panel-overlay");

  document.getElementById("btn-spin-wheel").addEventListener("click", () => {
    wheelOverlay.style.display = "flex";
    drawWheel();
    playTickSound();
  });

  document.getElementById("btn-close-wheel").addEventListener("click", () => {
    wheelOverlay.style.display = "none";
    playTickSound();
  });

  document.getElementById("btn-spin").addEventListener("click", startSpin);
  document.getElementById("btn-winner-spin-again").addEventListener("click", () => {
    document.getElementById("wheel-winner-card").style.visibility = "hidden";
    startSpin();
  });

  // Global click closures for overlay windows (improves premium visual UX)
  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("restaurant-modal")) {
      document.getElementById("restaurant-modal").style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (e.target === wheelOverlay && !isSpinning) {
      wheelOverlay.style.display = "none";
    }
    if (e.target === cartDrawerOverlay) {
      cartDrawerOverlay.style.display = "none";
    }
    if (e.target === document.getElementById("delivery-tracker-modal")) {
      document.getElementById("delivery-tracker-modal").style.display = "none";
    }
  });
});
