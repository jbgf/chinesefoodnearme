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
        <section className="bg-base-100 flex-1">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Why Choose Our Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="card bg-base-200 hover:shadow-lg transition-all">
                <div className="card-body p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium flex items-center gap-2">
                    <span className="text-2xl md:text-3xl">🍜</span>
                    <span>Real-time Updates</span>
                  </h3>
                  <p className="text-sm md:text-base text-base-content/70">
                    Get live information about restaurant availability
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 hover:shadow-lg transition-all">
                <div className="card-body p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium flex items-center gap-2">
                    <span className="text-2xl md:text-3xl">🌟</span>
                    <span>Verified Reviews</span>
                  </h3>
                  <p className="text-sm md:text-base text-base-content/70">
                    Read authentic reviews from food lovers
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 hover:shadow-lg transition-all">
                <div className="card-body p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium flex items-center gap-2">
                    <span className="text-2xl md:text-3xl">📍</span>
                    <span>Smart Recommendations</span>
                  </h3>
                  <p className="text-sm md:text-base text-base-content/70">
                    Get personalized dining suggestions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-200 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="collapse bg-base-100">
                <summary className="collapse-title text-lg font-medium">How do I search for restaurants?</summary>
                <div className="collapse-content">
                  <p>Simply click anywhere on the map to search for Chinese restaurants in that area. Use our filters to refine your search by cuisine type and ratings.</p>
                </div>
              </details>
              <details className="collapse bg-base-100">
                <summary className="collapse-title text-lg font-medium">What types of Chinese cuisine are available?</summary>
                <div className="collapse-content">
                  <p>We feature a wide variety of Chinese cuisines including Sichuan, Cantonese, Hot Pot, Dim Sum, and more. Use our filters to find your preferred style.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <footer className="bg-base-300 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-base-content/70">
              © {new Date().getFullYear()} Chinese Food Near Me. Your guide to authentic Chinese cuisine.
            </p>
          </div>
        </footer>
      </div>
    </FilterProvider>
  );
}
