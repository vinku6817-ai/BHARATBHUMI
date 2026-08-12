"use client";

import { useState } from "react";
import Link from "next/link";

type Manda = {
  id: number;
  manda_number: string;
  location: string;
  crop: string;
  area_sqm: number;
  cultivation_cycle_months: number;
  price_inr: number;
  status: string;
  description: string;
  latitude: number;
  longitude: number;
  processedProducts: string[];
};

const MANDAS: Manda[] = [
  {
    id: 1,
    manda_number: "Manda 01",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Wheat",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Organic wheat cultivated by local farmers in Rasra, Ballia with monitored farming practices.",
    latitude: 25.85,
    longitude: 83.85,
    processedProducts: ["Wheat Flour", "Cleaned Wheat", "Atta"],
  },
  {
    id: 2,
    manda_number: "Manda 02",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Rice",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Rice grown locally and delivered as farm produce or processed rice according to your selection.",
    latitude: 25.85,
    longitude: 83.86,
    processedProducts: ["Rice", "Cleaned Rice", "Rice Flour"],
  },
  {
    id: 3,
    manda_number: "Manda 03",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Chana",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Organic chickpea cultivation with options for whole pulses or processed products.",
    latitude: 25.84,
    longitude: 83.85,
    processedProducts: ["Whole Chana", "Chana Dal", "Besan"],
  },
  {
    id: 4,
    manda_number: "Manda 04",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Arhar Dal",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Traditional pulse cultivation focused on quality arhar and dal processing.",
    latitude: 25.84,
    longitude: 83.87,
    processedProducts: ["Whole Arhar", "Arhar Dal", "Cleaned Pulse"],
  },
  {
    id: 5,
    manda_number: "Manda 05",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Moong",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Moong cultivation managed by local farmers with options for cleaned and processed pulses.",
    latitude: 25.83,
    longitude: 83.86,
    processedProducts: ["Whole Moong", "Moong Dal", "Cleaned Moong"],
  },
  {
    id: 6,
    manda_number: "Manda 06",
    location: "Rasra, Ballia, Uttar Pradesh",
    crop: "Masoor",
    area_sqm: 250,
    cultivation_cycle_months: 6,
    price_inr: 5100,
    status: "available",
    description:
      "Masoor cultivation in Rasra with farm-to-consumer processing options.",
    latitude: 25.83,
    longitude: 83.85,
    processedProducts: ["Whole Masoor", "Masoor Dal", "Cleaned Masoor"],
  },
];

const CROP_TYPES = ["All Crops", "Wheat", "Rice", "Chana", "Arhar Dal", "Moong", "Masoor"];

const productIcons: Record<string, string> = {
  "Wheat Flour": "🌾",
  "Cleaned Wheat": "🌾",
  Atta: "🥣",
  Rice: "🍚",
  "Cleaned Rice": "🍚",
  "Rice Flour": "🥣",
  "Whole Chana": "🫘",
  "Chana Dal": "🫘",
  Besan: "🥣",
  "Whole Arhar": "🫘",
  "Arhar Dal": "🫘",
  "Cleaned Pulse": "✨",
  "Whole Moong": "🫘",
  "Moong Dal": "🫘",
  "Cleaned Moong": "✨",
  "Whole Masoor": "🫘",
  "Masoor Dal": "🫘",
  "Cleaned Masoor": "✨",
};

