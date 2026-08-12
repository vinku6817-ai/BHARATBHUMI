"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7faf5] text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          <Link href="/" className="flex items-center gap-3">
            <img
              src="/bharatbhumi-logo.png"
              alt="BharatBhumi"
              className="h-12 w-auto object-contain"
            />

            <div className="hidden sm:block">
              <p className="text-lg font-extrabold text-green-800">
                BharatBhumi
              </p>
              <p className="text-xs text-gray-500">
                Your farm. Your food. Our responsibility.
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/explore"
              className="rounded-lg px-4 py-2 font-semibold text-green-800 hover:bg-green-50"
            >
              Explore
            </Link>

            <Link
              href="/auth/login"
              className="rounded-lg bg-green-700 px-5 py-2.5 font-semibold text-white hover:bg-green-800"
            >
              Login
            </Link>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">

          <div>

            <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              🌱 Farm-to-consumer agriculture
            </div>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
              Your farm.
              <br />
              Your food.
              <br />
              <span className="text-green-200">
                Our responsibility.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              BharatBhumi lets you choose a geo-mapped Manda in
              Rasra, Ballia and participate in its cultivation.
              Local farmers manage the farm while you stay connected
              with your produce.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/explore"
                className="rounded-lg bg-white px-6 py-3.5 font-bold text-green-800 shadow-lg hover:bg-green-50"
              >
                Explore Mandas →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white hover:bg-white/10"
              >
                How It Works
              </a>

            </div>

          </div>


          {/* HERO MANDA CARD */}
          <div className="rounded-3xl bg-white p-5 shadow-2xl">

            <div className="rounded-2xl bg-green-50 p-6">

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm font-semibold text-green-700">
                    GEO-MAPPED MANDA
                  </p>

                  <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
                    Manda 01
                  </h2>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                  AVAILABLE
                </span>

              </div>


              {/* Simple Manda Map */}
              <div className="mt-6 rounded-2xl border border-green-200 bg-white p-4">

                <div className="grid grid-cols-4 gap-2">

                  {[
                    "M01",
                    "M02",
                    "M03",
                    "M04",
                    "M05",
                    "M06",
                    "M07",
                    "M08",
                    "M09",
                    "M10",
                    "M11",
                    "M12",
                    "M13",
                    "M14",
                    "M15",
                    "M16",
                  ].map((manda, index) => (

                    <div
                      key={manda}
                      className={`flex aspect-square items-center justify-center rounded-md text-xs font-bold ${
                        index === 0
                          ? "bg-green-700 text-white"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {manda}
                    </div>

                  ))}

                </div>

              </div>


              <div className="mt-5 grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="font-bold text-gray-900">
                    📍 Rasra, Ballia
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Area
                  </p>

                  <p className="font-bold text-gray-900">
                    ~250 sq. m.
                  </p>
                </div>

              </div>


              <div className="mt-5 border-t border-green-200 pt-5">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs text-gray-500">
                      Subscription
                    </p>

                    <p className="text-3xl font-extrabold text-green-700">
                      ₹5,100
                    </p>

                    <p className="text-xs text-gray-500">
                      6-month cultivation cycle
                    </p>

                  </div>

                  <span className="text-4xl">
                    🌾
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= THREE BENEFITS ================= */}
      <section className="border-b bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              📍
            </div>

            <div>
              <p className="font-bold">
                Geo-mapped farms
              </p>

              <p className="text-sm text-gray-500">
                Know your farm location
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              👨‍🌾
            </div>

            <div>
              <p className="font-bold">
                Local farmers
              </p>

              <p className="text-sm text-gray-500">
                Farming managed locally
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              📦
            </div>

            <div>
              <p className="font-bold">
                Flexible inventory
              </p>

              <p className="text-sm text-gray-500">
                Take only what you need
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="bg-[#f7faf5] py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">

          <div>

            <p className="font-bold uppercase tracking-wider text-green-700">
              What is BharatBhumi?
            </p>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight">
              A simpler connection between you and farmland.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              BharatBhumi is a farm-to-consumer platform where users
              can choose small geo-mapped farm plots called Mandas.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              You choose the Manda and crop. Local farmers cultivate
              it. After harvesting, your produce becomes part of your
              digital inventory, from which you can order according to
              your needs.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌱</div>

              <h3 className="mt-4 text-xl font-bold">
                Choose
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Select your Manda and preferred crop.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">👨‍🌾</div>

              <h3 className="mt-4 text-xl font-bold">
                Cultivate
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Local farmers manage the cultivation.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🌾</div>

              <h3 className="mt-4 text-xl font-bold">
                Harvest
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Your harvested produce is recorded.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">📦</div>

              <h3 className="mt-4 text-xl font-bold">
                Use
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Order only the amount you need.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="bg-white py-20"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-wider text-green-700">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              From your Manda to your kitchen.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A transparent journey from selecting your farm to
              receiving the produce you actually need.
            </p>

          </div>


          {/* STEPS */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                1
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Choose your Manda
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Select a geo-mapped Manda in Rasra, Ballia.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Select your crop
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Choose from available grains and pulse crops.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Farmer cultivates
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Local farmers take care of cultivation and harvesting.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                4
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Harvest
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Once harvested, your produce enters your inventory.
              </p>

            </div>

          </div>


          {/* ================= INVENTORY MODEL ================= */}
          <div className="mt-10 rounded-3xl border border-green-100 bg-green-50 p-6 sm:p-10">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>

                <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                  📦 Inventory Model
                </div>

                <h3 className="mt-5 text-3xl font-extrabold">
                  Take only what you need.
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  After harvesting, your complete produce quantity is
                  added to your BharatBhumi inventory.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  You don't have to order everything at once. Whenever
                  you need produce, simply place an order for the
                  quantity you require. Your remaining inventory is
                  automatically updated.
                </p>

              </div>


              {/* INVENTORY EXAMPLE */}

              <div className="rounded-2xl bg-white p-6 shadow-md">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      Your harvested produce
                    </p>

                    <p className="mt-1 text-4xl font-extrabold">
                      100 kg
                    </p>

                    <p className="text-sm text-gray-500">
                      🌾 Wheat
                    </p>
                  </div>

                  <div className="text-5xl">
                    📦
                  </div>

                </div>


                <div className="mt-6 border-t pt-6">

                  <div className="flex items-center justify-between">

                    <p className="font-semibold">
                      You currently need
                    </p>

                    <p className="text-2xl font-extrabold text-green-700">
                      15 kg
                    </p>

                  </div>


                  <div className="mt-4 h-4 overflow-hidden rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-green-600"
                      style={{ width: "15%" }}
                    />

                  </div>


                  <div className="mt-2 flex justify-between text-xs text-gray-500">

                    <span>
                      15 kg ordered
                    </span>

                    <span>
                      85 kg remaining
                    </span>

                  </div>

                </div>


                <div className="mt-6 rounded-xl bg-green-50 p-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm text-gray-500">
                        Updated inventory
                      </p>

                      <p className="text-2xl font-extrabold text-green-700">
                        85 kg
                      </p>
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                      UPDATED ✓
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESSED YIELD ================= */}
      <section className="bg-[#f7faf5] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-3xl">

            <p className="font-bold uppercase tracking-wider text-green-700">
              Processed Yield
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Your produce, prepared your way.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Where processing is available, you can choose how your
              produce should be prepared before delivery.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="text-5xl">
                🌾
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Wheat
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Harvested wheat can be supplied as grain or processed
                into flour / atta.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="text-5xl">
                🍚
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Rice
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Rice can be cleaned, processed and supplied ready
                for household use.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="text-5xl">
                🫘
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Pulses
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Pulse crops can be processed into cleaned pulses or
                dal where processing is available.
              </p>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <div className="text-5xl">
                📦
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Flexible quantity
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Order only the quantity you need from your available
                inventory.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 px-5 py-20 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Ready to choose your Manda?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Explore available geo-mapped Mandas in Rasra, Ballia
            and start your farming journey with BharatBhumi.
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 font-bold text-green-800 shadow-lg hover:bg-green-50"
          >
            Explore Available Mandas →
          </Link>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 px-5 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <img
                src="/bharatbhumi-logo.png"
                alt="BharatBhumi"
                className="h-12 w-auto object-contain"
              />
              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                Connecting people, farmland, farmers and food through
                a transparent farm-to-consumer system.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                BharatBhumi
              </h3>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <Link
                  href="/explore"
                  className="block hover:text-white"
                >
                  Explore Mandas
                </Link>
                <a
                  href="#how-it-works"
                  className="block hover:text-white"
                >
                  How It Works
                </a>
                <Link
                  href="/auth/login"
                  className="block hover:text-white"
                >
                  Login
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold">
                Location
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                📍 Rasra, Ballia
                <br />
                Uttar Pradesh, India
              </p>
              <p className="mt-4 text-sm font-semibold text-green-300">
                Your farm. Your food. Our responsibility.
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            © 2026 BharatBhumi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}