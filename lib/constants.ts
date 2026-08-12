import { Manda } from "@/types/index";

export const MANDAS_DATA: Manda[] = [
  {
    id: "M001",
    manda_number: "Manda 01",
    location: "Lucknow, Uttar Pradesh",
    crop: "Wheat",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description: "Organic wheat grown on your geo-mapped BharatBhumi Manda.",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    id: "M002",
    manda_number: "Manda 02",
    location: "Lucknow, Uttar Pradesh",
    crop: "Rice",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description: "Organic rice grown on your geo-mapped BharatBhumi Manda.",
    latitude: 26.8470,
    longitude: 80.9465,
  },
  {
    id: "M003",
    manda_number: "Manda 03",
    location: "Lucknow, Uttar Pradesh",
    crop: "Vegetables",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description: "Fresh seasonal vegetables cultivated for your subscription.",
    latitude: 26.8473,
    longitude: 80.9468,
  },
];

export const CROP_TYPES = [
  "Wheat",
  "Rice",
  "Vegetables",
];