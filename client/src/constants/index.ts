import type {HeroCardItemInterface, MovieCardProps, NavItemInterface} from "../types";

export const NavItems: NavItemInterface[] = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Movies',
        url: '/movies',
    },
    {
        id: 3,
        title: 'Theaters',
        url: '/theaters',
    },
    {
        id: 4,
        title: 'Releases',
        url: '/releases',
    },
    {
        id: 5,
        title: 'Favorites',
        url: '/favorites',
    }
]

export const HeroCardItems: HeroCardItemInterface[] = [
    {
        id: 0,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/8zbAoryWbtH0DKdev8abFAjdufy.jpg',
        title: 'Stranger Things',
        genre: 'Horror | Sci-Fi',
        year: 2025,
        time: '2h 56m',
        description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries'
    },
    {
        id: 1,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/ygKhfLwnN8oADzbCXKDDchT5Znm.jpg',
        title: 'The Batman',
        genre: 'Action | Crime',
        year: 2022,
        time: '2h 56m',
        description: 'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past'
    },
    {
        id: 2,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/oXka1yHB8kjMyedK11X2ejo8VjX.jpg',
        title: 'Your Name.',
        genre: 'Anime | Romance | Fantasy',
        year: 2016,
        time: '1h 50m',
        description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person'
    },
    {
        id: 3,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/cyecB7godJ6kNHGONFjUyVN9OX5.jpg',
        imagePath: '/assets/images/marvelLogo.svg',
        title: 'Iron Man',
        genre: 'Action | Adventure | Sci-Fi',
        year: 2008,
        time: '2h 6m',
        description: 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world'
    },
    {
        id: 4,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/5LtSjMNw6j3LkG29Oa4O0iY5U8.jpg',
        title: 'Jawan',
        genre: 'Action | Thriller',
        year: 2023,
        time: '2h 49m',
        description: 'A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many'
    },
    {
        id: 5,
        backgroundImagePath: 'https://image.tmdb.org/t/p/original/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg',
        title: 'The Amazing Spider-Man',
        genre: 'Action | Adventure | Sci-Fi',
        year: 2012,
        time: '2h 16m',
        description: 'Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. While unravelling his parents\' disappearance, he must fight against the Lizard'
    }
]

export const MovieData: MovieCardProps[] = [
    {
        id: 324544,
        title: "In the Lost Lands",
        path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        released_date: "2025-02-27",
        genres: ["Action", "Fantasy", "Adventure"],
        runtime: "1h 42m",
        ratings: 6.4
    },
    {
        id: 1232546,
        title: "Until Dawn",
        path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        released_date: "2025-04-23",
        genres: ["Horror", "Mystery"],
        runtime: "1h 43m",
        ratings: 6.4
    },
    {
        id: 916224,
        title: "Suzume",
        path: "https://image.tmdb.org/t/p/original/yStW1TXF5s7Tbtu9KjIZEaWl6HL.jpg",
        released_date: "2022-11-11",
        genres: ["Animation", "Fantasy", "Adventure"],
        runtime: "2h 02m",
        ratings: 8.3
    },
    {
        id: 668489,
        title: "Havoc",
        path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        released_date: "2025-04-25",
        genres: ["Action", "Crime", "Thriller"],
        runtime: "1h 47m",
        ratings: 6.5
    },
    {
        id: 1311031,
        title: "Demon Slayer: Infinity Castle",
        // Official Key Visual style image
        path: "https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
        released_date: "2025-09-12", // US/International Release
        genres: ["Animation", "Action", "Fantasy", "Thriller"],
        runtime: "2h 35m", // Confirmed runtime
        ratings: 9.5 // Early projected ratings/hype
    },
    {
        id: 575265,
        title: "Mission: Impossible - The Final Reckoning",
        path: "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        released_date: "2025-05-17",
        genres: ["Action", "Adventure", "Thriller"],
        runtime: "2h 50m",
        ratings: 7.0
    },
    {
        id: 986056,
        title: "Thunderbolts*",
        path: "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        released_date: "2025-04-30",
        genres: ["Action", "Science Fiction", "Adventure"],
        runtime: "2h 07m",
        ratings: 7.4
    },
    {
        id: 533535,
        title: "Deadpool & Wolverine",
        path: "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        released_date: "2024-07-26",
        genres: ["Action", "Comedy", "Science Fiction"],
        runtime: "2h 08m",
        ratings: 7.7
    },
    {
        id: 1022789,
        title: "Inside Out 2",
        path: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        released_date: "2024-06-14",
        genres: ["Animation", "Family", "Drama"],
        runtime: "1h 36m",
        ratings: 7.6
    },
    {
        id: 693134,
        title: "Dune: Part Two",
        path: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        released_date: "2024-03-01",
        genres: ["Science Fiction", "Adventure", "Drama"],
        runtime: "2h 46m",
        ratings: 8.2
    },
    {
        id: 786892,
        title: "Furiosa: A Mad Max Saga",
        // Switched to a more stable poster version
        path: "https://image.tmdb.org/t/p/original/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg",
        released_date: "2024-05-24",
        genres: ["Action", "Adventure", "Sci-Fi"],
        runtime: "2h 28m",
        ratings: 7.6
    },
    {
        id: 653346,
        title: "Kingdom of the Planet of the Apes",
        path: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        released_date: "2024-05-08",
        genres: ["Science Fiction", "Adventure", "Action"],
        runtime: "2h 25m",
        ratings: 6.8
    }
];