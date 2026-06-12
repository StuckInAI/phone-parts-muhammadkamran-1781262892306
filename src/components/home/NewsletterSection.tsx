import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

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
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Mail size={24} className="text-brand" />
        </div>
        <h2 className="text-3xl font-bold text-dark mb-3">Stay in the Loop</h2>
        <p className="text-slate-500 mb-8">
          Subscribe to get notified about new parts, exclusive deals, repair tips, and wholesale promotions.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 border border-green-200 rounded-2xl py-5 px-6">
            <CheckCircle size={22} />
            <span className="font-medium">You're subscribed! We'll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-sm"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-slate-400 mt-4">No spam, ever. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
