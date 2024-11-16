export type CuisineType = 'All' | 'Sichuan' | 'Cantonese' | 'HotPot' | 'DimSum' | 'Noodles';
export type RatingType = 'All' | '4.5+' | '4.0+' | '3.5+';

export interface FilterState {
    cuisine: CuisineType;
    rating: RatingType;
} 
