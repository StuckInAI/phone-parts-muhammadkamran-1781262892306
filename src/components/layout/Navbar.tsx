import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Phone, Zap } from 'lucide-react';
import clsx from 'clsx';

type NavbarProps = {
  cartCount: number;
  onCartOpen: () => void;
};

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Shop', href: '#shop' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#about' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/40 shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Zap size={13} className="text-blue-400" />
            <span className="font-medium">Free shipping on orders over $50</span>
          </span>
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2 text-gray-300">
              <Phone size={13} />
              <span>1-800-PARTS-PRO</span>
            </span>
            <span className="text-gray-400">Mon–Fri 9am–6pm EST</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-base">PP</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900 leading-tight">
                PartsPro
              </div>
              <div className="text-xs text-gray-500 font-medium">Premium Parts</div>
            </div>
          </a>

          {/* Search */}
          <div className="flex-1 max-w-md hidden lg:block">
            <div className="relative">
              <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search parts, models..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-gray-50 text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <ShoppingCart size={17} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 pb-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 space-y-3">
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search parts..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-gray-50"
            />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2.5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
