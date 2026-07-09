import { useState } from 'react';
import ProductCard from '@/components/home/ProductCard';
import type { Product } from '@/types';

type FeaturedProductsProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const FILTERS = ['All', 'Screens', 'Batteries', 'Cameras', 'Tools'];

const filterMap: Record<string, string> = {
  All: '',
  Screens: 'screens',
  Batteries: 'batteries',
  Cameras: 'cameras',
  Tools: 'tools',
};

export default function FeaturedProducts({ products, onAddToCart }: FeaturedProductsProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === filterMap[activeFilter]);

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Featured Parts</h2>
            <p className="text-lg text-gray-600 font-light">Best-selling components trusted by professionals</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No products in this category yet.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}

        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
