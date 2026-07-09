import { CheckCircle, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

export default function BannerSection() {
  return (
    <section id="wholesale" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Award size={14} className="text-blue-300" />
              For Business & Professionals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Wholesale Pricing<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">for Partners</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
              Access bulk pricing, priority stock, and dedicated support when you join our partner network.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Up to 40% off retail prices',
                'Priority access to new stock',
                'Dedicated account manager',
                'Net-30 payment terms available',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle size={18} className="text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Apply for Wholesale Account
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Users, value: '2,500+', label: 'Active Partners' },
              { icon: TrendingUp, value: '40%', label: 'Max Discount' },
              { icon: Award, value: '98%', label: 'Satisfaction' },
              { icon: CheckCircle, value: '24hr', label: 'Processing' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/15 transition-colors">
                <Icon size={26} className="text-blue-300 mb-4" />
                <div className="text-3xl font-bold mb-2">{value}</div>
                <div className="text-gray-300 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
