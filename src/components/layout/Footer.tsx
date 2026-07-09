import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">PP</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">PartsPro</div>
                <div className="text-xs text-gray-400 font-medium">Premium Parts</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Trusted by 50,000+ professionals. Quality parts, fast shipping, and expert support.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">Shop</h3>
            <ul className="space-y-3 text-sm">
              {['All Products', 'Screens', 'Batteries', 'Cameras', 'Chargers', 'Tools'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">Support</h3>
            <ul className="space-y-3 text-sm">
              {['Help Center', 'Returns', 'Warranty', 'Shipping', 'Track Order', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">1-800-PARTS-PRO</div>
                  <div className="text-gray-500 text-xs">Mon–Fri 9am–6pm EST</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">support@partspro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">123 Tech Avenue<br />San Jose, CA 95110</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2025 PartsPro. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
