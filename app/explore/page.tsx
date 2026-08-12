"use client";

import Link from "next/link";
import { useState } from "react";

export default function ExplorePage() {
  const [showMandas, setShowMandas] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7faf5] text-gray-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white-700 text-2xl">
              <img
  src="/bharatbhumi-logo.png"
  alt="BharatBhumi"
  className="h-12 w-auto object-contain"
/>
            </div>

            <div>
              <h1 className="text-xl font-black text-green-800">
                BharatBhumi
              </h1>

              <p className="hidden text-xs text-gray-500 sm:block">
                Your farm. Your food.
              </p>
            </div>

          </Link>


          <div className="flex items-center gap-3">

            <Link
              href="/"
              className="hidden rounded-lg px-4 py-2 font-medium text-gray-600 hover:bg-gray-50 sm:block"
            >
              Home
            </Link>

            <Link
              href="/auth/login"
              className="rounded-lg bg-green-700 px-4 py-2 font-semibold text-white hover:bg-green-800"
            >
              Login
            </Link>

          </div>

        </div>

      </header>


      {/* ================= PAGE INTRO ================= */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            My BharatBhumi
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Your farm dashboard.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Follow your Manda, see cultivation updates,
                track your harvest and subscribe to another
                farm whenever you want.
              </p>

            </div>


            <button
              onClick={() => setShowMandas(true)}
              className="rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white shadow-sm hover:bg-green-800"
            >
              + Subscribe New Manda
            </button>

          </div>

        </div>

      </section>


      {/* ================= FARM SUMMARY ================= */}
      <section className="py-8">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-5 md:grid-cols-3">

            <DashboardCard
              label="My Mandas"
              value="01"
              icon="🌱"
              description="Active farm subscription"
            />

            <DashboardCard
              label="Current Crop"
              value="Wheat"
              icon="🌾"
              description="Growing in your Manda"
            />

            <DashboardCard
              label="Farm Location"
              value="Rasra"
              icon="📍"
              description="Ballia, Uttar Pradesh"
            />

          </div>

        </div>

      </section>


      {/* ================= ACTIVE FARM ================= */}
      <section className="py-8">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Your Farm
              </p>

              <h3 className="mt-1 text-2xl font-black">
                Manda BB-001
              </h3>

            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              ● Growing
            </span>

          </div>


          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

            {/* Farm header */}
            <div className="bg-green-900 p-6 text-white sm:p-8">

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                <div>

                  <p className="text-sm text-green-200">
                    Geo-mapped Manda
                  </p>

                  <h4 className="mt-1 text-3xl font-black">
                    Manda BB-001
                  </h4>

                  <p className="mt-2 text-green-100">
                    📍 Rasra, Ballia, Uttar Pradesh
                  </p>

                </div>


                <div className="rounded-2xl bg-white/10 px-5 py-4">

                  <p className="text-xs text-green-200">
                    Area
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    250 m²
                  </p>

                </div>

              </div>

            </div>


            {/* Farm information */}
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">

              {/* Crop */}
              <div>

                <p className="text-sm text-gray-500">
                  Current crop
                </p>

                <div className="mt-3 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                    🌾
                  </div>

                  <div>

                    <p className="text-xl font-black">
                      Wheat
                    </p>

                    <p className="text-sm text-gray-500">
                      Organic cultivation
                    </p>

                  </div>

                </div>

              </div>


              {/* Cycle */}
              <div>

                <p className="text-sm text-gray-500">
                  Cultivation cycle
                </p>

                <p className="mt-3 text-2xl font-black">
                  Month 3 / 6
                </p>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">

                  <div
                    className="h-full rounded-full bg-green-600"
                    style={{ width: "50%" }}
                  />

                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Approximately 50% of the cycle completed
                </p>

              </div>


              {/* Expected harvest */}
              <div>

                <p className="text-sm text-gray-500">
                  Expected harvest
                </p>

                <p className="mt-3 text-2xl font-black">
                  80–100 kg
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Estimated yield
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FARM UPDATES ================= */}
      <section className="py-8">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-5">

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Farm Journal
            </p>

            <h3 className="mt-1 text-2xl font-black">
              Latest farm updates
            </h3>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            <FarmUpdate
              date="Today"
              icon="🌱"
              title="Crop growing well"
              description="Your wheat crop is progressing normally. The farmer has completed the latest field inspection."
            />

            <FarmUpdate
              date="12 days ago"
              icon="💧"
              title="Irrigation completed"
              description="The scheduled irrigation cycle was completed for your Manda."
            />

            <FarmUpdate
              date="28 days ago"
              icon="👨‍🌾"
              title="Crop inspection"
              description="The farmer inspected the crop and reported healthy plant growth."
            />

          </div>

        </div>

      </section>


      {/* ================= INVENTORY PREVIEW ================= */}
      <section className="py-8">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="rounded-3xl border border-green-100 bg-green-50 p-6 sm:p-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  My Produce
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Your harvest inventory
                </h3>

                <p className="mt-3 max-w-2xl text-gray-600">
                  After harvesting, your produce will appear here.
                  You can order only the quantity you need instead
                  of taking your entire harvest at once.
                </p>

              </div>


              <div className="min-w-[230px] rounded-2xl bg-white p-5 shadow-sm">

                <p className="text-sm text-gray-500">
                  Current inventory
                </p>

                <p className="mt-1 text-4xl font-black text-green-700">
                  0 kg
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Harvest pending
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= NEW MANDA CTA ================= */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 to-green-950 p-8 text-white sm:p-12">

            <div className="max-w-3xl">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-green-100">
                🌱 Grow another Manda
              </span>

              <h3 className="mt-5 text-4xl font-black sm:text-5xl">
                Want another farm?
              </h3>

              <p className="mt-5 text-lg leading-8 text-green-100">
                Subscribe to a new Manda in Rasra, choose
                your crop and expand your farm portfolio.
              </p>

              <button
                onClick={() => setShowMandas(true)}
                className="mt-7 rounded-xl bg-white px-6 py-3.5 font-bold text-green-800 hover:bg-green-50"
              >
                Explore New Mandas →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 py-10 text-white">

        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">

          <div className="text-2xl">
            🌾
          </div>

          <p className="mt-2 text-lg font-black">
            BharatBhumi
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Your farm. Your food. Our responsibility.
          </p>

          <p className="mt-6 text-xs text-gray-600">
            © 2026 BharatBhumi. All rights reserved.
          </p>

        </div>

      </footer>


      {/* ================= MANDA SELECTION MODAL ================= */}
      {showMandas && (
        <MandaModal onClose={() => setShowMandas(false)} />
      )}

    </main>
  );
}


