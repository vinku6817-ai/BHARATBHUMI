import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center">
            <img
              src="/bharatbhumi-logo.png"
              alt="BharatBhumi"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-gray-700">
              How It Works
            </a>

            <Link
              href="/explore"
              className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white"
            >
              Explore Mandas
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-green-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-4 font-semibold uppercase tracking-wide text-green-700">
              Geo-Mapped Micro Farming
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Your Farm.
              <br />
              Your Food.
              <br />
              <span className="text-green-700">
                Our Responsibility.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              BharatBhumi connects you with a geo-mapped micro-plot
              called a Manda. Choose your farm, select your crop,
              and let our local farmers take care of cultivation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/explore"
                className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white"
              >
                Explore Available Mandas →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-lg border border-green-700 px-6 py-3 font-semibold text-green-700"
              >
                How It Works
              </a>

            </div>
          </div>

          {/* FARM CARD */}
          <div className="rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Your Manda
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Available
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 rounded-xl bg-green-50 p-4">

              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-md border border-green-200 bg-green-100 text-sm font-semibold text-green-700"
                >
                  {index + 1}
                </div>
              ))}

            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-semibold text-gray-900">
                  Lucknow, UP
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Area
                </p>

                <p className="font-semibold text-gray-900">
                  250 sq.m
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Farm Cycle
                </p>

                <p className="font-semibold text-gray-900">
                  6 Months
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Subscription
                </p>

                <p className="font-semibold text-green-700">
                  ₹5,100
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold uppercase tracking-wide text-green-700">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Farming made personal.
            </h2>

            <p className="mt-4 text-gray-600">
              You don't need to own a large farm to have a
              connection with one.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl border p-6">
              <div className="text-3xl">📍</div>
              <h3 className="mt-4 text-xl font-bold">
                Choose your Manda
              </h3>
              <p className="mt-2 text-gray-600">
                Select your geo-mapped micro-plot.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <div className="text-3xl">🌱</div>
              <h3 className="mt-4 text-xl font-bold">
                Choose your crop
              </h3>
              <p className="mt-2 text-gray-600">
                Select the crop you want to cultivate.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <div className="text-3xl">👨‍🌾</div>
              <h3 className="mt-4 text-xl font-bold">
                Farmer cultivates
              </h3>
              <p className="mt-2 text-gray-600">
                Local farmers manage your Manda.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <div className="text-3xl">📦</div>
              <h3 className="mt-4 text-xl font-bold">
                Receive your produce
              </h3>
              <p className="mt-2 text-gray-600">
                Stay connected with your farm journey.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY BHARATBHUMI */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="font-semibold uppercase tracking-wide text-green-700">
                Why BharatBhumi
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                From a distant city to a farm you can call yours.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                BharatBhumi bridges the gap between urban consumers
                and farmland through geo-mapped micro-plots and
                responsible local farming.
              </p>

            </div>

            <div className="space-y-5">

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  📍 Geo-Mapped Mandas
                </h3>

                <p className="mt-2 text-gray-600">
                  Know exactly where your farm is located.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  🌱 Responsible Farming
                </h3>

                <p className="mt-2 text-gray-600">
                  Local farmers manage cultivation on your behalf.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  🌾 Farm-to-Consumer
                </h3>

                <p className="mt-2 text-gray-600">
                  Connect directly with the journey of your food.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-4xl font-bold">
            Start with your own Manda.
          </h2>

          <p className="mt-4 text-lg text-green-50">
            Choose your plot, choose your crop, and let
            BharatBhumi take responsibility.
          </p>

          <Link
            href="/explore"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-bold text-green-700"
          >
            Explore Mandas →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-8 text-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">

          <div>
            <p className="font-bold">
              🌾 BharatBhumi
            </p>

            <p className="text-sm text-gray-400">
              Your Farm. Your Food. Our Responsibility.
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