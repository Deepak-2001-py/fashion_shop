import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Fashion Store</h1>
          </div>
          
          <div className="hidden sm:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search products..."
              />
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Cart (0)</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <User className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};