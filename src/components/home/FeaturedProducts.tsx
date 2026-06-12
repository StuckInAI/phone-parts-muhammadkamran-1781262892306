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
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">Featured Parts</h2>
            <p className="text-slate-500">Best-selling components trusted by professionals</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-brand text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-brand-light hover:text-brand'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No products in this category yet.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
