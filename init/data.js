const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Quaint Countryside Cottage",
    description: "Experience the charm of the countryside in this quaint cottage. Perfect for a peaceful and relaxing escape.",
    image: {
      url: "https://media.istockphoto.com/id/186844467/photo/winter-wonderland-quaint-snowy-village-homes.webp?b=1&s=170667a&w=0&k=20&c=cL92yevS2AbQYxupFnNu0FLS04YkMI-FAHgFI8wcUsk=",
      filename: "listingImage"
    },
    price: 800,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Tranquil Lakeside Cabin",
    description: "Unplug and unwind in this serene lakeside cabin. Enjoy stunning lake views and the beauty of nature.",
    image: {
      url: "https://media.istockphoto.com/id/108355419/photo/lakeside-boathouse.webp?b=1&s=170667a&w=0&k=20&c=8GIH131fUgIl9g9WfTUpvBxWSLnA_OPmEHGRaV5KmCc=",
      filename: "listingImage"
    },
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Historic Downtown Apartment",
    description: "Experience the vibrancy of the historic downtown in this charming apartment. Conveniently located near shops and restaurants.",
    image: {
      url: "https://media.istockphoto.com/id/626723278/photo/building-in-downtown-toronto-ontario-canada.webp?b=1&s=170667a&w=0&k=20&c=EK2NWNUkOiMsX141UObYW7UBUh5mvKRohdzgp9RP1ks=",
      filename: "listingImage"
    },
    price: 1100,
    location: "Charleston",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Mountain Chalet Retreat",
    description: "Escape to this mountain chalet for a retreat in the midst of nature. Ideal for hikers and nature enthusiasts.",
    image: {
      url: "https://media.istockphoto.com/id/1327080125/photo/triangular-modern-lake-house-at-fall.webp?b=1&s=170667a&w=0&k=20&c=dB1pUIV5Oz9yWgwRUtJ3GP7C-rOYFdeFSwAPHXmg9MA=",
      filename: "listingImage"
    },
    price: 1000,
    location: "Swiss Alps",
    country: "Switzerland",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Seaside Villa with Pool",
    description: "Indulge in luxury at this seaside villa. Relax by the pool and enjoy breathtaking ocean views.",
    image: {
      url: "https://media.istockphoto.com/id/1453463109/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=undCwG6CObvD3DTd_Y02JmM2E_z_vUo4ZEeRIpB_bRo=",
      filename: "listingImage"
    },
    price: 2500,
    location: "Santorini",
    country: "Greece",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Rustic Forest Cabin",
    description: "Find solace in this rustic cabin nestled in the forest. A perfect getaway for those seeking tranquility.",
    image: {
      url: "https://media.istockphoto.com/id/155282261/photo/mountain-lodge-in-winter.webp?b=1&s=170667a&w=0&k=20&c=VNQKf9hXQMYu1MAeUYGFUGFEPf-8DZJw8e-8FgDPusA=",
      filename: "listingImage"
    },
    price: 700,
    location: "Black Forest",
    country: "Germany",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Desert Oasis Retreat",
    description: "Experience the magic of the desert in this oasis retreat. Relax under the stars and enjoy the serenity.",
    image: {
      url: "https://media.istockphoto.com/id/982105760/photo/ait-benhaddou-ancient-city-in-morocco-north-africa.webp?b=1&s=170667a&w=0&k=20&c=9dkIga18FfSIg_arv2XoUzifFJTSJ3cdyNtNLYZZR7Y=",
      filename: "listingImage"
    },
    price: 900,
    location: "Sahara Desert",
    country: "Morocco",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Historic Scottish Castle",
    description: "Live like royalty in this historic Scottish castle. Explore the rich history and breathtaking landscapes.",
    image: {
      url: "https://media.istockphoto.com/id/1439200585/photo/edinburgh-sunset-aerial-skyline-from-calton-hill-capital-city-of-scotland-uk.webp?b=1&s=170667a&w=0&k=20&c=K8k5qRZRm_vPfNhdbrtzlK0-HZCb0uN1f7z4WMVJWLI=",
      filename: "listingImage"
    },
    price: 3000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingImage"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Serenity by the Lake",
    description: "Experience tranquility in this lakeside cabin surrounded by pristine nature and abundant wildlife.",
    image: {
      url: "https://th.bing.com/th/id/OIP.uMKF0hXDmnIVRksnEFm7ngAAAA?pid=ImgDet&rs=1",
      filename: "listingImage"
    },
    price: 950,
    location: "Lake Placid",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Scenic Vineyard Retreat",
    description: "Stay at a picturesque vineyard estate and enjoy wine tastings amidst rolling vineyards and breathtaking sunsets.",
    image: {
      url: "https://th.bing.com/th/id/OIP.QK02QZW0UZvOg0xncjV_YQHaE8?pid=ImgDet&rs=1",
      filename: "listingImage"
    },
    price: 1750,
    location: "Napa Valley",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Luxury Villa in Santorini",
    description: "Escape to the stunning Greek island of Santorini and unwind in a luxurious cliffside villa with breathtaking views.",
    image: {
      url: "https://www.greekvillasboutique.com/wp-content/uploads/2019/03/greekvillasboutique_santorinivilla-26-1920x1080.jpg",
      filename: "listingImage"
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
    owner: "652d75bd30218ff8805ed7c0"
  },
  {
    title: "Mountain View Lodge in Colorado",
    description: "Enjoy breathtaking mountain views from this cozy lodge in the heart of the Colorado Rockies.",
    image: {
      url: "https://th.bing.com/th/id/OIP.yGlHUQTmxmch_CeHPxRr5QHaED?w=334&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "listingImage"
    },
    price: 1200,
    location: "Colorado",
    country: "United States",
    owner: "652d75bd30218ff8805ed7c0"
  },
    {
      "title": "Beachfront Paradise in the Bahamas",
      "description": "Escape to a tropical paradise in the Bahamas with pristine beaches and crystal-clear waters at your doorstep.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.HHHyNlQHBpJseleq0oWCcgHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "filename": "listingImage"
      },
      "price": 2200,
      "location": "Nassau",
      "country": "Bahamas",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Historic Manor in Provence",
      "description": "Step back in time and experience the charm of Provence in a beautifully preserved historic manor.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.zbS1WUVXU8HsBLL87-5FNwHaE8?w=289&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "filename": "listingImage"
      },
      "price": 1900,
      "location": "Provence",
      "country": "France",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Charming Cottage in the Swiss Alps",
      "description": "Experience the beauty of the Swiss Alps in this cozy and charming cottage nestled in the mountains.",
      "image": {
        "url": "https://w0.peakpx.com/wallpaper/139/46/HD-wallpaper-swiss-chalet-pretty-house-chalet-grass-cabin-switzerland-mountain-countryside-nice-swiss-village-peaks-path-flowers-harmony-rest-lovely-holiday-relax-alps-sky-slopes-cottage-travel.jpg",
        "filename": "listingImage"
      },
      "price": 1700,
      "location": "Zermatt",
      "country": "Switzerland",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Secluded Cabin in the Redwoods",
      "description": "Escape to the serene Redwood forest and stay in a secluded cabin surrounded by towering trees.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.XMDNl3frKjSV2qn9KKCwpAHaE8?pid=ImgDet&rs=1",
        "filename": "listingImage"
      },
      "price": 1100,
      "location": "Muir Woods",
      "country": "United States",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Luxury Penthouse in Paris",
      "description": "Indulge in the elegance of Paris in this luxurious penthouse apartment with stunning views of the Eiffel Tower.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.iaYWJTM22xGjG0ecJJihuAHaFA?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "filename": "listingImage"
      },
      "price": 2800,
      "location": "Paris",
      "country": "France",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Beachfront Villa in the Maldives",
      "description": "Escape to a luxurious beachfront villa in the Maldives and enjoy private access to white sandy beaches.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.xHTxueDnEqxq07kUzIRnyAHaFj?pid=ImgDet&rs=1",
        "filename": "listingImage"
      },
      "price": 3500,
      "location": "Maldives",
      "country": "Maldives",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Rustic Cabin in the Rocky Mountains",
      "description": "Unplug and unwind in this rustic cabin surrounded by the beauty of the Rocky Mountains.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.DT_UbQ1bn6y0sP7nmkCuIwHaEK?pid=ImgDet&rs=1",
        "filename": "listingImage"
      },
      "price": 1250,
      "location": "Breckenridge",
      "country": "United States",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Private Villa in Tuscany",
      "description": "Experience the charm of Tuscany in your own private villa with a vineyard and olive groves.",
      "image": {
        "url": "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/80/ba/c4.jpg",
        "filename": "listingImage"
      },
      "price": 2200,
      "location": "Siena",
      "country": "Italy",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Modern Apartment in Sydney",
      "description": "Explore the vibrant city of Sydney from this modern and centrally located apartment near the iconic Opera House.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.e3A_2t05BqM2YO4VVGyWlAHaFj?pid=ImgDet&rs=1",
        "filename": "listingImage"
      },
      "price": 1900,
      "location": "Sydney",
      "country": "Australia",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Desert Retreat in Arizona",
      "description": "Experience the tranquility of the Arizona desert in this stylish desert retreat with a private pool.",
      "image": {
        "url": "https://architector.com/wp-content/gallery/arizona-desert-mountain-retreat/desert-mountain-retreat14.jpg",
        "filename": "listingImage"
      },
      "price": 1350,
      "location": "Scottsdale",
      "country": "United States",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Ski Chalet in Whistler",
      "description": "Hit the slopes in Whistler with this cozy ski chalet, perfect for winter sports enthusiasts.",
      "image": {
        "url": "https://i.pinimg.com/736x/42/89/48/4289482989ae2bcc0c73ed2b3abeb5da--mountain-modern-mountain-homes.jpg",
        "filename": "listingImage"
      },
      "price": 1600,
      "location": "Whistler",
      "country": "Canada",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Historic Townhouse in Charleston",
      "description": "Experience the rich history of Charleston in this beautifully restored historic townhouse in the historic district.",
      "image": {
        "url": "https://th.bing.com/th/id/OIP.3AdMjKEBTgkyTbgNzKMlOwHaFj?pid=ImgDet&rs=1",
        "filename": "listingImage"
      },
      "price": 1800,
      "location": "Charleston",
      "country": "United States",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Peaceful Cottage in Shimla",
      "description": "Escape to this serene cottage nestled in the Himalayas. Enjoy panoramic mountain views and cool mountain air.",
      "image": {
        "url": "https://images.unsplash.com/photo-1695581263294-5fc40303e955?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhY2VmdWwlMjBDb3R0YWdlJTIwaW4lMjBTaGltbGF8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1500,
      "location": "Shimla",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Luxury Houseboat in Kerala Backwaters",
      "description": "Experience the backwaters of Kerala in style with a stay on a luxurious houseboat. Witness stunning sunsets on the water.",
      "image": {
        "url": "https://media.istockphoto.com/id/473039634/photo/houseboat-southern-india.webp?b=1&s=170667a&w=0&k=20&c=4n9sb2z1UMpcdO-R0qO_DhHqe4QAkKNyoxBwnCqct3E=",
        "filename": "listingImage"
      },
      "price": 2200,
      "location": "Alappuzha",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Heritage Haveli in Jaipur",
      "description": "Step back in time and experience the grandeur of Rajasthan in a beautifully preserved heritage haveli.",
      "image": {
        "url": "https://media.istockphoto.com/id/853514434/photo/towers-on-entrance-of-gaitore-cenotaphs-royal-cremation-monuments-of-the-kachhwaha-rajputs.webp?b=1&s=170667a&w=0&k=20&c=T4gfgkJ8xBKguIEy4qaUsf-jw-NfFVazf1vbVYjp6IQ=",
        "filename": "listingImage"
      },
      "price": 1800,
      "location": "Jaipur",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Riverside Bungalow in Goa",
      "description": "Relax by the riverside in this charming Goan bungalow. Enjoy the lush greenery and serene river views.",
      "image": {
        "url": "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Uml2ZXJzaWRlJTIwQnVuZ2Fsb3clMjBpbiUyMEdvYXxlbnwwfHwwfHx8MA%3D%3D",
        "filename": "listingImage"
      },
      "price": 1350,
      "location": "Goa",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Historic Fort Stay in Jaisalmer",
      "description": "Live like royalty in a historic fort in Jaisalmer. Enjoy breathtaking views of the desert and a taste of history.",
      "image": {
        "url": "https://media.istockphoto.com/id/491656610/photo/illuminated-building-at-gadsisar-lake-jaisalmer-rajastan-india.webp?b=1&s=170667a&w=0&k=20&c=gjgBqhpKKoddxAVAe5qxo0w_WmMOvJ6Odbh20nkc154=",
        "filename": "listingImage"
      },
      "price": 2500,
      "location": "Jaisalmer",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Beachfront Villa in Goa",
      "description": "Escape to a luxurious beachfront villa in Goa and enjoy private access to pristine sandy beaches.",
      "image": {
        "url": "https://images.unsplash.com/photo-1677747354829-a5d89cd8048c?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2hmcm9udCUyMFZpbGxhJTIwaW4lMjBHb2F8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 2000,
      "location": "Goa",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Mountain Retreat in Manali",
      "description": "Unplug and unwind in this rustic mountain retreat in the Himalayas. Perfect for nature lovers and adventure seekers.",
      "image": {
        "url": "https://th.bing.com/th?id=OADHT.1487C4CC7EDFB099D5503E4B99E449C8_2CC7711EC73E0924&w=202&h=106&c=4&o=6&dpr=1.3&pid=HotelAc",
        "filename": "listingImage"
      },
      "price": 1700,
      "location": "Manali",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Backwater House in Kerala",
      "description": "Experience the tranquil backwaters of Kerala in a charming house with waterside views and traditional cuisine.",
      "image": {
        "url": "https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.webp?b=1&s=170667a&w=0&k=20&c=fGYYqBIG3FjXi37kuZYOJ1w88VTrt_Pt_aHh6W17XM8=",
        "filename": "listingImage"
      },
      "price": 1900,
      "location": "Kumarakom",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Tropical Paradise in Andaman Islands",
      "description": "Escape to a tropical paradise in the Andaman Islands with pristine beaches and crystal-clear waters at your doorstep.",
      "image": {
        "url": "https://media.istockphoto.com/id/1302072956/photo/the-view-of-the-beach-in-havelock-island-andaman-and-nicobar-islands.webp?b=1&s=170667a&w=0&k=20&c=7COeuVlvEfgqRFbY5iL1IWgqnk4QXLKyBkMcLFXeX88=",
        "filename": "listingImage"
      },
      "price": 2200,
      "location": "Havelock Island",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Luxury Villa in Udaipur",
      "description": "Indulge in luxury in this exquisite villa overlooking Lake Pichola in Udaipur, the City of Lakes.",
      "image": {
        "url": "https://media.istockphoto.com/id/1485423243/photo/amazing-lake-side-view-of-lake-pichola-hotel.webp?b=1&s=170667a&w=0&k=20&c=hiDWhLvcph0twb49hw53fUf9Rdn8KTDSnlRne8O_Dto=",
        "filename": "listingImage"
      },
      "price": 2800,
      "location": "Udaipur",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Jungle Retreat in Bandipur",
      "description": "Experience the beauty of the jungle in this rustic retreat near Bandipur National Park. Get up close with wildlife.",
      "image": {
        "url": "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SnVuZ2xlJTIwUmV0cmVhdCUyMGluJTIwQmFuZGlwdXJ8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1400,
      "location": "Bandipur",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Himalayan View Retreat in Dharamshala",
      "description": "Enjoy breathtaking views of the Himalayas from this serene retreat in Dharamshala. Ideal for yoga and meditation.",
      "image": {
        "url": "https://images.unsplash.com/photo-1452626212852-811d58933cae?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhcm1pbmclMjBIb3VzZSUyMGluJTIwUG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1600,
      "location": "Dharamshala",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Charming House in Pondicherry",
      "description": "Experience the French influence in Pondicherry with a stay in this charming house in the White Town area.",
      "image": {
        "url": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhcm1pbmclMjBIb3VzZSUyMGluJTIwUG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1200,
      "location": "Pondicherry",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Tea Estate Bungalow in Munnar",
      "description": "Stay in a cozy bungalow surrounded by lush tea gardens in the scenic hill station of Munnar.",
      "image": {
        "url": "https://media.istockphoto.com/id/488761857/photo/tea-road.webp?b=1&s=170667a&w=0&k=20&c=qIIFcAhxB0O2yBVzvk6P3uUzbyqqL-FYawlDgIkJTnI=",
        "filename": "listingImage"
      },
      "price": 1600,
      "location": "Munnar",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Seaside Cottage in Varkala",
      "description": "Relax in a cozy seaside cottage in Varkala and soak in the sea breeze and stunning views of the Arabian Sea.",
      "image": {
        "url": "https://images.unsplash.com/photo-1586003825170-9ccfdf755059?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Vhc2lkZSUyMENvdHRhZ2UlMjBpbiUyMFZhcmthbGF8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1400,
      "location": "Varkala",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Spacious Villa in Goa",
      "description": "Gather with friends and family in this spacious villa in Goa with a private pool and garden for outdoor fun.",
      "image": {
        "url": "https://media.istockphoto.com/id/1044560218/photo/luxury-holiday-villa-with-infinity-pool-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=19fKXKMNf9oKLjuujeFJJd90wGrgaKeTVLoUd4mvYUw=",
        "filename": "listingImage"
      },
      "price": 2000,
      "location": "Goa",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Eco-Friendly Retreat in Coorg",
      "description": "Embrace eco-friendly living in a cozy retreat amidst the coffee plantations of Coorg. Enjoy nature walks and bird watching.",
      "image": {
        "url": "https://media.istockphoto.com/id/1049454026/photo/unexplored-path-at-nagarhole-national-park-karnataka-india.webp?b=1&s=170667a&w=0&k=20&c=MpYfyQ8Jh1SXnnZ5mcVM4mVI72m1FX84q3RmcjzZY_s=",
        "filename": "listingImage"
      },
      "price": 1800,
      "location": "Coorg",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Rajasthani Desert Camp in Jodhpur",
      "description": "Experience the magic of the Thar Desert with a stay in a traditional Rajasthani desert camp near Jodhpur.",
      "image": {
        "url": "https://media.istockphoto.com/id/1418102505/photo/desert-road-parking-area-in-rajasthan-india-from-jodhpur-fort.webp?b=1&s=170667a&w=0&k=20&c=PtVsi0E2tsSRoxTGcYCus1FSOFI1z-5SCZRfpNL_gCE=",
        "filename": "listingImage"
      },
      "price": 1600,
      "location": "Jodhpur",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Artistic Studio in Auroville",
      "description": "Find inspiration in this artistic studio in Auroville. Perfect for creatives and those seeking a unique experience.",
      "image": {
        "url": "https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=MUrToO2laN6g8bk5pCohoqBan7YVoh0kqBL5j92SS9s=",
        "filename": "listingImage"
      },
      "price": 1000,
      "location": "Auroville",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Coastal Cottage in Kerala",
      "description": "Stay in a cozy coastal cottage in Kerala, just steps away from the beach. Enjoy the sounds of the waves and stunning sunsets.",
      "image": {
        "url": "https://media.istockphoto.com/id/516627008/photo/beautiful-cottages-at-goa-beach.webp?b=1&s=170667a&w=0&k=20&c=mNqGPn9eU7kaAwwRhU6zO3Oah6qjLV6uZqgcAt83EMc=",
        "filename": "listingImage"
      },
      "price": 1400,
      "location": "Kovalam",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Seaside Villa in Diu",
      "description": "Escape to a luxurious seaside villa in Diu and enjoy the serene beaches and ocean views.",
      "image": {
        "url": "https://images.unsplash.com/photo-1559489031-fbaf8fe8e947?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Vhc2lkZSUyMFZpbGxhJTIwaW4lMjBEaXV8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 2500,
      "location": "Diu",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Heritage Haveli in Ahmedabad",
      "description": "Experience the rich heritage of Gujarat with a stay in a beautifully restored haveli in Ahmedabad.",
      "image": {
        "url": "https://images.unsplash.com/photo-1600867161225-c0f75afff41d?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGF2ZWxpJTIwaW4lMjBBaG1lZGFiYWR8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1800,
      "location": "Ahmedabad",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Riverside Bungalow in Bharuch",
      "description": "Relax by the river in a charming bungalow in Bharuch and enjoy peaceful nature walks and fishing.",
      "image": {
        "url": "https://images.unsplash.com/photo-1550559478-3ed8813472e1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Uml2ZXJzaWRlJTIwQnVuZ2Fsb3clMjBpbiUyMEJoYXJ1Y2h8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1600,
      "location": "Bharuch",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Beachfront Resort in Dwarka",
      "description": "Indulge in a luxurious beachfront resort in Dwarka with spa services and breathtaking sunset views.",
      "image": {
        "url": "https://images.unsplash.com/photo-1673183191406-5987fda2fa24?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2hmcm9udCUyMFJlc29ydCUyMGluJTIwRHdhcmthfGVufDB8fDB8fHww",
        "filename": "listingImage"
      },
      "price": 2800,
      "location": "Dwarka",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Luxury Farmhouse in Vadodara",
      "description": "Escape to a luxurious farmhouse in Vadodara surrounded by lush gardens and a private pool for relaxation.",
      "image": {
        "url": "https://media.istockphoto.com/id/1225846823/photo/country-house-with-pool.webp?b=1&s=170667a&w=0&k=20&c=I4TNm20lCruLRO1TbgecLxeAj3cpkBEbGvGo4hnySmk=",
        "filename": "listingImage"
      },
      "price": 2000,
      "location": "Vadodara",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Jungle Retreat in Gir",
      "description": "Stay in a jungle retreat in Gir and experience wildlife safaris in the famous Gir National Park.",
      "image": {
        "url": "https://media.istockphoto.com/id/1481942212/photo/family-of-spotted-deer-or-chital-eating-grass-amongst-dry-leaves.webp?b=1&s=170667a&w=0&k=20&c=BAfrdZwyoRRvGGQg9vPQWOo9IOUT7or2nxzMTE3WVRs=",
        "filename": "listingImage"
      },
      "price": 2200,
      "location": "Gir",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Cozy Cottage in Surat",
      "description": "Enjoy a cozy stay in a cottage in Surat, perfect for a peaceful getaway in the heart of the city.",
      "image": {
        "url": "https://images.unsplash.com/photo-1662944726441-a4ca20f6f3fe?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q296eSUyMENvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
        "filename": "listingImage"
      },
      "price": 1200,
      "location": "Surat",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Mountain View Cabin in Saputara",
      "description": "Enjoy breathtaking mountain views from a cozy cabin in Saputara, a hill station in Gujarat.",
      "image": {
        "url": "https://media.istockphoto.com/id/172908536/photo/himalayas-india.webp?b=1&s=170667a&w=0&k=20&c=0vy7xzKP_qdIuuIB73EKubJ_LdUAiyQG_Mf8M-rAxNs=",
        "filename": "listingImage"
      },
      "price": 1700,
      "location": "Saputara",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Riverside Cottage in Narmada",
      "description": "Relax in a charming riverside cottage in Narmada, perfect for nature lovers and birdwatching enthusiasts.",
      "image": {
        "url": "https://media.istockphoto.com/id/1158360506/photo/north-india-dharamsala.webp?b=1&s=170667a&w=0&k=20&c=JY3NxZRhfCE_TxkM4X9s2RdGS1YMZfZKKa4OXxY7a6Q=",
        "filename": "listingImage"
      },
      "price": 1400,
      "location": "Narmada",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    },
    {
      "title": "Hillside Retreat in Mount Abu",
      "description": "Experience a hillside retreat in Mount Abu and enjoy the cool climate and beautiful sunset views.",
      "image": {
        "url": "https://media.istockphoto.com/id/1322194547/photo/om-shanti-bhawan-brahma-kumaris-mount-abu.webp?b=1&s=170667a&w=0&k=20&c=8XP8qK6dI1VpeII-v5QRMMuG4RnCqxNQmtnKtFC8v2M=",
        "filename": "listingImage"
      },
      "price": 1900,
      "location": "Mount Abu",
      "country": "India",
      "owner": "652d75bd30218ff8805ed7c0"
    }
  ];
  
  module.exports = { data: sampleListings };