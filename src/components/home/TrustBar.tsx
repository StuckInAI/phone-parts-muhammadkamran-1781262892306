import { ShieldCheck, Truck, RefreshCw, Headphones, CreditCard, Package } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '1-Year Warranty',
    description: 'All parts backed by our quality guarantee',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free on all orders over $50',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Hassle-free returns, no questions asked',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Technical help from repair professionals',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'SSL encrypted, all major cards accepted',
  },
  {
    icon: Package,
    title: 'Safe Packaging',
    description: 'Parts packed to prevent damage in transit',
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group hover:bg-blue-100 transition-colors">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
