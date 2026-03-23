'use client';

import { useState } from 'react';

interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  type: string;
  price: number;
  tokenPrice: number;
  totalTokens: number;
  investorCount: number;
  yield: number;
  apy: number;
  image: string;
}

interface Investment {
  id: string;
  propertyId: string;
  propertyName: string;
  tokens: number;
  investment: string;
  yearlyIncome: string;
  status: string;
}

const properties: Property[] = [
  {
    id: '1',
    name: 'Manhattan Office Tower',
    address: '350 5th Ave, New York',
    city: 'New York',
    country: 'USA',
    type: 'Commercial',
    price: 125000000,
    tokenPrice: 1250,
    totalTokens: 100000,
    investorCount: 2450,
    yield: 4.5,
    apy: 4.8,
    image: '🏢',
  },
  {
    id: '2',
    name: 'London Luxury Condo',
    address: '1 Knightsbridge',
    city: 'London',
    country: 'UK',
    type: 'Residential',
    price: 85000000,
    tokenPrice: 850,
    totalTokens: 100000,
    investorCount: 3200,
    yield: 5.2,
    apy: 5.5,
    image: '🏠',
  },
  {
    id: '3',
    name: 'Paris Cafe District',
    address: '12 Rue du Faubourg',
    city: 'Paris',
    country: 'France',
    type: 'Retail',
    price: 45000000,
    tokenPrice: 450,
    totalTokens: 100000,
    investorCount: 1800,
    yield: 6.8,
    apy: 7.2,
    image: '☕',
  },
  {
    id: '4',
    name: 'Tokyo Skyline View',
    address: 'Shibuya Crossing',
    city: 'Tokyo',
    country: 'Japan',
    type: 'Residential',
    price: 92000000,
    tokenPrice: 920,
    totalTokens: 100000,
    investorCount: 2800,
    yield: 4.9,
    apy: 5.2,
    image: '🗼',
  },
  {
    id: '5',
    name: 'Sydney Harbor Unit',
    address: 'Circular Quay',
    city: 'Sydney',
    country: 'Australia',
    type: 'Residential',
    price: 68000000,
    tokenPrice: 680,
    totalTokens: 100000,
    investorCount: 2100,
    yield: 5.8,
    apy: 6.1,
    image: '🌊',
  },
  {
    id: '6',
    name: 'Dubai Marina Penthouse',
    address: 'Downtown Dubai',
    city: 'Dubai',
    country: 'UAE',
    type: 'Residential',
    price: 150000000,
    tokenPrice: 1500,
    totalTokens: 100000,
    investorCount: 3100,
    yield: 7.5,
    apy: 8.0,
    image: '🏜️',
  },
];

const types = ['All', 'Residential', 'Commercial', 'Retail', 'Industrial'];

export default function Home() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = selectedType === 'All'
    ? properties
    : properties.filter(p => p.type === selectedType);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-blue-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Real Estate Tokenization</h1>
          <p className="text-gray-400 mt-2">Invest in premium properties with $10 minimum</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-blue-400 p-4 text-center">
            <div className="text-3xl font-black text-blue-400">$5.2B</div>
            <div className="text-sm text-gray-400">Properties</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">180K+</div>
            <div className="text-sm text-gray-400">Token Holders</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">5.7%</div>
            <div className="text-sm text-gray-400">Avg Yield</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">6</div>
            <div className="text-sm text-gray-400">Continents</div>
          </div>
        </section>

        {/* Types Filter */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedType === t
                    ? 'bg-blue-500 border-blue-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Properties Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-blue-400 ${
                selectedProperty?.id === property.id ? 'border-blue-400 bg-blue-900/20' : 'border-gray-700'
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center text-8xl">
                {property.image}
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-bold bg-blue-900/50 text-blue-400">
                    {property.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    property.yield >= 6 ? 'text-green-900 bg-green-400' : property.yield >= 5 ? 'text-yellow-900 bg-yellow-400' : 'text-gray-900 bg-gray-400'
                  }`}>
                    {property.yield}% yield
                  </span>
                </div>
                <h3 className="font-bold text-blue-400 mb-1">{property.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{property.address}</p>

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price</span>
                    <span className="font-bold">${(property.price / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Token</span>
                    <span className="font-bold">${property.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">APY</span>
                    <span className="font-bold text-green-400">{property.apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Investors</span>
                    <span className="font-bold">{property.investorCount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Property Details */}
        {selectedProperty && (
          <section className="bg-gray-900 border-4 border-blue-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-blue-400">{selectedProperty.name}</h2>
                <p className="text-sm text-gray-400">{selectedProperty.address}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedProperty.city}, {selectedProperty.country}
                </p>
              </div>
              <button
                onClick={() => setSelectedProperty(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Total Value</div>
                <div className="text-2xl font-bold">${(selectedProperty.price / 1000000).toFixed(1)}M</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Token Price</div>
                <div className="text-2xl font-bold">${selectedProperty.tokenPrice}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Investors</div>
                <div className="text-2xl font-bold">{selectedProperty.investorCount.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">APY</div>
                <div className="text-2xl font-bold text-green-400">{selectedProperty.apy}%</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Gross Yield</div>
                <div className="text-xl font-bold">{selectedProperty.yield}%</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Investment Required</div>
                <div className="text-xl font-bold">${selectedProperty.tokenPrice}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Yearly Income</div>
                <div className="text-xl font-bold text-green-400">
                  ${(selectedProperty.price * (selectedProperty.yield / 100)).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-900/20 border border-blue-600">
                <div className="text-sm text-blue-400 mb-2">📋 Ownership Structure</div>
                <div className="text-sm text-gray-400">
                  Property divided into {selectedProperty.totalTokens.toLocaleString()} tokens
                </div>
                <div className="text-sm text-gray-400">
                  Each token = fractional ownership share
                </div>
              </div>
              <div className="p-4 bg-yellow-900/30 border border-yellow-600">
                <div className="text-sm text-yellow-400 mb-2">💡 How It Works</div>
                <div className="text-sm text-gray-400">
                  1. Buy tokens directly on blockchain
                </div>
                <div className="text-sm text-gray-400">
                  2. Receive passive rental income quarterly
                </div>
                <div className="text-sm text-gray-400">
                  3. Sell tokens anytime on secondary market
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-blue-500 text-white font-bold border-4 border-blue-400 hover:bg-blue-400">
              Invest in {selectedProperty.name}
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Real Estate Tokenization Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Property Purchase</h3>
              <p className="text-xs text-gray-400">Buy real property outright</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Tokenization</h3>
              <p className="text-xs text-gray-400">Split into digital tokens</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Distribute</h3>
              <p className="text-xs text-gray-400">Sell tokens to investors</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Yield Share</h3>
              <p className="text-xs text-gray-400">Collect rental income</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-900 border-4 border-green-400 p-6">
          <h2 className="text-xl font-black text-green-400 mb-4">Why Tokenize Real Estate?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">💵</div>
              <h3 className="font-bold text-blue-400 mb-2">Fractional Ownership</h3>
              <p className="text-sm text-gray-400">
                Invest $10 instead of millions. Low barrier to entry.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-blue-400 mb-2">Global Access</h3>
              <p className="text-sm text-gray-400">
                Invest from anywhere. No residency requirements.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">💸</div>
              <h3 className="font-bold text-blue-400 mb-2">Passive Income</h3>
              <p className="text-sm text-gray-400">
                Quarterly rental income distributed automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-blue-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
