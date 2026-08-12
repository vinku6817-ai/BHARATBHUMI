"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6faf3] text-gray-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
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
              <div className="text-xl font-extrabold text-green-800">
                BharatBhumi
              </div>

              <div className="hidden text-xs text-gray-500 sm:block">
                Your farm. Your food. Our responsibility.
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/explore"
              className="rounded-lg px-3 py-2 font-semibold text-green-800 hover:bg-green-50 sm:px-4"
            >
              Explore
            </Link>

            <Link
              href="/auth/login"
              className="rounded-lg bg-green-700 px-4 py-2.5 font-semibold text-white hover:bg-green-800 sm:px-5"
            >
              Login
            </Link>
          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 text-white">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-green-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">

          {/* Hero text */}
          <div>

            <span className="inline-flex rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-green-100">
              🌱 Farm-to-consumer agriculture
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">
              Your farm.
              <br />
              Your food.
              <br />
              <span className="text-green-200">
                Our responsibility.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              Choose your own geo-mapped Manda in Rasra, Ballia.
              Local farmers cultivate the land while BharatBhumi
              keeps you connected with your farm and your produce.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/explore"
                className="rounded-xl bg-white px-6 py-3.5 font-bold text-green-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Explore Mandas →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                How It Works
              </a>

            </div>

            {/* Hero trust points */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-green-100">

              <div className="flex items-center gap-2">
                <span>✓</span>
                Geo-mapped farms
              </div>

              <div className="flex items-center gap-2">
                <span>✓</span>
                Local farmers
              </div>

              <div className="flex items-center gap-2">
                <span>✓</span>
                Digital inventory
              </div>

            </div>

          </div>


          {/* Hero farm card */}
          <div className="relative">

            <div className="rounded-3xl bg-white p-4 shadow-2xl sm:p-6">

              <div className="rounded-2xl bg-green-50 p-5 sm:p-6">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                      Geo-mapped Manda
                    </p>

                    <h2 className="mt-1 text-3xl font-black text-gray-900">
                      Manda 01
                    </h2>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    AVAILABLE
                  </span>

                </div>


                {/* Farm grid */}
                <div className="mt-6 rounded-2xl border border-green-100 bg-white p-4">

                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700">
                      Farm Layout
                    </span>

                    <span className="text-xs text-gray-500">
                      Rasra, Ballia
                    </span>
                  </div>

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
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex aspect-square items-center justify-center rounded-lg text-xs font-bold ${
                          index === 0
                            ? "bg-green-700 text-white"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>


                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-xs text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      📍 Rasra, Ballia
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Area
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      ~250 sq. m.
                    </p>
                  </div>

                </div>


                <div className="mt-5 border-t border-green-100 pt-5">

                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Subscription
                      </p>

                      <p className="text-3xl font-black text-green-700">
                        ₹5,100
                      </p>

                      <p className="text-xs text-gray-500">
                        6-month cultivation cycle
                      </p>
                    </div>

                    <div className="text-5xl">
                      🌾
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= QUICK FEATURES ================= */}
      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">

          <Feature
            icon="📍"
            title="Geo-mapped farms"
            description="Know exactly where your Manda is located."
          />

          <Feature
            icon="👨‍🌾"
            title="Local farmers"
            description="Farmers manage cultivation at the local level."
          />

          <Feature
            icon="📦"
            title="Flexible inventory"
            description="Order only the amount of produce you need."
          />

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="bg-[#f6faf3] py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">

          <div>

            <p className="font-bold uppercase tracking-widest text-green-700">
              BharatBhumi
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Bring your farm closer to your home.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              BharatBhumi connects consumers with small,
              geo-mapped farm plots called Mandas.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              You select your Manda and crop. Local farmers
              cultivate it. After harvesting, the produce is
              recorded in your digital inventory so you can
              use it according to your requirements.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            <InfoCard
              icon="🌱"
              title="Choose"
              text="Select your Manda and preferred crop."
            />

            <InfoCard
              icon="👨‍🌾"
              title="Cultivate"
              text="Local farmers take care of the farming."
            />

            <InfoCard
              icon="🌾"
              title="Harvest"
              text="Your harvested produce is recorded."
            />

            <InfoCard
              icon="📦"
              title="Use"
              text="Order only what you need from your inventory."
            />

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

            <p className="font-bold uppercase tracking-widest text-green-700">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              From Manda to your kitchen.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A simple and transparent journey from choosing
              your farm to receiving your produce.
            </p>

          </div>


          {/* Steps */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <Step
              number="01"
              icon="📍"
              title="Choose your Manda"
              text="Select a geo-mapped Manda in Rasra, Ballia."
            />

            <Step
              number="02"
              icon="🌱"
              title="Select your crop"
              text="Choose from available grains and pulse crops."
            />

            <Step
              number="03"
              icon="👨‍🌾"
              title="Farmer cultivates"
              text="A local farmer manages cultivation and harvesting."
            />

            <Step
              number="04"
              icon="🌾"
              title="Harvest"
              text="Your harvested produce is added to your inventory."
            />

          </div>


          {/* ================= INVENTORY ================= */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-green-100 bg-green-50">

            <div className="grid lg:grid-cols-2">

              {/* Explanation */}
              <div className="p-7 sm:p-10">

                <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                  📦 Inventory Model
                </span>

                <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                  Take only what you need.
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  Once your crop is harvested, the complete
                  quantity is added to your digital BharatBhumi
                  inventory.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  You don't have to order your entire harvest.
                  Whenever you need produce, simply order the
                  quantity you require.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  After every order, your remaining inventory is
                  automatically updated.
                </p>

              </div>


              {/* Example */}
              <div className="bg-white p-7 sm:p-10">

                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Example
                </p>

                <div className="mt-5 rounded-2xl border border-gray-100 p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm text-gray-500">
                        Harvested
                      </p>

                      <p className="text-4xl font-black">
                        100 kg
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        🌾 Wheat
                      </p>
                    </div>

                    <span className="text-5xl">
                      📦
                    </span>

                  </div>


                  <div className="my-6 h-px bg-gray-200" />


                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm text-gray-500">
                        Your order
                      </p>

                      <p className="text-3xl font-black text-green-700">
                        15 kg
                      </p>
                    </div>

                    <div className="text-3xl">
                      🛒
                    </div>

                  </div>


                  <div className="mt-5 h-4 overflow-hidden rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-green-600"
                      style={{ width: "15%" }}
                    />

                  </div>


                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>15 kg used</span>
                    <span>85 kg remaining</span>
                  </div>


                  <div className="mt-6 rounded-xl bg-green-50 p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-gray-500">
                          Updated inventory
                        </p>

                        <p className="text-2xl font-black text-green-700">
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

        </div>

      </section>


      {/* ================= PROCESSED YIELD ================= */}
      <section className="bg-[#f6faf3] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-3xl">

            <p className="font-bold uppercase tracking-widest text-green-700">
              Processed Yield
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Your produce, your choice.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Where processing is available, choose the form
              in which you want your produce.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ProcessCard
              icon="🌾"
              title="Wheat → Flour"
              text="Choose wheat grain or processed flour / atta."
            />

            <ProcessCard
              icon="🍚"
              title="Paddy → Rice"
              text="Choose processed rice for household use."
            />

            <ProcessCard
              icon="🫘"
              title="Pulses → Dal"
              text="Choose cleaned or processed pulses where available."
            />

            <ProcessCard
              icon="📦"
              title="Flexible quantity"
              text="Order only the quantity you currently need."
            />

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">

          <div>

            <p className="font-bold uppercase tracking-widest text-green-700">
              Our Farming Location
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Starting from Rasra, Ballia.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              BharatBhumi begins with a focus on connecting
              consumers with farmland in Rasra, Ballia,
              Uttar Pradesh.
            </p>

            <div className="mt-7 rounded-2xl bg-green-50 p-5">

              <p className="text-sm text-gray-500">
                Current location
              </p>

              <p className="mt-1 text-xl font-black text-green-800">
                📍 Rasra, Ballia, Uttar Pradesh
              </p>

            </div>

          </div>


          {/* Location visual */}
          <div className="rounded-3xl bg-green-900 p-5 shadow-xl">

            <div className="rounded-2xl bg-green-800 p-8 text-white">

              <div className="flex min-h-[280px] items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl">
                    📍
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    Rasra
                  </h3>

                  <p className="mt-2 text-green-200">
                    Ballia, Uttar Pradesh
                  </p>

                  <div className="mt-6 inline-flex rounded-full bg-green-700 px-5 py-2 text-sm font-bold">
                    BharatBhumi Farming Zone
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 px-5 py-20 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-5xl">
            🌾
          </div>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Ready to choose your Manda?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Explore available Mandas in Rasra, Ballia and
            start your farm-to-food journey.
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-green-800 shadow-lg hover:bg-green-50"
          >
            Explore Available Mandas →
          </Link>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-white-950 px-5 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white-700 text-2xl">
                  <img
  src="/bharatbhumi-logo.png"
  alt="BharatBhumi"
  className="h-12 w-auto object-contain"
/>
                </div>
                <div>
                  <p className="text-xl font-black">
                    BharatBhumi
                  </p>
                  <p className="text-xs text-gray-400">
                    Your farm. Your food.
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                Connecting people, farmland, farmers and food
                through a transparent farm-to-consumer system.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Quick Links
              </h3>
              <div className="mt-4 space-y-3 text-sm text-gray-400">
                <Link
                  href="/"
                  className="block hover:text-white"
                >
                  Home
                </Link>
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
                BharatBhumi
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                📍 Rasra, Ballia
                <br />
                Uttar Pradesh, India
              </p>
              <p className="mt-5 text-sm font-semibold text-green-300">
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
/* =========================================================
   SMALL REUSABLE COMPONENTS
   ========================================================= */
function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
        {icon}
      </div>
      <div>
        <p className="font-bold text-gray-900">
          {title}
        </p>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-4xl">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {text}
      </p>
    </div>
  );
}
function Step({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
          {icon}
        </div>
        <span className="text-sm font-black text-green-700">
          {number}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">
        {text}
      </p>
    </div>
  );
}
function ProcessCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-5xl">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {text}
      </p>
    </div>
  );
}