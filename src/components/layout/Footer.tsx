import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-white">
                Parts<span className="text-brand">Pro</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted source for premium mobile phone parts. Quality guaranteed, fast shipping, and expert support for repair professionals and DIY enthusiasts.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-brand flex items-center justify-center transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              {['Screens & Displays', 'Batteries', 'Camera Modules', 'Charging Ports', 'Back Covers', 'Repair Tools', 'New Arrivals', 'Sale Items'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand transition-colors flex items-center gap-1 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {['Repair Guides', 'Compatibility Checker', 'Warranty Policy', 'Returns & Refunds', 'Shipping Info', 'Track Your Order', 'Wholesale Account', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand transition-colors flex items-center gap-1 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-brand flex-shrink-0" />
                <span>1-800-PARTS-PRO<br />Mon–Fri 9am–6pm EST</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-brand flex-shrink-0" />
                <span>support@partspro.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-brand flex-shrink-0" />
                <span>123 Tech Avenue<br />San Jose, CA 95110</span>
              </li>
            </ul>
            <div>
              <p className="text-xs font-semibold text-white mb-2">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-xs px-3 py-2 bg-slate-700 border border-slate-600 rounded-l-lg focus:outline-none focus:border-brand text-white placeholder:text-slate-400"
                />
                <button className="bg-brand hover:bg-brand-dark text-white px-3 py-2 rounded-r-lg transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2025 PartsPro. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
