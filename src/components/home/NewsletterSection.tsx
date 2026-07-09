import { useState } from 'react';
import { Mail, CheckCircle, Zap } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail size={28} className="text-blue-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto font-light">
          Get exclusive deals, repair tips, and updates about new parts delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-3 text-green-700 bg-green-50 border border-green-200 rounded-2xl py-6 px-8">
            <CheckCircle size={26} className="text-green-600" />
            <div>
              <div className="font-semibold">You're all set!</div>
              <div className="text-sm text-green-600">Check your email for special offers</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm bg-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Zap size={16} />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-5 font-medium">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
