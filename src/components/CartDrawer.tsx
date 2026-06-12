import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import type { CartItem, Product } from '@/types';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  totalPrice: number;
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemove,
  onUpdateQuantity,
  totalPrice,
}: CartDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-brand" />
            <h2 className="font-bold text-dark">Your Cart</h2>
            {cartItems.length > 0 && (
              <span className="bg-brand text-white text-xs rounded-full px-2 py-0.5">
                {cartItems.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 gap-4">
              <ShoppingCart size={48} className="opacity-20" />
              <div>
                <p className="font-semibold">Your cart is empty</p>
                <p className="text-sm mt-1">Add some parts to get started!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(({ product, quantity }: { product: Product; quantity: number }) => (
                <div key={product.id} className="flex gap-3 items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-50 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-brand font-medium">{product.brand}</p>
                    <p className="text-sm font-semibold text-dark leading-tight line-clamp-2">{product.name}</p>
                    <p className="text-sm font-bold text-dark mt-1">${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm font-semibold w-5 text-center">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-100 px-5 py-5 space-y-3">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>Shipping</span>
              <span className="text-green-600">{totalPrice >= 50 ? 'Free' : '$4.99'}</span>
            </div>
            <div className="flex justify-between font-bold text-dark border-t border-slate-100 pt-3">
              <span>Total</span>
              <span>${(totalPrice >= 50 ? totalPrice : totalPrice + 4.99).toFixed(2)}</span>
            </div>
            <button className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-xl transition-colors">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full border border-slate-200 text-slate-600 font-medium py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
