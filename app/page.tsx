import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            🌾 Bharat<span>Bhumi</span>
          </div>

          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#why">Why BharatBhumi</a>
            <Link href="/explore" className="nav-button">
              Explore Mandas
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              🌱 A new way to connect with your farm
            </div>

            <h1>
              Your Farm.
              <br />
              Your Food.
              <br />
              <span>Our Responsibility.</span>
            </h1>

            <p>
              Subscribe to your own geo-mapped micro-plot, called a Manda.
              Local farmers cultivate it responsibly while BharatBhumi manages
              the journey from farm to you.
            </p>

            <div className="hero-actions">
              <Link href="/explore" className="primary-button">
                Explore Available Mandas →
              </Link>

              <a href="#how-it-works" className="secondary-button">
                How it works
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>250 m²</strong>
                <span>Per Manda</span>
              </div>

              <div>
                <strong>6 Months</strong>
                <span>Farm Cycle</span>
              </div>

              <div>
                <strong>₹5,100</strong>
                <span>Subscription</span>
              </div>
            </div>
          </div>

          <div className="hero-farm">
            <div className="farm-card">
              <div className="farm-top">
                <span>LIVE FARM</span>
                <span className="live-dot">● Available</span>
              </div>

              <div className="farm-map">
                <div className="map-label">BHARATBHUMI FARM</div>

                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    className="mini-manda"
                    key={index}
                  >
                    <span>{index + 1}</span>
                  </div>
                ))}
              </div>

              <div className="farm-bottom">
                <div>
                  <small>Farm</small>
                  <strong>Lucknow, Uttar Pradesh</strong>
                </div>

                <div>
                  <small>Mandas</small>
                  <strong>16 available</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <strong>01</strong>
            <p>Choose your Manda</p>
          </div>

          <div>
            <strong>02</strong>
            <p>Select your crop</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Farmer cultivates it</p>
          </div>

          <div>
            <strong>04</strong>
            <p>Receive your produce</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Farming made personal.</h2>
            <p>
              You don't need to own farmland to have a connection with one.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Choose your Manda</h3>
              <p>
                Explore geo-mapped micro-plots and select the farm space you
                want to subscribe to.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Choose your crop</h3>
              <p>
                Select from crops suitable for the season and your farming
                cycle.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>We manage the farm</h3>
              <p>
                Our local farming partners cultivate and maintain your Manda.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Stay connected</h3>
              <p>
                Track your farm journey and receive your produce through the
                BharatBhumi system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="why-section">
        <div className="container why-grid">
          <div>
            <span className="section-tag">WHY BHARATBHUMI</span>

            <h2>
              From a distant city to a farm you can call yours.
            </h2>

            <p>
              BharatBhumi bridges the gap between urban consumers and
              agricultural land by turning farmland into accessible,
              geo-mapped micro-plots.
            </p>
          </div>

          <div className="feature-list">
            <div>
              <span>📍</span>
              <div>
                <h3>Geo-mapped Mandas</h3>
                <p>Know exactly where your farm is located.</p>
              </div>
            </div>

            <div>
              <span>🌱</span>
              <div>
                <h3>Responsible cultivation</h3>
                <p>Local farmers manage cultivation on your behalf.</p>
              </div>
            </div>

            <div>
              <span>📦</span>
              <div>
                <h3>Farm-to-consumer inventory</h3>
                <p>Produce can be planned, collected and distributed through our inventory model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <span>YOUR FARM IS WAITING</span>
          <h2>Start with your own Manda.</h2>
          <p>
            Choose your plot, choose your crop, and let BharatBhumi take
            responsibility for the journey.
          </p>

          <Link href="/explore" className="primary-button">
            Explore Mandas →
          </Link>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>🌾 BharatBhumi</strong>
            <p>Your Farm. Your Food. Our Responsibility.</p>
          </div>

          <p>© 2026 BharatBhumi</p>
        </div>
      </footer>
    </main>
  );
}
<img
  src="/bharatbhumi-logo.jpg"
  alt="BharatBhumi"
  className="w-40 h-auto"
/>
<div className="flex items-center">
  <img
    src="/bharatbhumi-logo.jpg"
    alt="BharatBhumi"
    className="w-16 h-16 object-contain"
  />
  <span className="ml-3 text-2xl font-bold text-green-800">
    BharatBhumi
  </span>
</div>