/* =========================================================
   DASHBOARD CARD
   ========================================================= */

function DashboardCard({
  label,
  value,
  icon,
  description,
}: {
  label: string;
  value: string;
  icon: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {label}
          </p>

          <p className="mt-2 text-3xl font-black">
            {value}
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
          {icon}
        </div>

      </div>

      <p className="mt-4 text-sm text-gray-500">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   FARM UPDATE
   ========================================================= */

function FarmUpdate({
  date,
  icon,
  title,
  description,
}: {
  date: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
          {icon}
        </div>

        <span className="text-xs font-medium text-gray-400">
          {date}
        </span>

      </div>

      <h4 className="mt-5 text-lg font-bold">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   MANDA MODAL
   ========================================================= */

function MandaModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const mandas = [
    {
      id: "BB-002",
      crop: "Wheat",
      area: "250 m²",
      price: "₹5,100",
      status: "Available",
      icon: "🌾",
    },
    {
      id: "BB-003",
      crop: "Rice",
      area: "250 m²",
      price: "₹5,100",
      status: "Available",
      icon: "🍚",
    },
    {
      id: "BB-004",
      crop: "Pulses",
      area: "250 m²",
      price: "₹5,100",
      status: "Available",
      icon: "🫘",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >

      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6 sm:p-8">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Available Mandas
            </p>

            <h2 className="mt-1 text-3xl font-black">
              Choose your next farm
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Rasra, Ballia
            </p>

          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl hover:bg-gray-200"
            aria-label="Close"
          >
            ×
          </button>

        </div>


        {/* Mandas */}
        <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">

          {mandas.map((manda) => (

            <div
              key={manda.id}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                  {manda.icon}
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                  {manda.status}
                </span>

              </div>


              <h3 className="mt-5 text-xl font-black">
                {manda.id}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {manda.crop}
              </p>


              <div className="mt-5 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Area
                  </span>

                  <span className="font-bold">
                    {manda.area}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Location
                  </span>

                  <span className="font-bold">
                    Rasra
                  </span>
                </div>

              </div>


              <div className="mt-5 border-t border-gray-100 pt-5">

                <p className="text-xs text-gray-500">
                  Subscription
                </p>

                <p className="mt-1 text-2xl font-black text-green-700">
                  {manda.price}
                </p>

                <button
                  onClick={() => {
                    alert(
                      `Manda ${manda.id} selected. Checkout can be connected next.`
                    );
                  }}
                  className="mt-4 w-full rounded-xl bg-green-700 py-3 font-bold text-white hover:bg-green-800"
                >
                  Subscribe →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}