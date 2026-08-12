'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MANDAS_DATA, CROP_TYPES } from "@/lib/constants";
import { Manda } from '@/types/index';

export default function ExplorePage() {
  const [mandas, setMandas] = useState<Manda[]>(MANDAS_DATA);
  const [selectedCrop, setSelectedCrop] = useState<string>('all');
  const [selectedManda, setSelectedManda] = useState<Manda | null>(null);
  const [view, setView] = useState<'grid' | 'map'>('grid');

  useEffect(() => {
    if (selectedCrop === 'all') {
      setMandas(MANDAS_DATA);
    } else {
      setMandas(MANDAS_DATA.filter(m => m.crop === selectedCrop));
    }
  }, [selectedCrop]);

  return (
    <div className="min-h-screen bg-bharati-light">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-bharati-green">
              🌾 BharatBhumi
            </Link>
            <div className="space-x-4">
              <Link href="/auth/login" className="text-bharati-green font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-bharati-green to-bharati-light-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Explore Available Mandas</h1>
          <p className="text-lg">Choose your geo-mapped micro-plot and start your farming journey</p>
        </div>
      </section>

      {/* Controls */}
      <div className="bg-white shadow sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Filter by Crop:</label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharati-green"
              >
                <option value="all">All Crops ({MANDAS_DATA.length})</option>
                {CROP_TYPES.map(crop => {
                  const count = MANDAS_DATA.filter(m => m.crop === crop).length;
                  return (
                    <option key={crop} value={crop}>
                      {crop} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView('grid')}
                className={`px-4 py-2 rounded-lg font-medium ${view === 'grid' ? 'bg-bharati-green text-white' : 'bg-gray-200'}`}
              >
                📊 Grid
              </button>
              <button
                onClick={() => setView('map')}
                className={`px-4 py-2 rounded-lg font-medium ${view === 'map' ? 'bg-bharati-green text-white' : 'bg-gray-200'}`}
              >
                📍 Map
              </button>
            </div>
            <div className="text-gray-600">Showing {mandas.length} Manda{mandas.length !== 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mandas.map(manda => (
            <div
              key={manda.id}
              onClick={() => setSelectedManda(manda)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
            >
              <div className="bg-gradient-to-r from-bharati-green to-bharati-light-green text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{manda.manda_number}</h3>
                    <p className="text-sm">📍 {manda.location}</p>
                  </div>
                  <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                    Available
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xl font-bold text-bharati-green mb-2">{manda.crop}</p>
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Area</p>
                    <p className="font-bold">{manda.area_sqm} sq.m</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Cycle</p>
                    <p className="font-bold">{manda.cultivation_cycle_months}M</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{manda.description}</p>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-bharati-green">₹{manda.price_inr.toLocaleString()}</p>
                  <button className="w-full mt-2 bg-bharati-green text-white py-2 rounded-lg font-bold hover:bg-bharati-dark-green transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedManda && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedManda(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-bharati-green text-white p-6 flex justify-between items-center sticky top-0">
              <div>
                <h2 className="text-2xl font-bold">{selectedManda.manda_number}</h2>
                <p className="text-sm">📍 {selectedManda.location}</p>
              </div>
              <button onClick={() => setSelectedManda(null)} className="text-2xl">✕</button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-bharati-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Area</p>
                  <p className="text-xl font-bold text-bharati-green">{selectedManda.area_sqm} sq.m</p>
                </div>
                <div className="bg-bharati-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Crop</p>
                  <p className="text-xl font-bold text-bharati-green">{selectedManda.crop}</p>
                </div>
                <div className="bg-bharati-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Cycle</p>
                  <p className="text-xl font-bold text-bharati-green">{selectedManda.cultivation_cycle_months}M</p>
                </div>
                <div className="bg-bharati-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="text-xl font-bold text-bharati-green capitalize">{selectedManda.status}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-bharati-green mb-2">About This Manda</h3>
                <p className="text-gray-700">{selectedManda.description}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-bharati-green mb-3">Location Coordinates</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Latitude</p>
                    <p className="font-mono font-bold">{selectedManda.latitude}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Longitude</p>
                    <p className="font-mono font-bold">{selectedManda.longitude}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm">Subscription Price</p>
                    <p className="text-4xl font-bold text-bharati-green">₹{selectedManda.price_inr.toLocaleString()}</p>
                    <p className="text-gray-600 text-sm">For {selectedManda.cultivation_cycle_months} months</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 p-6 border-t flex gap-4">
              <button
                onClick={() => setSelectedManda(null)}
                className="flex-1 px-6 py-3 border-2 border-bharati-green text-bharati-green rounded-lg font-bold"
              >
                Close
              </button>
              <Link
                href={`/checkout?manda=${selectedManda.id}`}
                className="flex-1 px-6 py-3 bg-bharati-green text-white rounded-lg font-bold text-center"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>🌾 BharatBhumi - Connecting people, farmland and food.</p>
        </div>
      </footer>
    </div>
  );
}