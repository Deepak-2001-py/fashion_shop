import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProductGrid } from './components/features/products/ProductGrid';
import { ProductFilters } from './components/features/products/ProductFilters';
import { Product } from './types';

// Sample products data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Summer Dress',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
    category: "Women's Fashion",
    description: 'A beautiful summer dress perfect for warm days.'
  },
  {
    id: '2',
    name: 'Casual Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
    category: "Men's Fashion",
    description: 'Comfortable casual shirt for everyday wear.'
  },
  {
    id: '3',
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2',
    category: 'Outerwear',
    description: 'Classic denim jacket that never goes out of style.'
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'Shoes',
    description: 'High-performance running shoes for athletes.'
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const categories = Array.from(new Set(sampleProducts.map(p => p.category)));

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>
          <div className="col-span-3">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;