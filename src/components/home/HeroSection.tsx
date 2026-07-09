import { ArrowRight, ShieldCheck, Truck, RefreshCw, Star, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-8">
              <CheckCircle2 size={16} />
              <span>Trusted by 50,000+ professionals</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Premium Mobile
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Phone Parts</span>
              Made Simple
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
              Access 1,600+ genuine parts for all major brands. Reliable quality, wholesale pricing, and expert support — everything repair professionals trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Start Shopping
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: '1-Year Warranty' },
                { icon: Truck, label: 'Free Shipping $50+' },
                { icon: RefreshCw, label: '30-Day Returns' },
                { icon: Star, label: '4.8★ Rating' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '1,600+', label: 'Parts in Stock', icon: '📦' },
              { value: '50K+', label: 'Happy Customers', icon: '⭐' },
              { value: '24hr', label: 'Fast Dispatch', icon: '⚡' },
              { value: '100%', label: 'Authentic Parts', icon: '✓' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                <div className="text-2xl mt-4">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand logos */}
      <div className="relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-xs text-gray-500 text-center mb-6 uppercase tracking-wider font-medium">Certified compatible with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {['Apple', 'Samsung', 'Google', 'OnePlus', 'Motorola', 'Sony'].map((brand) => (
              <span key={brand} className="text-gray-700 font-semibold text-sm hover:text-blue-600 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
