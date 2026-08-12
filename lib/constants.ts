export const LOCATION = {
  village: "Rasra",
  district: "Ballia",
  state: "Uttar Pradesh",
  country: "India",
};

export const CROP_TYPES = [
  "Wheat",
  "Rice",
  "Chana",
  "Arhar",
  "Masoor",
  "Moong",
  "Urad",
  "Matar",
];

export const PROCESSING_OPTIONS = {
  Wheat: [
    {
      id: "wheat-grain",
      name: "Wheat Grain",
      icon: "🌾",
      description: "Cleaned wheat grain",
    },
    {
      id: "wheat-atta",
      name: "Wheat Flour / Atta",
      icon: "🥣",
      description: "Freshly milled wheat flour",
    },
  ],

  Rice: [
    {
      id: "rice",
      name: "Rice",
      icon: "🍚",
      description: "Processed rice",
    },
    {
      id: "rice-paddy",
      name: "Paddy",
      icon: "🌾",
      description: "Raw harvested paddy",
    },
  ],

  Chana: [
    {
      id: "chana",
      name: "Chana",
      icon: "🫘",
      description: "Whole chickpeas",
    },
    {
      id: "chana-dal",
      name: "Chana Dal",
      icon: "🥣",
      description: "Processed split chickpea dal",
    },
  ],

  Arhar: [
    {
      id: "arhar",
      name: "Arhar",
      icon: "🫘",
      description: "Whole pigeon pea",
    },
    {
      id: "toor-dal",
      name: "Toor Dal",
      icon: "🥣",
      description: "Processed pigeon pea dal",
    },
  ],

  Masoor: [
    {
      id: "masoor",
      name: "Masoor",
      icon: "🫘",
      description: "Whole lentils",
    },
    {
      id: "masoor-dal",
      name: "Masoor Dal",
      icon: "🥣",
      description: "Processed lentil dal",
    },
  ],

  Moong: [
    {
      id: "moong",
      name: "Moong",
      icon: "🫘",
      description: "Whole green gram",
    },
    {
      id: "moong-dal",
      name: "Moong Dal",
      icon: "🥣",
      description: "Processed moong dal",
    },
  ],

  Urad: [
    {
      id: "urad",
      name: "Urad",
      icon: "🫘",
      description: "Whole black gram",
    },
    {
      id: "urad-dal",
      name: "Urad Dal",
      icon: "🥣",
      description: "Processed urad dal",
    },
  ],

  Matar: [
    {
      id: "matar",
      name: "Matar",
      icon: "🫘",
      description: "Whole dried peas",
    },
    {
      id: "matar-dal",
      name: "Matar Dal",
      icon: "🥣",
      description: "Processed dried pea dal",
    },
  ],
};

export const MANDAS_DATA = [
  {
    id: "RB-001",
    manda_number: "Manda RB-001",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Wheat",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.8575,
    longitude: 83.8547,
    description:
      "A geo-mapped 1 Manda micro-plot managed by local farmers using responsible cultivation practices.",
  },

  {
    id: "RB-002",
    manda_number: "Manda RB-002",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Rice",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.858,
    longitude: 83.855,
    description:
      "A geo-mapped rice cultivation Manda managed by local farmers.",
  },

  {
    id: "RB-003",
    manda_number: "Manda RB-003",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Chana",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.8585,
    longitude: 83.8555,
    description:
      "A pulse-crop Manda suitable for chickpea cultivation and optional dal processing.",
  },

  {
    id: "RB-004",
    manda_number: "Manda RB-004",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Arhar",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.859,
    longitude: 83.856,
    description:
      "A pulse-crop Manda for pigeon pea cultivation with optional Toor Dal processing.",
  },

  {
    id: "RB-005",
    manda_number: "Manda RB-005",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Masoor",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.8595,
    longitude: 83.8565,
    description:
      "A Manda dedicated to lentil cultivation with optional Masoor Dal processing.",
  },

  {
    id: "RB-006",
    manda_number: "Manda RB-006",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Moong",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.86,
    longitude: 83.857,
    description:
      "A pulse-crop Manda for green gram cultivation.",
  },

  {
    id: "RB-007",
    manda_number: "Manda RB-007",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Urad",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.8605,
    longitude: 83.8575,
    description:
      "A pulse-crop Manda for black gram cultivation with optional processing.",
  },

  {
    id: "RB-008",
    manda_number: "Manda RB-008",
    location: "Rasra, Ballia, Uttar Pradesh",
    area_sqm: 250,
    crop: "Matar",
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    latitude: 25.861,
    longitude: 83.858,
    description:
      "A Manda for dried pea cultivation with optional processing.",
  },
];