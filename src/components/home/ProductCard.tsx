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
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-300 hover:shadow-blue-100/40 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className={clsx(
              'absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full',
              badgeStyles[product.badge]
            )}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            -{discount}%
          </span>
        )}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 hover:scale-110">
          <Heart size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wide">{product.brand} · {product.model}</div>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={clsx(
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                )}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
