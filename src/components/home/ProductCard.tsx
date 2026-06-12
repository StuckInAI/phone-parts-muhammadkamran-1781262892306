import { ShoppingCart, Star, Heart } from 'lucide-react';
import clsx from 'clsx';
import type { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const badgeStyles: Record<string, string> = {
  new: 'bg-green-100 text-green-700',
  sale: 'bg-red-100 text-red-600',
  popular: 'bg-amber-100 text-amber-700',
};

const badgeLabels: Record<string, string> = {
  new: 'New',
  sale: 'Sale',
  popular: '🔥 Popular',
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand/20 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className={clsx(
              'absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full',
              badgeStyles[product.badge]
            )}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
          <Heart size={14} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-xs text-brand font-medium mb-1">{product.brand} · {product.model}</div>
        <h3 className="text-sm font-semibold text-dark leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={clsx(
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-200'
                )}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-xs text-slate-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-dark">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-sm text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart size={13} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
