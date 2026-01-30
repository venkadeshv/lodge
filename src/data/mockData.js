export const rooms = [
  {
    id: 1,
    name: "Luxury Mountain View Suite",
    description: "Experience breathtaking mountain views from this spacious luxury suite. Perfect for couples seeking a romantic getaway with modern amenities and premium comfort.",
    price: 20000,
    rating: 4.9,
    reviews: 127,
    location: "Aspen, Colorado",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Mountain View", "Kitchen", "Fireplace", "Hot Tub", "Parking"],
    type: "Suite",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    featured: true
  },
  {
    id: 2,
    name: "Cozy Lakeside Cabin",
    description: "Charming cabin nestled by a pristine lake. Enjoy fishing, kayaking, and peaceful evenings by the water. Fully equipped kitchen and rustic charm throughout.",
    price: 14400,
    rating: 4.8,
    reviews: 94,
    location: "Lake Tahoe, California",
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Lake View", "Kitchen", "Deck", "Kayaks", "Parking"],
    type: "Cabin",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    featured: true
  },
  {
    id: 3,
    name: "Modern Downtown Loft",
    description: "Stylish urban loft in the heart of downtown. Walking distance to restaurants, shops, and entertainment. Perfect for city explorers and business travelers.",
    price: 16000,
    rating: 4.7,
    reviews: 156,
    location: "Seattle, Washington",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6a7e5c0e9fc9?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "City View", "Kitchen", "Gym", "Concierge", "Parking"],
    type: "Loft",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    featured: true
  },
  {
    id: 4,
    name: "Beachfront Paradise Villa",
    description: "Stunning beachfront villa with direct access to white sandy beaches. Spacious living areas, private pool, and panoramic ocean views. Ultimate luxury experience.",
    price: 36000,
    rating: 5.0,
    reviews: 203,
    location: "Malibu, California",
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Ocean View", "Kitchen", "Pool", "Beach Access", "Parking"],
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    featured: true
  },
  {
    id: 5,
    name: "Rustic Forest Retreat",
    description: "Secluded forest cabin surrounded by towering pines. Perfect for nature lovers seeking peace and tranquility. Hiking trails right from your doorstep.",
    price: 12000,
    rating: 4.6,
    reviews: 78,
    location: "Portland, Oregon",
    images: [
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Forest View", "Kitchen", "Fireplace", "Hiking", "Parking"],
    type: "Cabin",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    featured: false
  },
  {
    id: 6,
    name: "Historic Victorian Home",
    description: "Beautifully restored Victorian home with original architecture and modern comforts. Antique furnishings, elegant décor, and a charming garden.",
    price: 17600,
    rating: 4.8,
    reviews: 112,
    location: "San Francisco, California",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Garden", "Kitchen", "Historic", "Library", "Parking"],
    type: "House",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    featured: false
  },
  {
    id: 7,
    name: "Desert Oasis Retreat",
    description: "Modern desert home with stunning architecture and infinity pool. Breathtaking sunset views and stargazing opportunities. A unique escape into the desert.",
    price: 22400,
    rating: 4.9,
    reviews: 89,
    location: "Scottsdale, Arizona",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Desert View", "Kitchen", "Pool", "Hot Tub", "Parking"],
    type: "House",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    featured: false
  },
  {
    id: 8,
    name: "Ski-In Ski-Out Chalet",
    description: "Prime ski chalet with direct access to slopes. Cozy fireplace, sauna, and hot tub. Perfect for winter sports enthusiasts and après-ski relaxation.",
    price: 28000,
    rating: 4.9,
    reviews: 145,
    location: "Vail, Colorado",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Mountain View", "Kitchen", "Sauna", "Hot Tub", "Ski Access"],
    type: "Chalet",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    featured: true
  },
  {
    id: 9,
    name: "Countryside Farmhouse",
    description: "Charming farmhouse on rolling hills with farm animals and organic garden. Experience authentic country living with modern amenities and home-cooked meals.",
    price: 13600,
    rating: 4.7,
    reviews: 91,
    location: "Napa Valley, California",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Garden View", "Kitchen", "Farm", "Organic Garden", "Parking"],
    type: "Farmhouse",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    featured: false
  },
  {
    id: 10,
    name: "Tropical Island Bungalow",
    description: "Private bungalow on a tropical island paradise. Crystal clear waters, palm trees, and stunning sunsets. Your own slice of heaven with modern comforts.",
    price: 25600,
    rating: 5.0,
    reviews: 167,
    location: "Maui, Hawaii",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589993564969-c3cd9d67fddc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    ],
    amenities: ["WiFi", "Ocean View", "Kitchen", "Beach Access", "Snorkeling", "Parking"],
    type: "Bungalow",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    featured: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely stunning property! The views were breathtaking and the amenities exceeded our expectations. Will definitely book again!",
    date: "2026-01-15",
    room: "Luxury Mountain View Suite"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Perfect location and beautiful space. The host was very responsive and helpful. Highly recommend!",
    date: "2026-01-10",
    room: "Modern Downtown Loft"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    comment: "Lovely cabin with great amenities. The lake view was spectacular. Only minor issue was WiFi speed.",
    date: "2026-01-05",
    room: "Cozy Lakeside Cabin"
  }
];
