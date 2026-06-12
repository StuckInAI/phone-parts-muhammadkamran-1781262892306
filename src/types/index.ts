export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: 'new' | 'sale' | 'popular';
  inStock: boolean;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
