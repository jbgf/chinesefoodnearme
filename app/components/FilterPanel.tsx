'use client';

import { useFilters } from '../contexts/FilterContext';
import { CuisineType, RatingType } from '../types/filter';

export default function FilterPanel() {
    const { filters, updateFilters } = useFilters();

    const cuisineTypes: CuisineType[] = ['All', 'Sichuan', 'Cantonese', 'HotPot', 'DimSum', 'Noodles'];
    const ratingOptions: RatingType[] = ['All', '4.5+', '4.0+', '3.5+'];

    return (
        <>
            {/* 移动端折叠面板 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-xl md:hidden">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium py-2 min-h-0">
                    Filter Restaurants
                </div>
                <div className="collapse-content p-2">
                    <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                            {cuisineTypes.map((type) => (
                                <button
                                    key={type}
                                    className={`btn btn-xs ${filters.cuisine === type ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => updateFilters({ cuisine: type })}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-1 mt-2">
                            <select
                                className="select select-bordered select-xs flex-1"
                                value={filters.rating}
                                onChange={(e) => updateFilters({ rating: e.target.value as RatingType })}
                            >
                                <option value="All">All Ratings</option>
                                {ratingOptions.slice(1).map((rating) => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* 桌面端卡片 */}
            <div className="hidden md:block card bg-base-100 shadow-xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl mb-2">
                        Find Chinese Restaurants
                    </h2>
                    <p className="text-base-content/70 mb-4">
                        Filter by cuisine type
                    </p>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                            {cuisineTypes.map((type) => (
                                <button
                                    key={type}
                                    className={`btn btn-sm ${filters.cuisine === type ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => updateFilters({ cuisine: type })}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <select
                                className="select select-bordered select-sm flex-1"
                                value={filters.rating}
                                onChange={(e) => updateFilters({ rating: e.target.value as RatingType })}
                            >
                                <option value="All">All Ratings</option>
                                {ratingOptions.slice(1).map((rating) => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 