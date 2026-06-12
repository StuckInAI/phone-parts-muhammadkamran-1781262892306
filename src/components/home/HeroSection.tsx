import { ArrowRight, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 text-brand-light rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              Trusted by 50,000+ repair professionals
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Mobile
              <span className="block text-brand">Phone Parts</span>
              at Wholesale Prices
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
              Shop 1,600+ genuine parts for iPhone, Samsung, Google Pixel, and more. Fast delivery, quality guarantee, and expert support for every repair.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
              >
                Shop Now
                <ArrowRight size={16} />
              </a>
              <a
                href="#wholesale"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
              >
                Wholesale Pricing
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: ShieldCheck, label: '1-Year Warranty' },
                { icon: Truck, label: 'Free Shipping $50+' },
                { icon: RefreshCw, label: '30-Day Returns' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon size={16} className="text-brand" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '1,600+', label: 'Parts in Stock', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
              { value: '50K+', label: 'Happy Customers', color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
              { value: '4.8★', label: 'Average Rating', color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30' },
              { value: '24hr', label: 'Fast Dispatch', color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.color} border rounded-2xl p-6 backdrop-blur-sm`}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand logos */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-slate-400 text-xs text-center mb-4 uppercase tracking-widest">Compatible parts for all major brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei', 'Motorola', 'Sony'].map((brand) => (
              <span key={brand} className="text-slate-400 font-semibold text-sm hover:text-white transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
