import React from 'react';
import { Button } from '../../common/Button';
import { Product } from '../../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};