export default function ExplorePage() {
  const [selectedCrop, setSelectedCrop] = useState("All Crops");
  const [selectedManda, setSelectedManda] = useState<Manda | null>(null);
  const [view, setView] = useState<"grid" | "map">("grid");

  const filteredMandas =
    selectedCrop === "All Crops"
      ? MANDAS
      : MANDAS.filter((manda) => manda.crop === selectedCrop);

  return (
    <main className="min-h-screen bg-[#f4faf5] text-gray-900">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center">
            <img
              src="/bharatbhumi-logo.png"
              alt="BharatBhumi"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-lg px-4 py-2 font-medium text-[#14532d] sm:block"
            >
              Home
            </Link>

            <Link
              href="/auth/login"
              className="rounded-lg bg-[#16803c] px-4 py-2 font-semibold text-white"
            >
              Login
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#146c35] via-[#16803c] to-[#55a630] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-100">
            BharatBhumi • Rasra, Ballia
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Explore Your Manda
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-50">
            Choose a geo-mapped micro-farm in Rasra, Ballia and select the crop
            and final form in which you want to receive your farm produce.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full bg-white/15 px-5 py-2">
              📍 Rasra, Ballia
            </div>
            <div className="rounded-full bg-white/15 px-5 py-2">
              🌱 Organic Farming
            </div>
            <div className="rounded-full bg-white/15 px-5 py-2">
              🫘 Pulses & Grains
            </div>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#16803c]">
                Farming Location
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                📍 Rasra, Ballia, Uttar Pradesh
              </h2>

              <p className="mt-1 text-gray-600">
                Local farmers • Geo-mapped Mandas • Farm monitoring
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-[#16803c]">
                {MANDAS.length}
              </p>
              <p className="text-sm font-medium text-gray-600">
                Available Mandas
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-[73px] z-40 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div className="flex flex-wrap items-center gap-3">

            <label className="font-semibold text-gray-700">
              Crop:
            </label>

            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-medium outline-none focus:border-[#16803c]"
            >
              {CROP_TYPES.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>

          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={() => setView("grid")}
              className={`rounded-xl px-4 py-2.5 font-semibold ${
                view === "grid"
                  ? "bg-[#16803c] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              ▦ Grid
            </button>

            <button
              onClick={() => setView("map")}
              className={`rounded-xl px-4 py-2.5 font-semibold ${
                view === "map"
                  ? "bg-[#16803c] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              📍 Location
            </button>

          </div>

        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        {view === "map" ? (
          <div className="mb-10 overflow-hidden rounded-3xl border bg-white shadow-sm">

            <div className="flex min-h-[400px] items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-8">

              <div className="text-center">

                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#16803c] text-6xl shadow-xl">
                  📍
                </div>

                <h2 className="text-3xl font-bold text-[#14532d]">
                  Rasra, Ballia
                </h2>

                <p className="mt-3 text-gray-600">
                  BharatBhumi Manda farming zone
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-[#16803c]">
                      {filteredMandas.length}
                    </p>
                    <p className="text-xs text-gray-500">
                      Mandas
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-[#16803c]">
                      250
                    </p>
                    <p className="text-xs text-gray-500">
                      sq.m / Manda
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-[#16803c]">
                      6
                    </p>
                    <p className="text-xs text-gray-500">
                      Months
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-[#16803c]">
                      ₹5,100
                    </p>
                    <p className="text-xs text-gray-500">
                      Subscription
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        ) : null}

        {/* TITLE */}
        <div className="mb-8">

          <p className="font-semibold text-[#16803c]">
            AVAILABLE FARMS
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
            Choose Your Manda
          </h2>

          <p className="mt-2 text-gray-600">
            {filteredMandas.length} Manda
            {filteredMandas.length !== 1 ? "s" : ""} available in Rasra,
            Ballia
          </p>

        </div>

        {/* CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredMandas.map((manda) => (

            <article
              key={manda.id}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* CARD HEADER */}
              <div className="bg-gradient-to-br from-[#146c35] to-[#55a630] p-5 text-white">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <p className="text-sm font-medium text-green-100">
                      Geo-mapped micro-farm
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold">
                      {manda.manda_number}
                    </h3>
                  </div>

                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                    Available
                  </span>

                </div>

                <p className="mt-4 text-sm text-green-50">
                  📍 {manda.location}
                </p>

              </div>

              {/* CARD BODY */}
              <div className="p-5">

                <div className="mb-5 flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl">
                    {manda.crop === "Wheat" && "🌾"}
                    {manda.crop === "Rice" && "🌾"}
                    {manda.crop === "Chana" && "🫘"}
                    {manda.crop === "Arhar Dal" && "🫘"}
                    {manda.crop === "Moong" && "🫘"}
                    {manda.crop === "Masoor" && "🫘"}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-500">
                      Crop
                    </p>

                    <p className="text-xl font-bold text-[#16803c]">
                      {manda.crop}
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Area
                    </p>
                    <p className="font-bold">
                      {manda.area_sqm} sq.m
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Cycle
                    </p>
                    <p className="font-bold">
                      {manda.cultivation_cycle_months} months
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {manda.description}
                </p>

                {/* PROCESSED PRODUCTS PREVIEW */}
                <div className="mt-5">

                  <p className="mb-3 text-sm font-bold text-gray-900">
                    🌾 Choose processed yield
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {manda.processedProducts.slice(0, 3).map((product) => (

                      <span
                        key={product}
                        className="rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-xs font-medium text-[#14532d]"
                      >
                        {productIcons[product] || "🌱"} {product}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="mt-6 border-t pt-5">

                  <div className="flex items-end justify-between gap-3">

                    <div>
                      <p className="text-xs text-gray-500">
                        Subscription
                      </p>

                      <p className="text-2xl font-extrabold text-[#16803c]">
                        ₹{manda.price_inr.toLocaleString("en-IN")}
                      </p>

                      <p className="text-xs text-gray-500">
                        for {manda.cultivation_cycle_months} months
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedManda(manda)}
                      className="rounded-xl bg-[#16803c] px-5 py-3 font-bold text-white transition hover:bg-[#11652f]"
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* PROCESSING SECTION */}
      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="font-bold uppercase tracking-wider text-[#16803c]">
              FROM FARM TO TABLE
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Choose how you receive your yield
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              BharatBhumi can offer the harvested produce in its natural form
              or as selected processed products such as flour, rice and dal.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border bg-[#f8fcf8] p-6">
              <div className="text-5xl">🌾</div>
              <h3 className="mt-4 text-xl font-bold">
                Farm Produce
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Receive cleaned grain or pulse directly from your selected
                Manda.
              </p>
            </div>

            <div className="rounded-3xl border bg-[#f8fcf8] p-6">
              <div className="text-5xl">🥣</div>
              <h3 className="mt-4 text-xl font-bold">
                Flour
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Wheat can be processed into atta or flour before delivery.
              </p>
            </div>

            <div className="rounded-3xl border bg-[#f8fcf8] p-6">
              <div className="text-5xl">🍚</div>
              <h3 className="mt-4 text-xl font-bold">
                Rice
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Rice can be cleaned and prepared for convenient household use.
              </p>
            </div>

            <div className="rounded-3xl border bg-[#f8fcf8] p-6">
              <div className="text-5xl">🫘</div>
              <h3 className="mt-4 text-xl font-bold">
                Processed Pulses
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Chana, arhar, moong and masoor can be supplied as cleaned
                pulses or dal.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* MODAL */}
      {selectedManda && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedManda(null)}
        >

          <div
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="bg-gradient-to-br from-[#146c35] to-[#55a630] p-6 text-white">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm text-green-100">
                    BharatBhumi Manda
                  </p>

                  <h2 className="mt-1 text-3xl font-extrabold">
                    {selectedManda.manda_number}
                  </h2>

                  <p className="mt-2 text-sm text-green-50">
                    📍 {selectedManda.location}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedManda(null)}
className="rounded-full bg-white/20 px-3 py-2 text-xl"
                >
                  ×
                </button>
              </div>
            </div>
            {/* MODAL CONTENT */}
            <div className="space-y-7 p-6">
              {/* BASIC INFO */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="text-xs text-gray-500">
                    Crop
                  </p>
                  <p className="mt-1 font-bold text-[#16803c]">
                    {selectedManda.crop}
                  </p>
                </div>
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="text-xs text-gray-500">
                    Area
                  </p>
                  <p className="mt-1 font-bold text-[#16803c]">
                    {selectedManda.area_sqm} sq.m
                  </p>
                </div>
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="text-xs text-gray-500">
                    Cycle
                  </p>
                  <p className="mt-1 font-bold text-[#16803c]">
                    {selectedManda.cultivation_cycle_months} months
                  </p>
                </div>
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="text-xs text-gray-500">
                    Status
                  </p>
                  <p className="mt-1 font-bold capitalize text-[#16803c]">
                    {selectedManda.status}
                  </p>
                </div>
              </div>
              {/* DESCRIPTION */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  About this Manda
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {selectedManda.description}
                </p>
              </div>
              {/* PROCESSED YIELD */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Select your yield format
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Available processing options for this crop
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {selectedManda.processedProducts.map((product) => (
                    <button
                      key={product}
                      className="rounded-2xl border-2 border-gray-100 bg-white p-4 text-left transition hover:border-[#16803c] hover:bg-green-50"
                    >
                      <div className="text-4xl">
                        {productIcons[product] || "🌱"}
                      </div>
                      <p className="mt-3 font-bold text-gray-900">
                        {product}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Processed yield option
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              {/* LOCATION */}
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="font-bold text-gray-900">
                  📍 Geo-location
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Rasra, Ballia, Uttar Pradesh
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">
                      Latitude
                    </p>
                    <p className="font-mono font-semibold">
                      {selectedManda.latitude}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">
                      Longitude
                    </p>
                    <p className="font-mono font-semibold">
                      {selectedManda.longitude}
                    </p>
                  </div>
                </div>
              </div>
              {/* PRICE */}
              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm text-gray-600">
                  Manda subscription
                </p>
                <div className="mt-1 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-extrabold text-[#16803c]">
                      ₹{selectedManda.price_inr.toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedManda.cultivation_cycle_months}-month cycle
                    </p>
                  </div>
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-bold text-green-900">
                    Available
                  </span>
                </div>
              </div>
            </div>
            {/* MODAL FOOTER */}
            <div className="sticky bottom-0 flex gap-3 border-t bg-white p-5">
              <button
                onClick={() => setSelectedManda(null)}
                className="flex-1 rounded-xl border-2 border-[#16803c] px-5 py-3 font-bold text-[#16803c]"
              >
                Close
              </button>
              <Link
                href={`/checkout?manda=${selectedManda.id}`}
                className="flex-1 rounded-xl bg-[#16803c] px-5 py-3 text-center font-bold text-white"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* FOOTER */}
      <footer className="bg-[#10251a] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xl font-bold">
              🌾 BharatBhumi
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Connecting people, farmland and food.
            </p>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 BharatBhumi
          </p>
        </div>
      </footer>
    </main>
  );
}
     