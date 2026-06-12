import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BannerSection from '@/components/home/BannerSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrustBar from '@/components/home/TrustBar';
import NewsletterSection from '@/components/home/NewsletterSection';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/hooks/useCart';
import { categories, products, testimonials } from '@/lib/data';

export default function HomePage() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        cartCount={totalItems}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <CategoryGrid categories={categories} />
        <FeaturedProducts products={products} onAddToCart={addToCart} />
        <BannerSection />
        <TestimonialsSection testimonials={testimonials} />
        <NewsletterSection />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}
