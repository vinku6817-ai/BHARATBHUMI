'use client';

import Link from 'next/link';
import { useState } from 'react';

type Crop = {
  id: number;
  name: string;
  hindi: string;
  type: string;
  icon: string;
  color: string;
  area: string;
  cycle: string;
  yield: string;
  price: number;
  description: string;
};

const CROPS: Crop[] = [
  {
    id: 1,
    name: 'Wheat',
    hindi: 'Gehu',
    type: 'Cereal',
    icon: '🌾',
    color: 'bg-amber-50',
    area: '1 Manda',
    cycle: '5–6 Months',
    yield: '80–100 kg',
    price: 5100,
    description:
      'Naturally cultivated wheat grown by local farmers in Rasra, Ballia.'
  },
  {
    id: 2,
    name: 'Paddy',
    hindi: 'Dhaan',
    type: 'Cereal',
    icon: '🌾',
    color: 'bg-green-50',
    area: '1 Manda',
    cycle: '4–5 Months',
    yield: '80–100 kg',
    price: 5100,
    description:
      'Locally cultivated paddy that can be processed into rice.'
  },
  {
    id: 3,
    name: 'Chickpea',
    hindi: 'Chana',
    type: 'Pulse',
    icon: '🫘',
    color: 'bg-yellow-50',
    area: '1 Manda',
    cycle: '4–5 Months',
    yield: '45–60 kg',
    price: 5100,
    description:
      'Protein-rich chickpeas cultivated naturally by local farmers.'
  },
  {
    id: 4,
    name: 'Lentil',
    hindi: 'Masoor',
    type: 'Pulse',
    icon: '🫘',
    color: 'bg-red-50',
    area: '1 Manda',
    cycle: '4–5 Months',
    yield: '40–55 kg',
    price: 5100,
    description:
      'Locally grown lentils with transparent cultivation tracking.'
  },
  {
    id: 5,
    name: 'Pigeon Pea',
    hindi: 'Arhar',
    type: 'Pulse',
    icon: '🫘',
    color: 'bg-orange-50',
    area: '1 Manda',
    cycle: '5–6 Months',
    yield: '45–60 kg',
    price: 5100,
    description:
      'Traditional Indian pulse cultivated through local farming.'
  },
  {
    id: 6,
    name: 'Peas',
    hindi: 'Matar',
    type: 'Pulse',
    icon: '🫛',
    color: 'bg-emerald-50',
    area: '1 Manda',
    cycle: '3–4 Months',
    yield: '45–60 kg',
    price: 5100,
    description:
      'Fresh pea crop grown by farmers in the Rasra region.'
  }
];

const PROCESSED_PRODUCTS = [
  {
    crop: 'Wheat',
    raw: '🌾',
    process: 'Processing',
    product: 'Wheat Flour',
    output: '🌾 → ⚙️ → 🥣',
    icon: '🥣',
    description:
      'Your harvested wheat can be cleaned and milled into fresh wheat flour.'
  },
  {
    crop: 'Paddy',
    raw: '🌾',
    process: 'Milling',
    product: 'Rice',
    output: '🌾 → ⚙️ → 🍚',
    icon: '🍚',
    description:
      'Your paddy can be processed and delivered as cleaned rice.'
  },
  {
    crop: 'Pulses',
    raw: '🫘',
    process: 'Dehusking & Splitting',
    product: 'Processed Dal',
    output: '🫘 → ⚙️ → 🥣',
    icon: '🥣',
    description:
      'Your pulse crop can be cleaned, dehusked and processed into dal.'
  }
];

