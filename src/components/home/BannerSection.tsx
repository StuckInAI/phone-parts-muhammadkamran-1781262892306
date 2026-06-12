import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

export default function BannerSection() {
  return (
    <section id="wholesale" className="py-16 bg-gradient-to-r from-brand to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wholesale Accounts for
              <span className="block">Repair Professionals</span>
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get access to bulk pricing, priority stock allocation, and dedicated support when you open a wholesale account.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Up to 40% off retail prices',
                'Priority access to new stock',
                'Dedicated account manager',
                'Net-30 payment terms available',
                'Monthly invoicing & reporting',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-blue-200 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-brand hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Apply for Wholesale Account
            </a>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, value: '2,500+', label: 'Wholesale Partners' },
              { icon: TrendingUp, value: '40%', label: 'Max Discount' },
              { icon: Award, value: '98%', label: 'Satisfaction Rate' },
              { icon: CheckCircle, value: '24hr', label: 'Order Processing' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <Icon size={24} className="text-blue-200 mb-3" />
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
