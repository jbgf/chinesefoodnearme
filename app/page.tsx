import { FilterProvider } from './contexts/FilterContext';
import FilterPanel from './components/FilterPanel';
import GoogleMap from './server-component/google-map';

export default function Home() {
  return (
    <FilterProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-base-200 to-base-300">
        <header className="sticky top-0 bg-base-100/95 backdrop-blur-sm shadow-sm z-50 h-16">
          <div className="container mx-auto h-full px-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Chinese Food Near Me
            </h1>
            {/* <div className="join">
              <input className="input input-bordered input-sm md:input-md join-item w-32 md:w-64" placeholder="Enter location..." />
              <button className="btn btn-primary btn-sm md:btn-md join-item">Search</button>
            </div>*/}
          </div>
        </header>
        <section className="relative h-[60vh] md:h-[70vh]">
          <div className="absolute inset-0">
            <GoogleMap />
          </div>
          <div className="absolute bottom-4 left-2 right-2 md:bottom-auto md:top-4 md:left-8 md:right-auto md:w-[400px]">
            <FilterPanel />
          </div>
        </section>
        <main>
          {/* Add a Quick Start Guide section */}
          <section className="bg-base-100 py-8" aria-label="Quick Start Guide">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                How to Find Your Perfect Chinese Restaurant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-base-200">
                  <div className="card-body">
                    <span className="text-4xl mb-2">1️⃣</span>
                    <h3 className="text-lg font-semibold">Enable Location</h3>
                    <p>Allow location access for the most accurate restaurant recommendations near you.</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body">
                    <span className="text-4xl mb-2">2️⃣</span>
                    <h3 className="text-lg font-semibold">Choose Cuisine</h3>
                    <p>Select your preferred Chinese cuisine style from our diverse options.</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body">
                    <span className="text-4xl mb-2">3️⃣</span>
                    <h3 className="text-lg font-semibold">Set Filters</h3>
                    <p>Refine your search by rating, distance, and current availability.</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body">
                    <span className="text-4xl mb-2">4️⃣</span>
                    <h3 className="text-lg font-semibold">Explore Details</h3>
                    <p>Click markers to view menus, photos, reviews, and contact information.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add Popular Cuisines Section */}
          <section className="bg-base-200 py-12" aria-label="Popular Chinese Cuisines">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Popular Chinese Cuisines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="card bg-base-100">
                  <div className="card-body">
                    <h3 className="card-title">Sichuan Cuisine 川菜</h3>
                    <p>Known for its bold flavors, spiciness, and numbing peppercorns. Famous dishes include Mapo Tofu and Kung Pao Chicken.</p>
                  </div>
                </article>
                <article className="card bg-base-100">
                  <div className="card-body">
                    <h3 className="card-title">Cantonese Cuisine 粤菜</h3>
                    <p>Features fresh ingredients and light seasoning. Famous for dim sum, BBQ pork, and seafood dishes.</p>
                  </div>
                </article>
                <article className="card bg-base-100">
                  <div className="card-body">
                    <h3 className="card-title">Hot Pot 火锅</h3>
                    <p>Interactive dining experience with simmering pot of broth. Choose from variety of meats, vegetables, and noodles.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Expand FAQ Section */}
          <section className="bg-base-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <details className="collapse bg-base-200">
                  <summary className="collapse-title text-lg font-medium">What payment methods are typically accepted?</summary>
                  <div className="collapse-content">
                    <p>Most restaurants accept major credit cards, debit cards, and cash. Some locations also accept digital payments like Apple Pay and Google Pay.</p>
                  </div>
                </details>
                <details className="collapse bg-base-200">
                  <summary className="collapse-title text-lg font-medium">Do restaurants offer delivery services?</summary>
                  <div className="collapse-content">
                    <p>Many restaurants partner with delivery services like DoorDash, Uber Eats, and Grubhub. Check individual restaurant listings for delivery options.</p>
                  </div>
                </details>
                <details className="collapse bg-base-200">
                  <summary className="collapse-title text-lg font-medium">How accurate are the wait times?</summary>
                  <div className="collapse-content">
                    <p>Wait times are updated in real-time based on current restaurant conditions and user reports. During peak hours, actual wait times may vary.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Add Tips Section */}
          <section className="bg-base-200 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Tips for Your Chinese Dining Experience</h2>
              <div className="prose max-w-3xl mx-auto">
                <ul className="space-y-4">
                  <li><strong>Family Style Dining:</strong> Chinese meals are traditionally served family-style. Consider ordering dishes to share with your group.</li>
                  <li><strong>Rice and Noodles:</strong> These are typically ordered separately from main dishes.</li>
                  <li><strong>Tea Etiquette:</strong> Many restaurants serve complimentary tea. Tap two fingers on the table to thank someone for pouring tea.</li>
                  <li><strong>Dietary Restrictions:</strong> Inform your server about any allergies or dietary restrictions, as many dishes may contain peanuts, shellfish, or other common allergens.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Enhanced Footer */}
          <footer className="bg-base-300 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-4">About Us</h3>
                  <p className="text-sm text-base-content/70">Helping you discover authentic Chinese cuisine in your neighborhood since {new Date().getFullYear()}.</p>
                </div>
                {/* <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="text-sm space-y-2">
                    <li><a href="#" className="hover:underline">Restaurant Guide</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                  </ul>
                </div> */}
                <div>
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <p className="text-sm text-base-content/70">Questions or feedback? Email us at support@chinesefoodmap.com</p>
                </div>
              </div>
              <div className="text-center text-sm text-base-content/70 pt-8 border-t border-base-content/10">
                © {new Date().getFullYear()} Chinese Food Near Me. All rights reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </FilterProvider>
  );
}
