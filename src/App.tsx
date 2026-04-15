import { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Heart, 
  Bell, 
  ChevronRight,
  Star,
  Flame,
  Clock,
  TrendingUp,
  Gift,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Home,
  Shirt,
  Footprints,
  Baby,
  Dumbbell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Product data
const products = [
  { id: 1, name: 'Wireless Bluetooth Earbuds Pro', price: 2499, originalPrice: 4999, discount: 50, rating: 4.8, reviews: 2341, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', sold: 89 },
  { id: 2, name: 'Smart Watch Series 7', price: 8999, originalPrice: 14999, discount: 40, rating: 4.6, reviews: 1856, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', sold: 156 },
  { id: 3, name: 'Portable Power Bank 20000mAh', price: 1899, originalPrice: 3499, discount: 46, rating: 4.7, reviews: 3421, image: 'https://images.unsplash.com/photo-1609592424308-64664e2e0b2b?w=400&h=400&fit=crop', sold: 234 },
  { id: 4, name: 'Gaming Mechanical Keyboard RGB', price: 4599, originalPrice: 7999, discount: 42, rating: 4.9, reviews: 987, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop', sold: 67 },
  { id: 5, name: 'Wireless Gaming Mouse', price: 1999, originalPrice: 3999, discount: 50, rating: 4.5, reviews: 2156, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', sold: 189 },
  { id: 6, name: 'LED Desk Lamp with USB Charging', price: 1299, originalPrice: 2499, discount: 48, rating: 4.4, reviews: 876, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop', sold: 145 },
  { id: 7, name: 'Bluetooth Speaker Waterproof', price: 2999, originalPrice: 5499, discount: 45, rating: 4.7, reviews: 1543, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', sold: 98 },
  { id: 8, name: 'Phone Holder for Car Dashboard', price: 599, originalPrice: 1299, discount: 54, rating: 4.3, reviews: 4532, image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400&h=400&fit=crop', sold: 567 },
];

const categories = [
  { name: 'Mobiles', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Laptops', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
  { name: 'Audio', icon: Headphones, color: 'bg-pink-100 text-pink-600' },
  { name: 'Watches', icon: Watch, color: 'bg-green-100 text-green-600' },
  { name: 'Cameras', icon: Camera, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-red-100 text-red-600' },
  { name: 'Home', icon: Home, color: 'bg-orange-100 text-orange-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Shoes', icon: Footprints, color: 'bg-teal-100 text-teal-600' },
  { name: 'Kids', icon: Baby, color: 'bg-rose-100 text-rose-600' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Gifts', icon: Gift, color: 'bg-amber-100 text-amber-600' },
];

const flashProducts = [
  { id: 101, name: 'iPhone 15 Pro Case', price: 799, originalPrice: 1999, discount: 60, image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=300&h=300&fit=crop', sold: 78 },
  { id: 102, name: 'AirPods Case Cover', price: 399, originalPrice: 999, discount: 60, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop', sold: 234 },
  { id: 103, name: 'USB-C Cable 2M', price: 299, originalPrice: 799, discount: 63, image: 'https://images.unsplash.com/photo-1625153669622-870ed903eb6e?w=300&h=300&fit=crop', sold: 456 },
  { id: 104, name: 'Screen Protector Pack', price: 199, originalPrice: 599, discount: 67, image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop', sold: 789 },
  { id: 105, name: 'Phone Ring Holder', price: 149, originalPrice: 499, discount: 70, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop', sold: 567 },
  { id: 106, name: 'Car Charger Fast', price: 499, originalPrice: 1299, discount: 62, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c43e64e?w=300&h=300&fit=crop', sold: 345 },
];

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 15 });
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 32, seconds: 15 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className="daraz-orange text-white text-center py-2 text-sm">
        <span className="font-medium">Welcome to ProductHub!</span> Discover amazing products at unbeatable prices
      </div>

      {/* Header */}
      <header className="daraz-orange sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-2">
                <ShoppingCart className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-white text-2xl font-bold hidden sm:block">ProductHub</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2.5 rounded-sm border-none focus:ring-2 focus:ring-white/50"
                />
                <button className="absolute right-0 top-0 h-full px-4 daraz-orange-light rounded-r-sm">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-white hover:text-orange-100 transition">
                <ShoppingCart className="w-6 h-6" />
                <span className="hidden md:block">Cart</span>
              </button>
              <button className="flex items-center gap-1 text-white hover:text-orange-100 transition">
                <Heart className="w-6 h-6" />
                <span className="hidden md:block">Wishlist</span>
              </button>
              <button className="flex items-center gap-1 text-white hover:text-orange-100 transition">
                <User className="w-6 h-6" />
                <span className="hidden md:block">Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-6 py-2 text-white text-sm overflow-x-auto">
              <button className="flex items-center gap-1 font-medium whitespace-nowrap hover:text-orange-100">
                <Menu className="w-4 h-4" /> Categories
              </button>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">Flash Sale</a>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">Trending</a>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">New Arrivals</a>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">Best Sellers</a>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">Brands</a>
              <a href="#" className="whitespace-nowrap hover:text-orange-100">Deals</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="px-8 md:px-12">
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
                <Flame className="w-3 h-3 mr-1" /> Hot Deal
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Mega Sale Up To<br />
                <span className="text-orange-400">70% OFF</span>
              </h1>
              <p className="text-white/80 mb-6 max-w-md">
                Discover the latest gadgets and accessories at unbeatable prices. Limited time offer!
              </p>
              <Button className="daraz-orange hover:daraz-orange-light text-white px-8">
                Explore Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flash-sale-badge px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Flame className="w-6 h-6" /> Flash Sale
                </h2>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Ending in:</span>
                  <div className="flex gap-1">
                    <span className="countdown-box">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-white font-bold">:</span>
                    <span className="countdown-box">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-white font-bold">:</span>
                    <span className="countdown-box">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
              <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-0">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {flashProducts.map(product => (
                <div key={product.id} className="product-card flex-shrink-0 w-[160px] md:w-[180px] bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-[140px] md:h-[160px] object-cover" />
                    <Badge className="absolute top-2 left-2 discount-badge text-white border-0">
                      -{product.discount}%
                    </Badge>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
                    >
                      <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold daraz-text-orange">Rs. {product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs price-strike">Rs. {product.originalPrice}</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-orange-500 h-1.5 rounded-full" 
                          style={{ width: `${(product.sold / 1000) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{product.sold} sold</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 daraz-text-orange" /> Browse Categories
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="category-item flex flex-col items-center gap-2 cursor-pointer">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm text-gray-700 text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden h-[180px] cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&h=300&fit=crop" 
              alt="Electronics" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent flex items-center px-6">
              <div>
                <Badge className="mb-2 bg-yellow-500 text-black">New</Badge>
                <h3 className="text-xl font-bold text-white">Latest Electronics</h3>
                <p className="text-white/80 text-sm mt-1">Up to 40% off</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[180px] cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop" 
              alt="Fashion" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-transparent flex items-center px-6">
              <div>
                <Badge className="mb-2 bg-pink-500">Trending</Badge>
                <h3 className="text-xl font-bold text-white">Fashion Collection</h3>
                <p className="text-white/80 text-sm mt-1">Starting from Rs. 499</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Star className="w-5 h-5 daraz-text-orange fill-orange-500" /> Just For You
            </h2>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <div key={product.id} className="product-card bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-[180px] md:h-[200px] object-cover" />
                  <Badge className="absolute top-2 left-2 discount-badge text-white border-0">
                    -{product.discount}%
                  </Badge>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold daraz-text-orange">Rs. {product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm price-strike">Rs. {product.originalPrice}</span>
                    <span className="text-xs text-green-600 font-medium">-{product.discount}%</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button className="flex-1 daraz-orange hover:daraz-orange-light text-white text-sm">
                      <ShoppingCart className="w-4 h-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 daraz-text-orange" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Great Deals</h4>
              <p className="text-xs text-gray-500">Daily new offers</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Trending</h4>
              <p className="text-xs text-gray-500">Popular products</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Top Rated</h4>
              <p className="text-xs text-gray-500">Best quality items</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Notifications</h4>
              <p className="text-xs text-gray-500">Price drop alerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="daraz-orange rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-6">Get the latest deals and updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border-none"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">How to Buy</a></li>
                <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">About ProductHub</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Payment Methods</h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded px-3 py-1 text-gray-900 text-xs font-medium">Visa</div>
                <div className="bg-white rounded px-3 py-1 text-gray-900 text-xs font-medium">MasterCard</div>
                <div className="bg-white rounded px-3 py-1 text-gray-900 text-xs font-medium">JazzCash</div>
                <div className="bg-white rounded px-3 py-1 text-gray-900 text-xs font-medium">EasyPaisa</div>
                <div className="bg-white rounded px-3 py-1 text-gray-900 text-xs font-medium">COD</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="text-sm font-bold">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="text-sm font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 ProductHub. All rights reserved. | Made with love for product discovery</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