export default function HomePage() {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [selectedType, setSelectedType] = useState('All');

  const filteredCrops =
    selectedType === 'All'
      ? CROPS
      : CROPS.filter((crop) => crop.type === selectedType);

  return (
    <main className="min-h-screen bg-[#f6fbf5] text-[#173b28]">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/bharatbhumi-logo.png"
              alt="BharatBhumi"
              className="h-12 w-auto object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <span className="text-xl font-bold text-[#08783f] sm:text-2xl">
              BharatBhumi
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="font-medium text-[#173b28] hover:text-[#08783f]"
            >
              Home
            </Link>

            <a
              href="#how-it-works"
              className="font-medium text-[#173b28] hover:text-[#08783f]"
            >
              How It Works
            </a>

            <a
              href="#mandas"
              className="font-medium text-[#173b28] hover:text-[#08783f]"
            >
              Explore Mandas
            </a>

            <Link
              href="/auth/login"
              className="rounded-lg bg-[#08783f] px-5 py-2.5 font-semibold text-white hover:bg-[#066532]"
            >
              Login
            </Link>
          </div>

          {/* Mobile button */}
          <Link
            href="/auth/login"
            className="rounded-lg bg-[#08783f] px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="overflow-hidden bg-gradient-to-br from-[#effcf2] via-white to-[#e5f8e9]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-8">

          <div>
            <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-[#08783f]">
              📍 Rasra, Ballia, Uttar Pradesh
            </div>

            <p className="mb-4 text-lg font-bold uppercase tracking-wider text-[#159447]">
              Geo-Mapped Micro Farming
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-[#10291d] sm:text-6xl lg:text-7xl">
              Your Farm.
              <br />
              Your Food.
              <br />
              <span className="text-[#08783f]">
                Our Responsibility.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              BharatBhumi connects you with a geo-mapped micro-plot called
              a <strong>Manda</strong>. Choose your farm, select your crop,
              and let our local farmers take care of cultivation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mandas"
                className="rounded-xl bg-[#08783f] px-7 py-4 text-center font-bold text-white shadow-lg hover:bg-[#066532]"
              >
                Explore Available Mandas →
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border-2 border-[#08783f] px-7 py-4 text-center font-bold text-[#08783f] hover:bg-green-50"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center">
            <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full bg-green-100 sm:h-[420px] sm:w-[420px]">

              <div className="absolute inset-8 rounded-full border-2 border-dashed border-green-300" />

              <div className="text-center">
                <div className="text-8xl sm:text-9xl">
                  🌾
                </div>

                <div className="mt-4 text-2xl font-black text-[#08783f]">
                  BharatBhumi
                </div>

                <div className="mt-1 text-sm font-medium text-gray-600">
                  Farm • Food • Farmer
                </div>
              </div>

              <div className="absolute right-0 top-10 rounded-2xl bg-white p-4 shadow-xl">
                <div className="text-3xl">📍</div>
                <div className="text-xs font-bold">
                  Rasra
                </div>
              </div>

              <div className="absolute bottom-5 left-0 rounded-2xl bg-white p-4 shadow-xl">
                <div className="text-3xl">🧑‍🌾</div>
                <div className="text-xs font-bold">
                  Local Farmers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}
      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 md:grid-cols-4">

          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 text-center">
            <div className="text-3xl font-black text-[#08783f]">
              1 Manda
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Micro Plot
            </div>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 text-center">
            <div className="text-3xl font-black text-[#08783f]">
              ₹5,100
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Subscription
            </div>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 text-center">
            <div className="text-3xl font-black text-[#08783f]">
              6 Months
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Farming Cycle
            </div>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 text-center">
            <div className="text-3xl font-black text-[#08783f]">
              100%
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Transparent
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="bg-[#f0fbf2] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-[#159447]">
              Simple Process
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#10291d]">
              How BharatBhumi Works
            </h2>

            <p className="mt-4 text-gray-600">
              From choosing your Manda to receiving your farm yield.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              ['01', 'Choose Your Manda', 'Select a geo-mapped micro-plot.', '📍'],
              ['02', 'Select Your Crop', 'Choose cereal or pulse crops.', '🌾'],
              ['03', 'Farmers Cultivate', 'Our local farmers manage cultivation.', '🧑‍🌾'],
              ['04', 'Receive Your Yield', 'Get your produce or processed products.', '📦']
            ].map(([number, title, text, icon]) => (
              <div
                key={number}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-green-600">
                    {number}
                  </span>
                  <span className="text-4xl">
                    {icon}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CROPS ================= */}
      <section
        id="mandas"
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="font-bold uppercase tracking-widest text-[#159447]">
                Explore
              </p>

              <h2 className="mt-2 text-4xl font-black text-[#10291d]">
                Available Mandas
              </h2>

              <p className="mt-3 text-gray-600">
                All farms are located around Rasra, Ballia.
              </p>
            </div>

            {/* Crop filter */}
            <div className="flex gap-2">
              {['All', 'Cereal', 'Pulse'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    selectedType === type
                      ? 'bg-[#08783f] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

          </div>

          {/* Crop cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className={`${crop.color} p-6`}>

                  <div className="flex items-start justify-between">
                    <div className="text-6xl">
                      {crop.icon}
                    </div>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-green-700">
                      Available
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    {crop.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {crop.hindi} • {crop.type}
                  </p>
                </div>

                <div className="p-6">

                  <div className="grid grid-cols-2 gap-4 text-sm">

                    <div>
                      <div className="text-gray-500">
                        Area
                      </div>
                      <div className="font-bold">
                        {crop.area}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500">
                        Cycle
                      </div>
                      <div className="font-bold">
                        {crop.cycle}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500">
                        Expected Yield
                      </div>
                      <div className="font-bold">
                        {crop.yield}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500">
                        Location
                      </div>
                      <div className="font-bold">
                        Rasra
                      </div>
                    </div>

                  </div>

                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {crop.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t pt-5">

                    <div>
                      <div className="text-xs text-gray-500">
                        Subscription
                      </div>

                      <div className="text-2xl font-black text-[#08783f]">
                        ₹{crop.price.toLocaleString()}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCrop(crop)}
                      className="rounded-xl bg-[#08783f] px-5 py-3 font-bold text-white hover:bg-[#066532]"
                    >
                      View
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESSED YIELD ================= */}
      <section className="bg-[#f0fbf2] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-widest text-[#159447]">
              Beyond Farming
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#10291d]">
              Choose How You Receive Your Yield
            </h2>

            <p className="mt-4 text-gray-600">
              Your farm produce can be delivered as raw agricultural
              produce or processed into convenient food products.
            </p>

          </div>

          {/* Processing flow */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {PROCESSED_PRODUCTS.map((product) => (
              <div
                key={product.product}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >

                {/* Visual */}
                <div className="bg-gradient-to-br from-green-50 to-white p-8">

                  <div className="flex items-center justify-center gap-3 text-5xl">
                    <span>
                      {product.raw}
                    </span>

                    <span className="text-2xl text-gray-400">
                      →
                    </span>

                    <span className="rounded-2xl bg-white p-3 shadow">
                      ⚙️
                    </span>

                    <span className="text-2xl text-gray-400">
                      →
                    </span>

                    <span>
                      {product.icon}
                    </span>
                  </div>

                  <div className="mt-6 text-center">

                    <div className="text-sm font-bold uppercase tracking-widest text-green-600">
                      {product.process}
                    </div>

                    <div className="mt-2 text-2xl font-black">
                      {product.product}
                    </div>

                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-black">
                    {product.crop} → {product.product}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <button className="mt-6 w-full rounded-xl border-2 border-[#08783f] py-3 font-bold text-[#08783f] hover:bg-green-50">
                    Choose Processed Yield
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Processing note */}
          <div className="mt-10 rounded-2xl border border-green-200 bg-white p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              <div className="text-4xl">
                📦
              </div>

              <div>
                <h3 className="font-black">
                  Raw or Processed — You Choose
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Depending on the crop and availability, subscribers
                  can select raw produce or suitable processed products.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-co