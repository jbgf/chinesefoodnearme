'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { FilterState, CuisineType, RatingType } from '../types/filter';

interface FilterContextType {
    filters: FilterState;
    updateFilters: (newFilters: Partial<FilterState>) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
    const [filters, setFilters] = useState<FilterState>({
        cuisine: 'All',
        rating: 'All',
    });

    const updateFilters = (newFilters: Partial<FilterState>) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilters = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a FilterProvider');
    }
    return context;
}; 