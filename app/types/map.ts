export interface MapLocation {
    lat: number;
    lng: number;
}

export interface MapBounds {
    north: number;
    south: number;
    east: number;
    west: number;
}

export interface Restaurant {
    id: string;
    name: string;
    location: MapLocation;
    rating?: number;
    cuisine?: string;
} 