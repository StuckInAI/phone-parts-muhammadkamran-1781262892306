import type { Category } from '@/types';
import { ArrowRight } from 'lucide-react';

type CategoryGridProps = {
  categories: Category[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section id="categories" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Shop by Category</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Find the exact part you need from our comprehensive catalogue of mobile phone components.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#shop"
              className="group bg-white border border-slate-100 rounded-2xl p-5 hover:border-brand/30 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-dark text-sm mb-1 group-hover:text-brand transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 mb-2 leading-relaxed">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{cat.count} parts</span>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
