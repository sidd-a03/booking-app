export interface NavItemInterface {
    id: number;
    title: string;
    url: string;
}

export interface HeroCardItemInterface {
    id: number;
    backgroundImagePath: string;
    imagePath?: string;
    title: string;
    genre: string;
    year: number;
    time: string;
    description: string;
}

export interface HeroCardProps {
    movie: HeroCardItemInterface
}

export interface BlurCircleInterface {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}

export type genre = string;

export interface MovieCardProps {
    path: string;
    id: number | string;
    title: string;
    released_date: string;
    genres: genre[];
    runtime: string;
    ratings: number
}