"use client";

import { useState } from "react";
import Link from "next/link";

type Manda = {
  id: number;
  crop: string;
  status: "Available" | "Reserved";
  price: number;
};

const MANDAS: Manda[] = [
  { id: 1, crop: "Wheat", status: "Available", price: 5100 },
  { id: 2, crop: "Wheat", status: "Available", price: 5100 },
  { id: 3, crop: "Rice", status: "Available", price: 5100 },
  { id: 4, crop: "Vegetables", status: "Available", price: 5100 },
  { id: 5, crop: "Wheat", status: "Available", price: 5100 },
  { id: 6, crop: "Rice", status: "Reserved", price: 5100 },
  { id: 7, crop: "Vegetables", status: "Available", price: 5100 },
  { id: 8, crop: "Wheat", status: "Available", price: 5100 },
  { id: 9, crop: "Rice", status: "Available", price: 5100 },
  { id: 10, crop: "Wheat", status: "Available", price: 5100 },
  { id: 11, crop: "Vegetables", status: "Available", price: 5100 },
  { id: 12, crop: "Wheat", status: "Available", price: 5100 },
  { id: 13, crop: "Rice", status: "Available", price: 5100 },
  { id: 14, crop: "Vegetables", status: "Available", price: 5100 },
  { id: 15, crop: "Wheat", status: "Available", price: 5100 },
  { id: 16, crop: "Rice", status: "Available", price: 5100 }
];

export default function ExplorePage() {
  const [selected, setSelected] = useState<Manda | null>(null);
  const [filter, setFilter] = useState("All");

  const crops = ["All", "Wheat", "Rice", "Vegetables"];

  const filteredMandas =
    filter === "All"
      ? MANDAS
      : MANDAS.filter((manda) => manda.crop === filter);

  return (
    <main className="explore-page">
      <nav className="navbar">
        <div className="container nav-inner">
          <Link href="/" className="brand">
            🌾 Bharat<span>Bhumi</span>
          </Link>

          <Link href="/" className="back-link">
            ← Home
          </Link>
        </div>
      </nav>

      <section className="explore-header">
        <div className="container">
          <span>GEO-MAPPED FARM</span>
          <h1>Choose your Manda.</h1>
          <p>
            One farm. One Manda. One six-month farming journey.
          </p>
        </div>
      </section>

      <section className="explore-content container">
        <div className="farm-info">
          <div>
            <small>FARM LOCATION</small>
            <h2>📍 Lucknow, Uttar Pradesh</h2>
          </div>

          <div>
            <small>FARM SIZE</small>
            <h2>1 Acre / 16 Mandas</h2>
          </div>

          <div>
            <small>MANDA SIZE</small>
            <h2>250 m²</h2>
          </div>
        </div>

        <div className="filter-bar">
          <div>
            <strong>Available Mandas</strong>
            <span> Select your preferred crop</span>
          </div>

          <div className="crop-filters">
            {crops.map((crop) => (
              <button
                key={crop}
                onClick={() => setFilter(crop)}
                className={filter === crop ? "filter-active" : ""}
              >
                {crop}
              </button>
            ))}
          </div>
        </div>

        <div className="manda-layout">
          <div className="farm-map-large">
            <div className="map-title">
              <span>LIVE FARM MAP</span>
              <span>16 MANDAS</span>
            </div>

            <div className="manda-grid">
              {filteredMandas.map((manda) => (
                <button
                  key={manda.id}
                  onClick={() => setSelected(manda)}
                  className={`manda-cell ${
                    manda.status === "Reserved"
                      ? "manda-reserved"
                      : ""
                  }`}
                >
                  <span>M{String(manda.id).padStart(2, "0")}</span>
                  <small>{manda.crop}</small>
                  <em>
                    {manda.status === "Available"
                      ? "Available"
                      : "Reserved"}
                  </em>
                </button>
              ))}
            </div>

            <div className="map-legend">
              <span>
                <i className="legend-available" /> Available
              </span>
              <span>
                <i className="legend-reserved" /> Reserved
              </span>
            </div>
          </div>

          <div className="manda-side">
            {selected ? (
              <div className="selected-card">
                <span className="selected-label">
                  SELECTED MANDA
                </span>

                <h2>
                  Manda {String(selected.id).padStart(2, "0")}
                </h2>

                <div className="selected-crop">
                  🌱 {selected.crop}
                </div>

                <div className="details">
                  <div>
                    <small>AREA</small>
                    <strong>250 m²</strong>
                  </div>

                  <div>
                    <small>CYCLE</small>
                    <strong>6 Months</strong>
                  </div>

                  <div>
                    <small>LOCATION</small>
                    <strong>Lucknow</strong>
                  </div>
                </div>

                <div className="price-box">
                  <small>SUBSCRIPTION</small>
                  <strong>₹{selected.price.toLocaleString()}</strong>
                  <span>for 6 months</span>
                </div>

                {selected.status === "Available" ? (
                  <button className="subscribe-button">
                    Subscribe to this Manda →
                  </button>
                ) : (
                  <button className="reserved-button" disabled>
                    Currently Reserved
                  </button>
                )}

                <button
                  className="close-selection"
                  onClick={() => setSelected(null)}
                >
                  Choose another Manda
                </button>
              </div>
            ) : (
              <div className="empty-selection">
                <div className="big-pin">📍</div>
                <h2>Select a Manda</h2>
                <p>
                  Click any available Manda on the farm map to see
                  its details.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="explore-bottom">
        <div className="container">
          <h2>Your farm. Wherever you are.</h2>
          <p>
            BharatBhumi gives urban consumers a direct connection to
            farmland through geo-mapped micro-plots managed by local
            farmers.
          </p>
        </div>
      </section>
    </main>
  );
}