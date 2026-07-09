import type { Category } from '@/types';
import { ArrowRight } from 'lucide-react';

type CategoryGridProps = {
  categories: Category[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Find exactly what you need from our comprehensive selection of premium mobile parts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#shop"
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">{cat.count} items</span>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
