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