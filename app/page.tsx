import Image from "next/image";
import GoogleMap from "./server-component/google-map";

export default function Home() {
  return (
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
      <div className="relative">

        <GoogleMap />
        <div className="md:absolute bottom-4 left-2 right-2 md:bottom-auto md:top-4 md:left-8 md:right-auto md:w-[400px]">
          <div className="collapse collapse-arrow bg-base-100 shadow-xl md:hidden">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium py-2 min-h-0">
              Filter Restaurants
            </div>
            <div className="collapse-content p-2">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <button className="btn btn-xs btn-outline">All</button>
                  <button className="btn btn-xs btn-outline">Sichuan</button>
                  <button className="btn btn-xs btn-outline">Cantonese</button>
                  <button className="btn btn-xs btn-outline">Hot Pot</button>
                  <button className="btn btn-xs btn-outline">Dim Sum</button>
                  <button className="btn btn-xs btn-outline">Noodles</button>
                </div>
                <div className="flex gap-1 mt-2">
                  {/* <select className="select select-bordered select-xs flex-1">
                    <option>Price Range</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                  </select> */}
                  <select className="select select-bordered select-xs flex-1">
                    <option>Rating</option>
                    <option>4.5+</option>
                    <option>4.0+</option>
                    <option>3.5+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block card bg-base-100 shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl mb-2">
                Find Chinese Restaurants
              </h2>
              <p className="text-base-content/70 mb-4">
                Filter by cuisine type
              </p>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline flex-1">All</button>
                  <button className="btn btn-sm btn-outline flex-1">Sichuan</button>
                  <button className="btn btn-sm btn-outline flex-1">Cantonese</button>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline flex-1">Hot Pot</button>
                  <button className="btn btn-sm btn-outline flex-1">Dim Sum</button>
                  <button className="btn btn-sm btn-outline flex-1">Noodles</button>
                </div>
                <div className="flex gap-2">
                  {/* <select className="select select-bordered select-sm flex-1">
                    <option>Price Range</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                  </select> */}
                  <select className="select select-bordered select-sm flex-1">
                    <option>Rating</option>
                    <option>4.5+</option>
                    <option>4.0+</option>
                    <option>3.5+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>



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
    </div>
  );
}
